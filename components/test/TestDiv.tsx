import React from 'react';

export default function TestDiv({ testNo, subject, number, time, status }: any) {
  const statusClass = status === "Available" ? 'text-green-500' : 'text-blue-400';

  return (
    <div className='w-full p-3 mt-2 border border-b-slate-300 border-x-0 border-t-0 space-y-5 bg-white hover:bg-neutral-100 duration-300'>
      <p className='text-lg font-bold'>Test #{testNo}: {subject}</p>
      <div className='flex justify-between'>
        <p className='text-gray-400 text-sm'>{number} Ques | {time} Mins</p>
        {/* Apply dynamic class based on the status */}
        <p className={`text-sm ${statusClass}`}>{status}</p>
      </div>
    </div>
  );
}
