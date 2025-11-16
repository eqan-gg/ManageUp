import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Auth/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Auth/Dashboard/AdminDashboard";
import { setLocalStorageData , getLocalStorageData } from "./Context/LocalStorage";
import { AuthContext } from "./Context/AuthProvider.jsx";





function App() {


    const [userData] = useContext(AuthContext); 

  useEffect(() => {
      setLocalStorageData();  
    }, []);
  
    useEffect(() => {
      
       const loggedInUser = localStorage.getItem("loggedInUser");
       if(loggedInUser){
        const userData = JSON.parse(loggedInUser);
        setUser(userData.role);
        setLoggeddInUserData(userData.data);
       }
    }, [])
    


  
  const [user, setUser] = useState("")
  const [LoggeddInUserData, setLoggeddInUserData] = useState(null)
  
  // useEffect(() => {
    
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if(loggedInUser){
  //       setUser(loggedInUser.role);
  //     }
  //    }
  // }, [authData]);



 
  const handleLogin = (email,password) => {   
  
   if(  email == "admin@me.com" && password == "123"){
     localStorage.setItem("loggedInUser", JSON.stringify({role : "admin"}));
  setUser("admin");   }
   
   else if (userData) {
    const employee = userData.find(emp => emp.email === email && emp.password === password);
   if(employee){
    
     localStorage.setItem("loggedInUser", JSON.stringify({role : "employee" , data : employee}));
    setUser("employee");
    setLoggeddInUserData(employee);
   }}

   else {
    alert("invalid credentials");
   } }

  
 



  return (
    <>

       {!user? <Login  handleLogin={handleLogin} /> : " "}
      {user == "admin" && <AdminDashboard  changeUser={setUser} />}
      {user == "employee" && <EmployeeDashboard data={LoggeddInUserData}  changeUser={setUser} />}

    </>
  );
}

export default App;