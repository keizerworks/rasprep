import React from "react";

export default function SyllabusTracker() {
  return (
    <div className="border flex flex-col justify-between gap-4  border-neutral-200 bg-white/80 rounded-md items-center   p-3">
      <div className="font-bold  underline underline-offset-2 mr-auto">
        Syllabus Tracker
      </div>

      <div className="flex gap-6  text-gray-700 px-5 w-fit rounded-md  text-lg ">
        <div className="text-center   space-y-1 flex flex-col border border-neutral-200 bg-white p-3 px-7 rounded-md  ">
          <p className="font-semibold">Prelims</p>
          <div className="relative size-28">
            <svg
              className="size-full -rotate-90"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Circle */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-gray-200 dark:text-neutral-700"
                strokeWidth="2"
              ></circle>
              {/* Progress Circle */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-blue-600 dark:text-blue-300"
                strokeWidth="3"
                strokeDasharray="100"
                strokeDashoffset="65"
                strokeLinecap="round"
              ></circle>
            </svg>

            {/* Percentage Text */}
            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <span className="text-center text-2xl font-bold text-blue-600 dark:text-blue-500">
                35%
              </span>
            </div>
          </div>
        </div>
        <div className="text-center   space-y-1 flex flex-col border border-neutral-200 bg-white p-3 px-7 rounded-md ">
          <p className="font-semibold">Mains</p>
          <div className="relative size-28">
            <svg
              className="size-full -rotate-90"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Circle */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-gray-200 dark:text-neutral-700"
                strokeWidth="2"
              ></circle>
              {/* Progress Circle */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-blue-600 dark:text-blue-300"
                strokeWidth="3"
                strokeDasharray="100"
                strokeDashoffset="31" //here the main value will change if 0 then it will be 100%
                strokeLinecap="round"
              ></circle>
            </svg>

            {/* Percentage Text */}
            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <span className="text-center text-2xl font-bold text-blue-600 dark:text-blue-500">
                69%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
