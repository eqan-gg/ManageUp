import React from 'react';
import Header from '../Header/Header';
import TasksNumber from '../TasksData/TasksNumber';
import Tasklist from '../TasksData/Tasklist';

function EmployeeDashboard(props) {
  return (
    <div className="bg-gray-900 min-h-screen w-full text-white">
      <div className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md">
        <Header data={props.data} changeUser={props.changeUser} />
      </div>

      <div className="px-8 pt-10 space-y-10 max-w-7xl mx-auto">
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
          <TasksNumber data={props.data} />
        </div>

        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
          <Tasklist data={props.data} />
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
