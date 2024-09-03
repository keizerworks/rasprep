import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (

    <div className=' mx-auto flex items-center justify-center mt-2'>
    <div className=' w-fit  text-center border border-slate-300 text-neutral-600 hover:text-neutral-800 hover:border-slate-400 duration-300  rounded-full  flex justify-center items-center '>
      <Link href={"./home"} className='border hover:bg-blue-300 border-r-neutral-500 rounded-l-full  border-y-0 py-2 border-l-0 duration-700 px-6'>HOME</Link>
      <Link href={"./prelims"} className='border border-r-neutral-500 border-y-0 border-l-0 px-6 py-2 duration-700  hover:bg-blue-300'>PRELIMS</Link>
      <Link href={"./mains"} className='border hover:bg-blue-300 border-r-neutral-500 border-y-0 border-l-0 px-6 py-2 duration-700'>MAINS</Link>
      <Link href={"./tests"} className='border hover:bg-blue-300 border-r-neutral-500 border-y-0 border-l-0 px-6 py-2 duration-700'>TESTS</Link>
      <Link href={"./recall"} className=' border hover:bg-blue-300 border-r-neutral-500 rounded-r-full px-6 py-2 duration-700 '>RECALL</Link>
    </div>
    </div>
  )
}
