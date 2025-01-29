"use client";
import React, { useState, useEffect } from "react";

const Toast = ({ message, type = "success", isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 90000); // Auto close after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const typeStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
    warning: "bg-yellow-500 text-black",
  };

  return (
    <div className="m-4">
      <div
      className={`fixed lg:w-1/4 w-full top-16  left-1/2 transform -translate-x-1/2 transition-all duration-500 px-10 py-4 rounded-2xl shadow-lg z-50 ${typeStyles[type]} transition-opacity duration-300`}
    >
      <p className="text-md text-center small tracking-wide ">{message}</p>
    </div>
    </div>
    
  );
};

export default Toast;
