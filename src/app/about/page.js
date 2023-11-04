import Image from "next/image";
import React from "react";
import profilePic from "public/img.jpg"

const page = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center">
      <div className="w-1/2 ml-10">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Hello I am,<br />
          </span>{" "}
          <p className="mt-5">
          Chandan Pradhan
          </p>
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Student at Veer Surendra Sai University Of Technology currently pursuing MCA, looking forward for quality experience in promising domains. Always ready for new opportunities.
        </p>
      </div>
      <div className="relative mx-auto my-3 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
          <Image
          src={profilePic}
          height={426}
          width={654}
          alt="img"/>
        </div>
      </div>
    </div>
  );
};

export default page;
