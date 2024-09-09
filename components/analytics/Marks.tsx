import React from "react";

export default function Marks() {
  return (
    <div className="border flex flex-col justify-between gap-3  border-neutral-200 bg-white/80 rounded-md items-center  p-3">
      <div className="font-bold  underline underline-offset-2 mr-auto">
        Marks
      </div>

      <div className="mr-auto font-semibold text-neutral-700">Average Marks</div>
      
      <div className="flex gap-6  text-gray-700 px-5 w-fit rounded-md  text-lg ">
        <div className="text-center   space-y-1 flex flex-col border border-neutral-200 bg-white p-3 px-7 rounded-md ">
          <p className="font-semibold">Prelims</p>
            <p className="text-blue-500 font-semibold text-4xl">86</p>
        </div>
        <div className="text-center   space-y-1 flex flex-col border border-neutral-200 bg-white p-3 px-9 rounded-md ">
          <p className="font-semibold">Mains</p>
            <p className="text-blue-500 font-semibold text-4xl">73</p>
        </div>
      </div>


<div>
      <div className="mr-auto font-semibold text-neutral-700">
        Remarks
      </div>

        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis libero asperiores repellat distinctio voluptatum eum, dolores error repellendus! Quasi repudiandae similique voluptatem odio, quos adipisci ea iusto excepturi porro voluptas.</p>
        </div>

    </div>
  );
}
