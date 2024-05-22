import React from 'react'
import GoogleAuth from '../components/GoogleAuth'
import Authcard from '../components/Authcard'

const Auth = () => {
  return (
    <>
     <GoogleAuth/>
     <p className='text-center font-semibold text-xl py-6'>or</p>
     <Authcard/>
    </>
  

  )
}

export default Auth