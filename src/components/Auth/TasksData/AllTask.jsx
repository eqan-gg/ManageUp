import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../../Context/AuthProvider.jsx';



function AllTask() {

   const [userData] = useContext(AuthContext);  

  


  return (
    <div className=" bg-[#1c1c1c] p-5 h-60 mt-5 ">

      <div className='bg-green-600 py-2 px-5 rounded flex justify-between mb-5'> <h2 className='w-1/5 text-lg font-medium'>Employee Name </h2> <h3 className='w-1/5 text-lg font-medium '> New Task </h3> <h3 className='w-1/5 text-lg font-medium '> Active Task </h3> <h3 className='w-1/5 text-lg font-medium '> Completed </h3> <h3 className='w-1/5 text-lg font-medium '> Failed </h3>  </div>
       
      <div className='h-[80%] overflow-auto'>

         { userData.map((emp,idx)=> (        <div key={idx} className='bg-blue-500 py-2 px-5 rounded flex justify-between mb-5'> <h2 className='w-1/5 text-lg font-medium'> {emp.firstName} </h2> <h3 className='w-1/5 text-lg font-medium'> {emp.taskCounts.newTask} </h3> <h3 className='w-1/5 text-lg font-medium'> {emp.taskCounts.active} </h3>
       <h3 className='w-1/5 text-lg font-medium'> {emp.taskCounts.completed} </h3> <h3 className='w-1/5 text-lg font-medium'> {emp.taskCounts.failed} </h3>  </div> ))} 

      </div>
    </div>
  )
}

export default AllTask