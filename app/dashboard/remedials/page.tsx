import { Description } from '@radix-ui/react-dialog'
import React from 'react'


const remedials = [
  {
    topic: "Lorem",
    Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptate placeat veniam sapiente nulla iusto, dolor minima. Mollitia voluptatibus earum quibusdam voluptates! Omnis culpa tempore enim similique odit. Corporis, pariatur."
  },
  {
    topic: "Lorem",
    Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptate placeat veniam sapiente nulla iusto, dolor minima. Mollitia voluptatibus earum quibusdam voluptates! Omnis culpa tempore enim similique odit. Corporis, pariatur."
  },
  {
    topic: "Lorem",
    Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptate placeat veniam sapiente nulla iusto, dolor minima. Mollitia voluptatibus earum quibusdam voluptates! Omnis culpa tempore enim similique odit. Corporis, pariatur."
  },
  {
    topic: "Lorem",
    Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptate placeat veniam sapiente nulla iusto, dolor minima. Mollitia voluptatibus earum quibusdam voluptates! Omnis culpa tempore enim similique odit. Corporis, pariatur."
  },
  {
    topic: "Lorem",
    Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptate placeat veniam sapiente nulla iusto, dolor minima. Mollitia voluptatibus earum quibusdam voluptates! Omnis culpa tempore enim similique odit. Corporis, pariatur."
  },
  {
    topic: "Lorem",
    Description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi voluptate placeat veniam sapiente nulla iusto, dolor minima. Mollitia voluptatibus earum quibusdam voluptates! Omnis culpa tempore enim similique odit. Corporis, pariatur."
  },

]

export default function page() {
  return (
    <div className='w-1/2 mx-auto'>
      <p className='text-xl font-medium'>Remedials</p>
    <div className=' overflow-y-scroll h-[85vh] no-scrollbar'>
      <div className="w-full flex flex-col">
      {remedials.map((item, idx) => (
          
          <div key={idx} className="border flex justify-between gap-3 shadow-md border-neutral-200 bg-white/80 rounded-md mt-3 p-3 flex-col">
          <div className="mr-auto font-semibold text-neutral-700">{item.topic}</div>
          <p className='text-sm'>{item.Description}</p>
          
        </div>
      ))}
      </div>
      

    </div>
    </div>
  )
}
