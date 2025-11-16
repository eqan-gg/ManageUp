import React from 'react'
import Header from '../Header/Header'
import TasksNumber from '../TasksData/TasksNumber'
import Tasklist from '../TasksData/Tasklist'

function EmployeeDashboard(props) {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen text-white '>
     
        <Header data={props.data} changeUser={props.changeUser}/>
        <TasksNumber data={props.data} />
        <Tasklist data={props.data}/>



    </div>
  )
}

export default EmployeeDashboard