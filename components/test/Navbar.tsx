import React from "react";

export default function Navbar({ selectedTab, setSelectedTab }: any) {
  return (
    <div className="w-full flex shadow-md">
      <div
        onClick={() => setSelectedTab("prelims")}
        className={`text-xl w-1/2 text-center font-semibold border border-x-0 border-t-0 py-3 cursor-pointer ${
          selectedTab === "prelims"
            ? "border-b-blue-500 border-b-2 text-black"
            : "border-b-neutral-300 text-gray-500"
        }`}
      >
        Prelims
      </div>
      <div
        onClick={() => setSelectedTab("mains")}
        className={`text-xl w-1/2 text-center font-semibold border border-x-0 border-t-0 py-3 cursor-pointer duration-500 ${
          selectedTab === "mains"
            ? "border-b-blue-500 border-b-2 text-black"
            : "border-b-neutral-300 text-gray-500"
        }`}
      >
        Mains
      </div>
    </div>
  );
}
