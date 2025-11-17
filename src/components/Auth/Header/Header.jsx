import React, { useState, useEffect } from 'react';

function Header(props) {

  const LogoutUser = () => {
    localStorage.removeItem("loggedInUser");
    props.changeUser("");
  };

  const [username, setUsername] = useState("");

  useEffect(() => {
    if (!props.data) {
      setUsername("Admin");
    } else {
      setUsername(props.data.firstName);
    }
  }, [props.data]);

  return (
    <div className="flex items-center justify-between px-1 py-3 mb-6">
      <h1 className="text-3xl font-semibold leading-tight">
        <span className="text-gray-300">Hello,</span>
        <br />
        <span className="text-4xl font-bold text-indigo-400">{username} 👋</span>
      </h1>

      <button
        onClick={LogoutUser}
        className="px-6 py-2 rounded-xl bg-red-500 text-white text-lg font-medium shadow-md hover:bg-red-600 hover:shadow-xl transition-all duration-200 active:scale-95"
      >
        Log Out
      </button>
    </div>
  );
}

export default Header;
