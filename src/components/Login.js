import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignin , setisSignin]=useState(true)
    const handleClick = ()=>{

    }
    const handleSignup =()=>{
        setisSignin(!isSignin)//toggle

    }
    return (
        <div>
            <Header />
            <div className="bg-slate-950 min-h-screen flex flex-col items-center justify-center relative">
                <img className="absolute inset-0 w-screen h-screen opacity-50" alt="gym" src='https://play-lh.googleusercontent.com/7carf1cfv7uxZJGfy9g13Tl3zSbG64qoeRnUrUWiAcUzyoj0Zp3zF_fs1j4S8ylmZZc'/>
                <div className='relative z-10 w-3/12  bg-white p-6 rounded-lg shadow-lg mb-28'>
                    <h2 className='text-2xl font-bold text-center text-slate-950 mb-6'>{isSignin ?"Sign In" : "Sign Up"}</h2>
                    <form className='flex flex-col'>
                        {
                            !isSignin && 
                            <input  placeholder=" Enter Fullname" className='p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/> 

                        }
                        <input type='text' placeholder='E-mail Address' className='p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                        <input type='password' placeholder='Password' className='p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                        <button className='p-4 bg-black text-white rounded-lg hover:bg-black-700 transition duration-300' onClick={handleClick}>{isSignin ? "Sign In" : "Sign-Up"}</button>
                        <p className="p-4 hover:cursor-pointer"onClick={handleSignup}>{isSignin ? "New to gym? Sign up now" : "Already a user ? goto Sign In"}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
