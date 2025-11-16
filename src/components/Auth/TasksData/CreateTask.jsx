import React, { useContext, useEffect, useRef, useState } from 'react';
import Login from '../Login';
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


      
     const [userData,setUserData] = useContext(AuthContext); 
   
     
  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  // const [NewtaskData, setNewTaskData] = useState({})

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

  // ✔ create a NEW array so React can detect change
  const updatedUsers = userData.map(emp => {
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

  // ✔ update state
  setUserData(updatedUsers);

  // ✔ update localStorage
  localStorage.setItem("employees", JSON.stringify(updatedUsers));

  // reset form
  settaskTitle('');
  settaskDescription('');
  setTaskDate('');
  setAssignTo('');
  setCategory('');
};


  return (
    <div className="p-6 bg-[#1c1c1c] mt-7 rounded-lg shadow-md">
      <form className="flex flex-wrap w-full items-start justify-between gap-6" onSubmit={submitHanlder}>
        
        {/* Left Section */}
        <div ref={leftRef} className="w-full md:w-1/2 space-y-4">
          <div>
            <h3 className="text-sm mb-1 text-gray-300">Task Title</h3>
            <input
              className="text-sm py-2 px-3 w-full md:w-4/5 rounded outline-none bg-transparent border border-gray-500 focus:border-blue-400 transition"
              type="text"
              placeholder="Task Name"
              value={taskTitle}
              onChange={(e) => settaskTitle(e.target.value)}
            />
          </div>

          <div>
            <h3 className="text-sm mb-1 text-gray-300">Date</h3>
            <input value={taskDate}
              className="text-sm py-2 px-3 w-full md:w-4/5 rounded outline-none bg-transparent border border-gray-500 focus:border-blue-400 transition"
              type="date"
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </div>

          <div>
            <h3 className="text-sm mb-1 text-gray-300">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-2 px-3 w-full md:w-4/5 rounded outline-none bg-transparent border border-gray-500 focus:border-blue-400 transition"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div>
            <h3 className="text-sm mb-1 text-gray-300">Category</h3>
            <input 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-3 w-full md:w-4/5 rounded outline-none bg-transparent border border-gray-500 focus:border-blue-400 transition"
              type="text"
              placeholder="Enter category"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/5 flex flex-col items-start">
          <h3 className="text-sm mb-1 text-gray-300">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => settaskDescription(e.target.value)}
            style={{ height: leftHeight }}
            className="w-full text-sm py-2 px-3 rounded outline-none bg-transparent border border-gray-500 focus:border-blue-400 transition resize-none"
            placeholder="Enter task description..."
          ></textarea>
           <div className="w-full flex justify-end mt-4">
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-900 text-white py-2 px-5 rounded text-sm transition w-full"
          >
            Create Task
          </button>
        </div>
        </div>

        {/* Submit Button */}
       
      </form>
    </div>
  );
}

export default CreateTask;
