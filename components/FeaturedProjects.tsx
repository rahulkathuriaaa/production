import Image from "next/image";
import React from "react";

const FeaturedProjects = () => {
  return (
    <div className="w-full flex justify-center items-center pb-16">
      <div className="flex flex-col gap-16 w-[88%]">
        <div className="flex items-center gap-10">
          <p className="bg-[#8833FF] text-4xl px-2 py-1 rounded-lg font-medium">
            Featured Projects
          </p>
          <p className="text-lg w-[36.5rem]">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="w-full flex justify-between items-center gap-10">
            <div className="flex w-[50%] p-12 justify-between border border-[#191A23] bg-[#F3F3F3] rounded-3xl shadow">
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="bg-[#8833FF] px-1 rounded-lg text-3xl font-medium">
                    Search engine
                  </h2>
                  <span className="bg-[#8833FF] px-1 bg-cover rounded-lg text-3xl font-medium">
                    optimization
                  </span>
                </div>
                <div>
                  <button className="text-xl">Learn More</button>
                </div>
              </div>
              <Image width={210} height={166} src="/seo.svg" alt="seo" />
            </div>

            <div className="flex w-[50%] p-12 justify-between border border-[#191A23] bg-[#8833FF] rounded-3xl shadow">
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="bg-white px-1 rounded-lg text-3xl font-medium">
                    Pay-per-click
                  </h2>
                  <span className="bg-white px-1 bg-cover rounded-lg text-3xl font-medium">
                    advertising
                  </span>
                </div>
                <div>
                  <button className="text-xl">Learn More</button>
                </div>
              </div>
              <Image width={236} height={147} src="/pay.svg" alt="seo" />
            </div>
          </div>

          <div className="w-full flex justify-between items-center gap-10">
            <div className="flex w-[50%] p-12 justify-between border border-[#191A23] bg-[#191A23] rounded-3xl shadow">
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="bg-white px-1 rounded-lg text-3xl font-medium">
                    Social Media
                  </h2>
                  <span className="bg-white px-1 bg-cover rounded-lg text-3xl font-medium">
                    Marketing
                  </span>
                </div>
                <div>
                  <button className="text-xl text-white">Learn More</button>
                </div>
              </div>
              <Image width={210} height={166} src="/social.svg" alt="seo" />
            </div>

            <div className="flex w-[50%] p-12 justify-between border border-[#191A23] bg-[#F3F3F3] rounded-3xl shadow">
              <div className="flex flex-col justify-between">
                <div>
                  <span className="bg-[#8833FF] px-1 rounded-lg text-3xl font-medium">
                    Email
                  </span>
                  <h2 className="bg-[#8833FF] px-1 bg-cover rounded-lg text-3xl font-medium">
                    Marketing
                  </h2>
                </div>
                <div>
                  <button className="text-xl">Learn More</button>
                </div>
              </div>
              <Image width={228} height={147} src="/email.svg" alt="seo" />
            </div>
          </div>

          <div className="w-full flex justify-between items-center gap-10">
            <div className="flex w-[50%] p-12 justify-between border border-[#191A23] bg-[#8833FF] rounded-3xl shadow">
              <div className="flex flex-col justify-between">
                <div>
                  <span className="bg-white px-1 rounded-lg text-3xl font-medium">
                    Content
                  </span>
                  <h2 className="bg-white px-1 bg-cover rounded-lg text-3xl font-medium">
                    Creation
                  </h2>
                </div>
                <div>
                  <button className="text-xl">Learn More</button>
                </div>
              </div>
              <Image width={210} height={166} src="/content.svg" alt="seo" />
            </div>

            <div className="flex w-[50%] p-12 justify-between border border-[#191A23] bg-[#191A23] rounded-3xl shadow">
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="bg-[#8833FF] px-1 rounded-lg text-3xl font-medium">
                    Analytics and
                  </h2>
                  <span className="bg-[#8833FF] px-1 bg-cover rounded-lg text-3xl font-medium">
                    Tracking
                  </span>
                </div>
                <div>
                  <button className="text-xl text-white">Learn More</button>
                </div>
              </div>
              <Image width={242} height={150} src="/analytics.svg" alt="seo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
