"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, Mail, User, UserCheck } from 'lucide-react'

interface User {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>({
    email: "",
    password: ""
  });

  const [buttonDisable, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
    //   console.log("User Login Successfully", response.data);
       if(response.status === 200) {
        toast.success("You are LoggedIn 🎉");
      console.log("You are LoggedIn 🎉");
      router.push("/");
       } else{
        toast.error("Login failed. Please check your credentials.");
       }
      
    } catch (error: any) {
      console.error("Unable to fetch the data", error.message);
      toast.error(error.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 1 &&
      user.password.length > 1
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin();
	console.log("Login info of user",user.email)
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='w-screen flex h-screen bg-[#E7E7FF]'>
        <div className='flex-1 flex flex-col justify-center items-center text-black'>
          <form className='lg:w-[600px] mx-auto md:mx-20 flex gap-4 flex-col' onSubmit={handleSubmit}>
            <h1 className='text-4xl font-extrabold text-black'>Login</h1>
            <div className='flex gap-4 flex-col w-[300px] lg:w-[600px] h-full'>
              
              <label className='input input-bordered rounded flex items-center gap-2'>
                <Mail />
                <input
                  type='email'
                  className='grow instyle font-inter'
                  placeholder='Email'
                  name='email'
                  onChange={handleInputChange}
                  value={user.email}
                />
              </label>

              <label className='input input-bordered rounded flex items-center gap-2'>
                <Eye />
                <input
                  type='password'
                  className='grow instyle font-inter'
                  placeholder='Password'
                  name='password'
                  onChange={handleInputChange}
                  value={user.password}
                />
              </label>

              <button
                className='btn font-inter rounded-full btn-primary text-black signupBtn'
                disabled={buttonDisable || loading}
              >
                {loading ? "Working....." : "Login"}
              </button>
            </div>
          </form>

          <div className='flex flex-col md:flex-row gap-2 mt-4'>
            <p className='text-black text-lg font-inter'>Do not have an account?</p>
            <Link href='/pages/signup'>
              <button className='btn rounded-full btn-primary btn-outline w-full underline text-blue-900 font-inter'>Signup</button>
            </Link>
          </div>

          <button className='flex flex-row items-center justify-center gap-2 mt-4 p-3 bg-white text-black rounded-md font-inter'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            Continue With Google
          </button>
        </div>
      </div>
    </>
  )
}

export default Login;
