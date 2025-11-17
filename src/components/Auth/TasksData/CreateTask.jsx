import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

function CreateTask() {
  const leftRef = useRef(null);
  const [leftHeight, setLeftHeight] = useState('auto');

  useEffect(() => {
    if (leftRef.current) {
      setLeftHeight(`${leftRef.current.offsetHeight}px`);
    }

    const handleResize = () => {
      if (leftRef.current) {
        setLeftHeight(`${leftRef.current.offsetHeight}px`);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, settaskTitle] = useState('');
  const [taskDescription, settaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHanlder = (e) => {
    e.preventDefault();

    const NewTaskData = {
      taskTitle,
      taskDescription,
      taskDate,
      assignTo,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedUsers = userData.map((emp) => {
      if (emp.firstName.toLowerCase() === assignTo.toLowerCase()) {
        return {
          ...emp,
          taskCounts: {
            ...emp.taskCounts,
            newTask: emp.taskCounts.newTask + 1,
          },
          tasks: [...emp.tasks, NewTaskData],
        };
      }
      return emp;
    });

    setUserData(updatedUsers);
    localStorage.setItem('employees', JSON.stringify(updatedUsers));

    // Reset form
    settaskTitle('');
    settaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
  };

  return (
    <div className="p-7 bg-[#181818] mt-7 rounded-2xl shadow-xl border border-white/10">
      <h2 className="text-xl font-semibold mb-6 text-gray-200">Create New Task</h2>

      <form
        className="flex flex-wrap w-full items-start justify-between gap-8"
        onSubmit={submitHanlder}
      >
        {/* Left Section */}
        <div ref={leftRef} className="w-full md:w-1/2 space-y-5">
          <div>
            <label className="text-sm mb-1 text-gray-400">Task Title</label>
            <input
              className="text-sm py-2 px-3 w-full md:w-4/5 rounded-lg bg-[#111] border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition outline-none"
              type="text"
              placeholder="Enter task name"
              value={taskTitle}
              onChange={(e) => settaskTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm mb-1 text-gray-400">Due Date</label>
            <input
              value={taskDate}
              className="text-sm py-2 px-3 w-full md:w-4/5 rounded-lg bg-[#111] border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition outline-none"
              type="date"
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm mb-1 text-gray-400">Assign To</label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-2 px-3 w-full md:w-4/5 rounded-lg bg-[#111] border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition outline-none"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div>
            <label className="text-sm mb-1 text-gray-400">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-3 w-full md:w-4/5 rounded-lg bg-[#111] border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition outline-none"
              type="text"
              placeholder="Enter category"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[42%] flex flex-col items-start">
          <label className="text-sm mb-1 text-gray-400">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => settaskDescription(e.target.value)}
            style={{ height: leftHeight }}
            className="w-full text-sm py-3 px-3 rounded-lg bg-[#111] border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition outline-none resize-none"
            placeholder="Write task description..."
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 px-6 rounded-lg text-sm font-medium w-full mt-4 shadow-md"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
