"use client"
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


export default function VerifyToken() {
    const [token , setToken] = useState("")
    const [verified , setVerified] = useState(false)
    const [error , setError] = useState(false)
    //  const router = useRouter()
    const verifyUserEmail =  async () => {
        try {
           await axios.post("/api/users/verifyemail", {token})
            setVerified(true)
        } catch (error: any) {
            setError(true)
            console.error("Error in VerifyUserEmail",error.response.data)
        }
    }

    useEffect(() => {
      setError(false);
        const urlToken = window.location.search.split("=")[1]
        setToken(urlToken || "")

        // taking token by using query
        // const {query} = router;
        // const urlTokenTwo = query.token
    }, [])

    useEffect(() => {
         if(token.length > 0) {
            verifyUserEmail()
         }
    }, [token])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      
      <h1 className='text-4xl'>Verify Email</h1>
      <h2 className='p-4 bg-blue-600 mt-4 rounded-xl text-white cursor-pointer'>{token ? `${token}` : "no token" }</h2>
      {verified && (
        <div>
            <h2>Verified</h2>
            <Link href="/login">Login</Link>
        </div>
      )}

      {error && (
        <div>
            <h2>Error</h2>

        </div>
      )}
    </div>
  )
}
