import React from 'react'

function CompletedTasks({data}) {
  return (
    <div className="h-full w-[300px] bg-blue-400 rounded-xl flex-shrink-0">
        
        <div className="flex justify-between p-5 items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{data.category}</h3> <h4>{data.taskDate}</h4>
        </div>
        <div className="px-5 py-2 ">
          <h2 className="text-2xl font-semibold">{data.taskTitle}</h2>
          <p className="mt-3">{data.taskDescription}</p>
        </div>
             <div className='flex justify-evenly mt-4  '>
       <button className='bg-emerald-600  px-3 py-2 rounded-2xl text-sm'>Complete</button>


       </div>

      </div>
  )
}

export default CompletedTasks