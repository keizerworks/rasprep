
import React from 'react'
import { ComQuestions } from './ComQuestions'
export default function ComQueries() {
  return (
    <div className="border flex flex-col justify-between gap-4  border-neutral-200 bg-white/85 rounded-md items-center   p-3">
      <div className="font-bold  underline underline-offset-2 mr-auto">
        Community Questions
      </div>
      
      <ComQuestions/>
    </div>
  )
}
