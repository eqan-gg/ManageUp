import React from 'react';

function TasksNumber({ data }) {
  const taskCards = [
    { count: data.taskCounts.newTask, label: 'New Task', color: 'bg-red-500' },
    { count: data.taskCounts.active, label: 'Active Task', color: 'bg-blue-500' },
    { count: data.taskCounts.completed, label: 'Completed Task', color: 'bg-emerald-500' },
    { count: data.taskCounts.failed, label: 'Failed Task', color: 'bg-yellow-400' },
  ];

  return (
    <div className="flex flex-wrap justify-between gap-6 mt-10">
      {taskCards.map((task, idx) => (
        <div
          key={idx}
          className={`${task.color} w-[48%] md:w-[23%] rounded-xl px-6 py-6 shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer flex flex-col items-center justify-center`}
        >
          <h2 className="text-3xl font-bold">{task.count}</h2>
          <h3 className="text-xl font-medium mt-2">{task.label}</h3>
        </div>
      ))}
    </div>
  );
}

export default TasksNumber;
