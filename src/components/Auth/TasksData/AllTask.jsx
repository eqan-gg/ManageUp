import React, { useContext } from 'react'
import { AuthContext } from '../../../Context/AuthProvider.jsx';

function AllTask() {

  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-[#181818] p-6 mt-6 rounded-xl shadow-lg border border-white/10">

      {/* Header Row */}
      <div className="bg-green-600/90 py-3 px-6 rounded-lg flex justify-between text-white font-semibold shadow">
        <h2 className="w-1/5 text-sm tracking-wide">Employee Name</h2>
        <h3 className="w-1/5 text-sm tracking-wide">New Task</h3>
        <h3 className="w-1/5 text-sm tracking-wide">Active Task</h3>
        <h3 className="w-1/5 text-sm tracking-wide">Completed</h3>
        <h3 className="w-1/5 text-sm tracking-wide">Failed</h3>
      </div>

      {/* Employee Rows */}
      <div className="h-[250px] overflow-y-auto mt-4 space-y-3 pr-2 custom-scrollbar">

        {userData.map((emp, idx) => (
          <div 
            key={idx} 
            className="bg-[#232323] hover:bg-[#2e2e2e] transition py-3 px-6 rounded-lg flex justify-between text-white shadow border border-white/5"
          >
            <h2 className="w-1/5 font-medium">{emp.firstName}</h2>
            <h3 className="w-1/5 font-medium">{emp.taskCounts.newTask}</h3>
            <h3 className="w-1/5 font-medium">{emp.taskCounts.active}</h3>
            <h3 className="w-1/5 font-medium">{emp.taskCounts.completed}</h3>
            <h3 className="w-1/5 font-medium">{emp.taskCounts.failed}</h3>
          </div>
        ))}

      </div>
    </div>
  )
}

export default AllTask
