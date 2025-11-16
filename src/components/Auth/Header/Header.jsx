import React, { useState, useEffect } from 'react'

function Header(props) {


const LogoutUser = () => {
  localStorage.removeItem("loggedInUser");
  props.changeUser("");
}


const [username, setusername] = useState("")


useEffect(() => {
  if (!props.data) {
    setusername("Admin");
  } else {
    setusername(props.data.firstName);
  }
}, [props.data]); 


  return (
    <div className='flex items-end justify-between'>
     
     <h1 className='text-2xl font-medium'> Hello <br /> <span className='text-3xl font-semibold'>{username}👋</span></h1>
     <button className='bg-red-500 text-white text-lg font-medium px-4 py-2 rounded cursor-pointer hover:bg-red-800 hover:text-neutral-500' onClick={LogoutUser}>Log Out</button>

    </div>
  )
}

export default Header