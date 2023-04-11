import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from "axios"


const LoginPage = ({admin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState("")
  const navigation = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin =async (e) => {
    e.preventDefault();
    // Handle login logic here
    if(admin){
        await axios.get(`http://localhost:4000/customer/admin/sign-in?email=${email}&password=${password}`).then((res)=>{
            //console.log(res)
            if(res.status==200){
                if(res.data.userToken){
                sessionStorage.setItem("user",JSON.stringify(res.data))
                navigation('/')
                }else{
                    setMsg("Ooops!. login failed."+res.data)
                }
            }else{
                setMsg("Ooops!. login failed.")
            }
           
        })
    }else{
        await axios.get(`http://localhost:4000/customer/sign-in?email=${email}&password=${password}`).then((res)=>{
            //console.log(res)
            if(res.status==200){
                if(res.data.userToken){
                    sessionStorage.setItem("user",JSON.stringify(res.data))
                navigation('/')
                }else{
                    setMsg("Ooops!. login failed."+res.data)
                }
            }else{
                setMsg("Ooops!. login failed.")
            }
           
        })
    }
    
    /* toast.success('Completed !!! ', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      }) */
  };

  const SignUpButtonClickHandle = () => {
    navigation('/signup')
  }


  // style={{
  //   backgroundImage: `url(${cover})`,
  //   backgroundRepeat: false,
  //   }}

  return (
    <div className="min-h-screen bg-cover bg-center filter py-12 sm:px-6 lg:px-8" >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-white">Sign in to your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white  py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className=' m-2'>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2">Sign In</button>
                </div>
        </form>


        <div className=' m-2 '>
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-300 hover:bg-indigo-700 focus:outline-none focus:ring-2" onClick={SignUpButtonClickHandle}>Sign Up</button>
                </div>

                <p className="text-danger mt-2">{msg}</p>
        </div>
        </div>
        </div>
        )

  }

  export default LoginPage;