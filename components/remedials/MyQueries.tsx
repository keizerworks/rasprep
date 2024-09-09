
import React from 'react'
import { MyQuestions } from './MyQuestions'
export default function MyQueries() {
  return (
    <div className="border flex flex-col justify-between gap-4  border-neutral-200 bg-white/85 rounded-md items-center   p-3">
      <div className="font-bold  underline underline-offset-2 mr-auto">
        My Queries
      </div>
      <MyQuestions/>
    </div>
  )
}
