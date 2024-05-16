import { auth, googleProvider } from '../config/firebase-config'
import {createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.error(err)
    }
  };

  const signInWithGoogle = async () => { 
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err)
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err)
    }
  };
  

  return (
    <div className='fixed my-auto py-6 bg-white shadow-md shadow-gray-200 rounded-lg'>
      <h1 className='font-bold px-8'>Karibu kwa Keja!</h1>
      <div className='py-8 px-8'>
        <input
          className='border border-black rounded px-2 mb-2'
          type='email'
          placeholder='Email...'
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className='border border-black rounded px-2 mb-2'
          type='password'
          placeholder='password...'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='bg-teal-300 rounded px-6 ml-4' onClick={signIn}>
          Sign In
        </button>
        <br />
        <span>Or</span>
        <div>
          <button
            className='border border-black rounded px-6 hover:bg-blue-100'
            onClick={signInWithGoogle}>
            <span className='pr-4'>
              <FcGoogle className='inline-block w-6 h-6 mr-2' />
            </span>
            Continue with Google
          </button>
        </div>
        <br />
        <button className='bg-red-400 rounded px-6' onClick={logOut}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Auth;
