import React from "react";

export default function Streak() {
  return (
    <div className="border flex flex-col justify-between gap-4  border-neutral-200 bg-white/85 rounded-md items-center   p-3">
      <div className="font-bold  underline underline-offset-2 mr-auto">
        Streak
      </div>
      <div className="flex gap-6  text-gray-700 px-5 w-fit rounded-md  text-lg ">
        <div className="text-center   space-y-1 flex flex-col border border-neutral-200 bg-white p-3 rounded-md ">
          <p className="font-semibold">Longest Streak</p>
            <p className="text-blue-500 font-semibold text-4xl">90</p>
        </div>
        <div className="text-center   space-y-1 flex flex-col border border-neutral-200 bg-white p-3 rounded-md">
          <p className="font-semibold">Current Streak</p>
            <p className="text-blue-500 font-semibold text-4xl">43</p>
        </div>

      </div>

      <div>
      <div className="mr-auto font-semibold text-neutral-700">
        Goal
      </div>

        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis libero asperiores repellat distinctio voluptatum eu., dolores error repellendus! Quasi repudiandae similique voluptatem odio, quos adipisci ea iusto excepturi porro voluptas.</p>
 </div>

    </div>
  );
}
