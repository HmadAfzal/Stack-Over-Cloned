import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const Authcard = () => {
  const [register, setRegister] = useState(false);
  const [userData, setUserData] = useState({ email: "", username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate=useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (userData.email === "" || userData.password === "") {
      setError("Please fill the required fields");
      setLoading(false);
    } else {
      try {
    await signInWithEmailAndPassword(auth, userData.email, userData.password);
        setLoading(false);
        navigate('/')
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (userData.email === "" || userData.password === "" || userData.username === "") {
      setError("Please fill the required fields");
      setLoading(false);
    } else {
      try {
        await createUserWithEmailAndPassword(auth, userData.email, userData.password);
        setLoading(false);
        navigate('/')
       
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
  };

  return (
    <div className='flex justify-center'>
      <div className='w-[25%] p-4 shadow-xl hover:shadow-md transition-shadow'>
        <p className='font-semibold text-2xl pb-4'>{register ? 'Signup' : 'Login'}</p>

        {register ? (
          <form onSubmit={handleSignUp}>
            <label className='text-xl block py-2' htmlFor='username'>Username</label>
            <input
              type="text"
              className='border rounded-sm w-full border-black px-2 py-1'
              name='username'
              value={userData.username}
              onChange={handleInputChange}
            />

            <label className='text-xl block py-2' htmlFor='email'>Email</label>
            <input
              type="email"
              className='border rounded-sm w-full border-black px-2 py-1'
              name='email'
              value={userData.email}
              onChange={handleInputChange}
            />

            <label className='text-xl block py-2' htmlFor='password'>Password</label>
            <input
              type="password"
              className='border rounded-sm w-full border-black px-2 py-1'
              name='password'
              value={userData.password}
              onChange={handleInputChange}
            />

            {error && <p className='text-red-500'>{error}</p>}

            <button
              className='w-full bg-blue-500 font-semibold text-xl text-white py-2 mt-6'
              type='submit'
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignIn}>
            <label className='text-xl block py-2' htmlFor='email'>Email</label>
            <input
              type="email"
              className='border rounded-sm w-full border-black px-2 py-1'
              name='email'
              value={userData.email}
              onChange={handleInputChange}
            />

            <label className='text-xl block py-2' htmlFor='password'>Password</label>
            <input
              type="password"
              className='border rounded-sm w-full border-black px-2 py-1'
              name='password'
              value={userData.password}
              onChange={handleInputChange}
            />

            {error && <p className='text-red-500'>{error}</p>}

            <button
              className='w-full bg-blue-500 font-semibold text-xl text-white py-2 mt-6'
              type='submit'
              disabled={loading}
            >
              {loading ? 'Logging In...' : 'Login'}
            </button>
          </form>
        )}

        <p className='text-blue-500 text-center text-lg pt-6 pb-2'>
          {register ? (
            <>
              Already have an account?{' '}
              <span className='font-semibold cursor-pointer' onClick={() => setRegister(false)}>
                Login
              </span>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <span className='font-semibold cursor-pointer' onClick={() => setRegister(true)}>
                Register
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Authcard;
