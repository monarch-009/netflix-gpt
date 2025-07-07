import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, PROFILE } from '../utils/constant';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {

    }).catch((error) => {
      console.error("Sign out error:", error);
      alert("Failed to sign out. Please try again.");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        }));
        navigate('/browse');

      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 to-transparent w-full flex items-center justify-between'>
      <img className='w-44' src={LOGO} alt="Netflix Logo" />

      {user && (<div className='flex items-center gap-4'>
        <button className='bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-300'>GPT Search</button>
        <img src={PROFILE} alt='Profile' className='w-10 h-10  rounded cursor-pointer' />
        <button onClick={handleSignOut} className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300'>Sign Out</button>
      </div>)}

    </div>
  )
}

export default Header
