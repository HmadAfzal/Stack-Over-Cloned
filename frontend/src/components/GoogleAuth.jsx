import {signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, provider } from '../firebase/firebase'
import {useNavigate} from 'react-router-dom'

const GoogleAuth = () => {
  const navigate=useNavigate();

  const handleSignInGoogle = async () => {
  await signInWithPopup(auth, provider);
    navigate('/')
  
  }

 

  return (
    <div className='mt-32 justify-center flex pt-12'>
      <div className='w-[25%]  flex items-center p-4 gap-4 shadow-xl  cursor-pointer hover:shadow-md transition-shadow' onClick={handleSignInGoogle}>
        <img src="google-logo.png" alt="" className='w-8' />
        <p className='font-semibold text-lg'>Login with google</p>
      </div>
    </div>
  )
}

export default GoogleAuth