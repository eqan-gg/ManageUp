import React from 'react'

function AcceptedTasks({ data }) {
  return (
    <div className="h-full w-[300px] bg-emerald-500/90 rounded-2xl shadow-lg flex-shrink-0 backdrop-blur-sm border border-emerald-300/30">

      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <h3 className="bg-red-600/90 px-3 py-1 rounded-md text-sm shadow">
          {data.category}
        </h3>
        <h4 className="text-sm opacity-80">{data.taskDate}</h4>
      </div>

      {/* Title & Description */}
      <div className="px-5 py-2">
        <h2 className="text-xl font-bold tracking-wide">{data.taskTitle}</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-90">
          {data.taskDescription}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-evenly mt-6 pb-4">

        <button className="bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded-xl text-sm font-medium shadow-sm">
          Mark as Completed
        </button>

        <button className="bg-red-500 hover:bg-red-700 transition px-4 py-2 rounded-xl text-sm font-medium shadow-sm">
          Mark as Failed
        </button>

      </div>
    </div>
  )
}

export default AcceptedTasks
