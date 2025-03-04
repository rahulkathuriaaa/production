import { googleLogin, loginWithEmail, verifyOtp } from "@/api/authApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
export const fetchTokenFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

const initialState: AuthState = {
  token: fetchTokenFromLocalStorage() || null,
  status: "idle",
  error: null,
};

export const emailLogin = createAsyncThunk(
  "auth/emailLogin",
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await loginWithEmail(email);
      return response.message;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to login"
      );
    }
  }
);

export const otpVerification = createAsyncThunk(
  "auth/verifyOtp",
  async (
    { email, otp }: { email: string; otp: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await verifyOtp(email, otp);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to verify OTP"
      );
    }
  }
);
export const googleLoginThunk = createAsyncThunk(
  "auth/googleLogin",
  async (tokenId: string, { rejectWithValue }) => {
    try {
      const response = await googleLogin(tokenId);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to login with Google"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(emailLogin.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(emailLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(otpVerification.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.status = "succeeded";
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(otpVerification.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(googleLoginThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.status = "succeeded";
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(googleLoginThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
