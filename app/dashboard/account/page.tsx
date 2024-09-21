import Image from "next/image";

export default function DialogDemo() {
  return (
    <div className="w-[50%] mx-auto ">
      <div className="w-full flex flex-col">
        <div className="border flex justify-between gap-4 shadow-md border-neutral-200 bg-white/80 rounded-md mt-3 p-3">
          <div className="h-full space-y-1">
            <p className="text-blue-500">
              <span className="font-semibold text-black ">Name:</span> Rahul Sain
            </p>
            <p>
              <span className="font-semibold">Phone no:</span> 979345034
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              rahulsain@something.com
            </p>
            <p>
              <span className="font-semibold">Billing Address:</span> Chandigarh
              University
            </p>
          </div>

          <Image
            height={1000}
            width={1000}
            alt="profile picture"
            src={"https://avatars.githubusercontent.com/u/129046143?v=4"}
            className="size-32 border border-slate-300 rounded-md"
          />
        </div>

        <div className="border justify-between gap-2  flex flex-col shadow-md border-neutral-200 bg-white/80 rounded-md mt-3 p-3">
          <div className="font-bold underline underline-offset-2">Prelims</div>
          <div className="flex gap-4">
            <p>
              <span className="font-semibold">Start date:</span> 12/03/2025
            </p>
            <p>
              <span className="font-semibold">End date:</span> 12/03/2025
            </p>
          </div>
        </div>
        <div className="border justify-between gap-2  flex flex-col shadow-md border-neutral-200 bg-white/80 rounded-md mt-3 p-3">
          <div className="font-bold underline underline-offset-2">Test Series</div>
          <div className="flex gap-4">
            <p>
              <span className="font-semibold">Start date:</span> 12/03/2025
            </p>
            <p>
              <span className="font-semibold">End date:</span> 12/03/2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
