import React, { useEffect } from 'react'
import { getLocalStorageData, setLocalStorageData } from './LocalStorage';
import { createContext } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();




function AuthProvider({children}) {

const [userData, setUserData] = useState(null); 



useEffect(() => {
  
  const {employees} = getLocalStorageData();

  setUserData(employees);
}, [])



  return (
    <AuthContext.Provider value={[userData, setUserData]} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider