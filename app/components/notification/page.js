"use client"
import React, { useEffect } from 'react';
import './page.css'; // Import your styles

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Automatically close the notification after 3 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [onClose]);

  return (
    <div className="notification-container">
      <div className="notification-box">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Notification;
