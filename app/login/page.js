"use client"
import React, { useState } from 'react';
import './page.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter
import Notification from "../components/notification/page"; // Import the Notification component

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [notification, setNotification] = useState(null); // State for notification
  const [googleLoading, setGoogleLoading] = useState(false); // Google button loading state
  const [appleLoading, setAppleLoading] = useState(false);

  const router = useRouter(); // Initialize useRouter

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    setError(""); // Reset error on successful login

    // Simulating a successful login
    setNotification("Login successful!"); // Show success notification
    router.push('/'); // Redirect to the homepage ("/")
  };

  const handleCloseNotification = () => {
    setNotification(null); // Hide notification after close
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true); // Start loading state for Google

    setTimeout(() => {
      alert("App in production"); // Show alert message
      setGoogleLoading(false); // Reset loading state for Google
    }, 2000); // 2 seconds delay
  };

  const handleAppleLogin = async () => {
    setAppleLoading(true); // Start loading state for Apple

    setTimeout(() => {
      alert("App in production"); // Show alert message
      setAppleLoading(false); // Reset loading state for Apple
    }, 2000); // 2 seconds delay
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex-column">
          <label>Email</label>
        </div>
        <div className="inputForm">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
            <g data-name="Layer 3" id="Layer_3">
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
            </g>
          </svg>
          <input
            placeholder="Enter your Email"
            className="input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-64 0 512 512">
            <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
            <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
          </svg>
          <input
            placeholder="Enter your Password"
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Error Message */}
        {error && <p className="error-text">{error}</p>}

        {/* Submit Button */}
        <button className="button-submit" type="submit">
          Login
        </button>

        <p className="p">
          Don&apos;t have an account? <Link href="/sign-up"><span className="span">Sign Up</span></Link>
        </p>

        <p className="p line">Or With</p>

        <div className="flex-row">
        <button
            className={`btn google ${googleLoading ? 'bg-gray-500 cursor-not-allowed' : ''}`}
            onClick={handleGoogleLogin}
            disabled={googleLoading}
          >
            {googleLoading ? "Processing..." : "Google"}
          </button>
          <button
            className={`btn apple ${appleLoading ? 'bg-gray-500 cursor-not-allowed' : ''}`}
            onClick={handleAppleLogin}
            disabled={appleLoading}
          >
            {appleLoading ? "Processing..." : "Apple"}
          </button>
        </div>
      </form>

      {/* Display Notification if available */}
      {notification && <Notification message={notification} onClose={handleCloseNotification} />}
    </div>
  );
};

export default LoginForm;
