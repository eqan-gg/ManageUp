import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header/Header';
import CreateTask from '../TasksData/CreateTask';
import AllTask from '../TasksData/AllTask';

function AdminDashboard(props) {
  

  return (
    <>
      <div className="min-h-screen w-full p-5 bg-[#121212] text-white overflow-y-auto">
        <Header changeUser={props.changeUser}  />
        <CreateTask />
        <AllTask/>

       
      </div>
    </>
  );
}

export default AdminDashboard;
