import React from 'react';

function NewTasks({ data, setAcceptedState }) {
  const onClickHandler = () => {
    setAcceptedState("true");
  }

  return (
    <div className="h-full w-[300px] bg-gradient-to-br from-indigo-500/90 to-blue-500/90 rounded-2xl flex-shrink-0 shadow-lg backdrop-blur-sm border border-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      
      <div className="flex justify-between p-5 items-center">
        <h3 className="bg-red-600/80 px-3 py-1 rounded-full text-xs tracking-wide shadow-sm">{data.category}</h3>
        <h4 className="text-xs opacity-90">{data.taskDate}</h4>
      </div>

      <div className="px-5 py-2 text-white">
        <h2 className="text-xl font-semibold leading-tight">{data.taskTitle}</h2>
        <p className="mt-3 text-sm opacity-90 leading-relaxed">{data.taskDescription}</p>
      </div>

      <div className="flex justify-center mt-5 mb-4">
        <button
          onClick={onClickHandler}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200"
        >
          Accept Task
        </button>
      </div>

    </div>
  )
}

export default NewTasks;
