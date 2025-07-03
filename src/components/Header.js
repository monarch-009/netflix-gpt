import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);


  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/'); // Redirect to login page after sign out
    }).catch((error) => {
      console.error("Sign out error:", error);
      // Optionally, you can show an error message to the user
      alert("Failed to sign out. Please try again.");
    });
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 to-transparent w-full flex items-center justify-between'>
      <img className='w-44' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo" />

      {user && (<div className='flex items-center gap-4'>
        <img src='https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg' alt='Profile' className='w-10 h-10  cursor-pointer' />
        <button onClick={handleSignOut} className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300'>Sign Out</button>
      </div>)}

    </div>
  )
}

export default Header
