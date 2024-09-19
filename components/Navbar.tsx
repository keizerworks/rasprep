import React from 'react'
import Link from 'next/link'

const navigate = [
  {
    link: "./home",
    name: "Home"
  },
  {
    link: "./prelims",
    name: "Prelims"
  },
  {
    link: "./mains",
    name: "Mains"
  },
  {
    link: "./tests",
    name: "Tests"
  },
  {
    link: "./recall",
    name: "Recall"
  },
]

export default function Navbar() {
  return (
    <div className='mx-auto flex items-center justify-center mt-4'>
      <div className='w-fit text-center border border-neutral-300 text-neutral-600 hover:text-neutral-800 hover:border-slate-400 duration-300 rounded-full flex justify-center items-center'>
        {navigate.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className={`border hover:bg-[#365496] hover:text-white hover:font-semibold border-r-neutral-400 border-y-0 py-2 px-6 duration-700 ${idx === 0 ? 'rounded-l-full' : ''} ${idx === navigate.length - 1 ? 'rounded-r-full' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
