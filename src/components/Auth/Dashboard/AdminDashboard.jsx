import React from 'react';
import Header from '../Header/Header';
import CreateTask from '../TasksData/CreateTask';
import AllTask from '../TasksData/AllTask';

function AdminDashboard(props) {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
      <div className="sticky top-0 z-50">
        <Header changeUser={props.changeUser} />
      </div>
      <div className="p-6 max-w-7xl mx-auto space-y-8">
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-indigo-400">Create New Task</h2>
          <CreateTask />
        </div>
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 text-indigo-400">All Tasks</h2>
          <AllTask />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
