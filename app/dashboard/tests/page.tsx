"use client"
import React, { useState } from "react";
import Navbar from "@/components/test/Navbar";
import TestDiv from "@/components/test/TestDiv";

export default function Page() {
  const [selectedTab, setSelectedTab] = useState("prelims"); // Default to 'prelims'

  // Sample JSON array for TestDiv components
  const testDivData = [
    { status: "Available", time: "10", number: "10", testNo: "1", subject: "History" },
    { status: "Unavailable", time: "15", number: "20", testNo: "2", subject: "Math" },
    { status: "Available", time: "12", number: "12", testNo: "3", subject: "Science" },
    { status: "Available", time: "8", number: "8", testNo: "4", subject: "Geography" },
    { status: "Unavailable", time: "20", number: "25", testNo: "5", subject: "English" },
    { status: "Available", time: "5", number: "5", testNo: "6", subject: "Physics" }
  ];

  return (
    <div className="flex flex-col w-[65%] h-[90vh] mx-auto">
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      
      <div className="flex-grow w-full bg-white border border-slate-300 py-4 px-2 rounded-md mt-4 overflow-scroll no-scrollbar">
        {selectedTab === "prelims" && (
          <div>
            {testDivData.map((test, index) => (
              <TestDiv
                key={index}
                status={test.status}
                time={test.time}
                number={test.number}
                testNo={test.testNo}
                subject={test.subject}
              />
            ))}
          </div>
        )}
        {selectedTab === "mains" && <div>{testDivData.map((test, index) => (
              <TestDiv
                key={index}
                status={test.status}
                time={test.time}
                number={test.number}
                testNo={test.testNo}
                subject={test.subject}
              />
            ))}</div>}
      </div>
    </div>
  );
}
