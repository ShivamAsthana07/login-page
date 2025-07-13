import React, { useState } from 'react'

const Login = () => {
  const [isLoginMode, setisLoginMode] = useState(true);

  return (
    <div className="w-[480px] p-8 rounded-2xl bg-white shadow-lg">
        {/* Header */}
        <div className='flex justify-center mb-9'> 
            <h2 className="text-3xl font-semibold text-center">
                {isLoginMode ? "Login" : "Sign Up"}
            </h2>
        </div>
      

        {/* Toggle button group */}
        <div className="relative h-12 mb-6 flex border border-blue-300 rounded-full overflow-hidden">
            <button
                onClick={() => setisLoginMode(true)}
                className={`w-1/2 text-lg font-medium transition-all z-10 
                ${isLoginMode? 'text-white': 'text-gray-700'}`}>
                Login
            </button>
            <button
                onClick={() => setisLoginMode(false)}
                className={`w-1/2 text-lg font-medium transition-all z-10
                ${!isLoginMode? 'text-white': 'text-gray-700'}`}>
                Sign Up
            </button>
            <div className={`absolute w-1/2 h-full top-0 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 
                ${isLoginMode? 'left-0': 'left-1/2'}`}></div>
        </div>

        {/* Form */}
        <form className="space-y-4">
            {!isLoginMode && (
            <input
                type="text"
                placeholder="Name" required
                className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-blue-500 placeholder:text-gray-400"
            />
            )}

            {/* Email and Password inputs */}
            <input
                type="email"
                placeholder="Email ID" required
                className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-blue-500 placeholder:text-gray-400"
            />
            <input
                type="password"
                placeholder="Password" required
                className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-blue-500 placeholder:text-gray-400"
            />

            {/* Confirm Password input */}
            {!isLoginMode && (
                <input
                    type="password"
                    placeholder="Confirm Password" required
                    className="w-full mb-7 p-3 border-b-2 border-gray-300 outline-none focus:border-blue-500 placeholder:text-gray-400"
                />)
            }

            {/* Forget Password */}
            {isLoginMode && (
                <div className="text-right">
                    <p className="text-cyan-600 cursor-pointer hover:underline">Forget Password?</p>
                </div>
            )}

            {/* Submit button */}
            <button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white font-medium rounded-full text-lg hover:opacity-90 transition"
                >
                {isLoginMode ? "Login" : "Sign Up"}
            </button>

            {/* Toggle button for Login or Sign Up */}
            <p className="text-center text-gray-500">
                {isLoginMode ? "Didn't have an account? " : "Already have an account? "}
                <a
                    href="#"
                    onClick={(e) => {
                    e.preventDefault();
                    setisLoginMode(!isLoginMode);
                    }}
                    className="text-cyan-600 hover:underline"
                    >
                    {isLoginMode ? "Sign Up" : "Login"}
                </a>
            </p>
        </form>
    </div>
  )
}

export default Login;
