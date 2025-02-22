"use client";
import { useState, useEffect } from "react";

const CustomInput = ({
  label = "Name",
  type = "text",
  placeholder = "",
  value = "", // Controlled value from parent
  onChange,
  name, // Ensure 'name' is passed and used
  className = "",
  iconSrc = "", // Add a new prop for the custom icon
  iconAlt = "icon", // Optional: alt text for the icon
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (value === "") {
      setIsFocused(false);
    }
  };

  const handleChange = (e) => {
    if (onChange) onChange(e); // Pass the event to the parent handler
  };

  const inputId = `input-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className={`relative ${className}`}>
      <input
       id={inputId}
       type={type}
       name={name} // Pass 'name' here
       value={value}
       onChange={handleChange}
       onFocus={handleFocus}
       onBlur={handleBlur}
       placeholder={placeholder}
        className={`block w-full appearance-none no-spinner pl-12 pr-10 dark:text-[#ffffff] overflow-hidden dark:bg-[#0b0b0c] dark:border-zinc-900 hover:border-[#0c0c0c] small h-14 pt-6  border-zinc-800 bg-transparent rounded-3xl outline-none focus:ring-2 dark:focus:ring-zinc-700 focus:ring-zinc-600 focus:border-zinc-700 transition-all`}
        {...props}
      />
      {/* Icon inside the input container */}
      {iconSrc && (
        <img
          src={iconSrc}
          alt={iconAlt}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" // Position and size the icon
        />
      )}

      <label
        htmlFor={inputId} // Associate the label with the input
        className={`absolute cursor-text left-12 small transform transition-all ${
          isFocused || value
            ? "top-2 text-xs dark:text-zinc-300 text-gray-800"
            : "top-1/2 dark:text-zinc-300 -translate-y-1/2 text-base text-gray-800"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default CustomInput;
