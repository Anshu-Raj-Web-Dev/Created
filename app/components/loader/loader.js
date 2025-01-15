"use client"
import React, { useState, useEffect } from 'react';
import './loader.css'; // The CSS for the loader

const CustomLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide the loader after 3 seconds or until the content is ready
    }, 2000); // 3 seconds timeout for demo

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && (
        <div className="loader-wrapper">
          <div className="loader-image"></div>
        </div>
      )}
      {!loading && children} {/* Main content will render after loader is gone */}
    </div>
  );
};

export default CustomLoader;
