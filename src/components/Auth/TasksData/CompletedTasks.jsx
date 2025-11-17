import React from 'react'

function CompletedTasks({ data }) {
  return (
    <div className="h-full w-[300px] bg-blue-500/90 rounded-2xl shadow-lg flex-shrink-0 backdrop-blur-sm border border-blue-300/30">

      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <h3 className="bg-red-600/90 px-3 py-1 rounded-md text-sm shadow">
          {data.category}
        </h3>
        <h4 className="text-sm opacity-80">{data.taskDate}</h4>
      </div>

      {/* Task title + description */}
      <div className="px-5 py-2">
        <h2 className="text-xl font-bold tracking-wide">{data.taskTitle}</h2>
        <p className="mt-3 text-sm leading-relaxed opacity-90">
          {data.taskDescription}
        </p>
      </div>

      {/* Complete button */}
      <div className="flex justify-center mt-6 pb-4">
        <button className="bg-emerald-600 hover:bg-emerald-700 transition px-5 py-2 rounded-xl text-sm font-medium shadow-sm">
          Complete
        </button>
      </div>

    </div>
  )
}

export default CompletedTasks
