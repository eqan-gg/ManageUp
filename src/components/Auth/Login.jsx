import React, { useState } from 'react';

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    handleLogin(email, password);
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center'>

      <div className="border-2 border-emerald-600 p-20">
      <div className='flex items-center justify-center mb-8 '> <h2 className='text-4xl font-semibold'>Log In </h2></div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='border-2 border-gray-300 p-2 m-2 bg-transparent rounded-lg'
            type="email"
            placeholder='Email'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='border-2 border-gray-300 p-2 m-2 bg-transparent rounded-lg'
            type="password"
            placeholder='Password'
          />
          <button className='bg-blue-500 mt-5 rounded-xl px-5 text-white p-2 m-2'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
