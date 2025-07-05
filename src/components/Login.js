import { checkValidData, checkValidSignUpData } from "../utils/vakidate";
import Header from "./Header";
import React, { useState, useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE } from "../utils/constant";


const Login = () => {
  // Function to toggle the sign-in form
  const [IsSignInForm, setIsSignInForm] = useState(true);

  // State to hold error messages
  // This will be used to display validation errors
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  // Refs to access input values directly
  // This allows us to avoid using state for every input field
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    if (IsSignInForm) {
      const message = checkValidData(email.current.value, password.current.value);
      setErrorMessage(message);

      // Sign in the user if validation passes
      if (message === null) {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage + " " + errorCode);
          });

      }

    } else {
      const message = checkValidSignUpData(name.current.value, email.current.value, password.current.value);
      setErrorMessage(message);

      // Create a new user object
      if (message === null) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg",
            }).then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              )
            }).catch((error) => {
              // An error occurred
              setErrorMessage("Profile update failed: " + error.message);
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage + " " + errorCode);
          });
      }
    }


  }

  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      <Header />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-125"
        style={{
          backgroundImage: `url('${BACKGROUND_IMAGE}')`,
          filter: "brightness(0.4)",
          zIndex: "-1",
        }}
      />

      {/* Login Form */}
      <div className="flex justify-center items-center min-h-screen">
        <form onSubmit={(e) => { e.preventDefault(); }} className="bg-black bg-opacity-75 px-10 py-12 rounded-md text-white w-full max-w-md space-y-5">
          <h1 className="text-3xl font-bold">{IsSignInForm ? "Sign In" : "Sign Up"}</h1>

          {/* Sign Up Form Name also */}
          {!IsSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full name"
              className="w-full bg-[#333] text-white p-3 rounded border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          )}

          {/* Email */}
          <input
            ref={email}
            type="email"
            placeholder="Email or mobile number"
            className="w-full bg-[#333] text-white p-3 rounded border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          {/* Password */}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full bg-[#333] text-white p-3 rounded border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          {/* Error Message */}
          <p className="text-red-500">{errorMessage}</p>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition duration-300 font-semibold py-3 rounded"
            onClick={handleButtonClick}
          >
            {IsSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {/* OR Divider */}
          {/* <div className="flex justify-center items-center text-gray-400">
            <span className="text-sm">OR</span>
          </div> */}

          {/* Sign-in with code */}
          {/* <button
            type="button"
            className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded font-medium"
          >
            Use a sign-in code
          </button> */}

          {/* Forgot Password */}
          {/* <div className="text-sm">
            <a href="#" className="text-white hover:underline">
              Forgot password?
            </a>
          </div> */}

          {/* Remember Me */}
          {/* <div className="flex items-center text-sm text-gray-400">
            <input type="checkbox" className="mr-2 accent-white" />
            <label>Remember me</label>
          </div> */}

          {/* Sign up prompt */}
          <div className="text-sm text-gray-400" onClick={toggleSignInForm}>
            {IsSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
            <a href="#" className="text-white font-semibold hover:underline">
              {IsSignInForm ? "Sign up now." : "Sign in instead."}
            </a>
          </div>

          {/* Recaptcha */}
          <p className="text-xs text-gray-500 mt-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Learn more.
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
