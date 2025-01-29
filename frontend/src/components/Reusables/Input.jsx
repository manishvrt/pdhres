"use client";
import { useState } from "react";

const Input = ({
  label = "Name",
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  className = "",
  iconSrc = "", // Custom icon source
  iconAlt = "icon", // Alt text for the icon
  labelClassName = "", // New prop for custom label className
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (!value) setIsFocused(false);
  };

  // Generate a unique ID for the input
  const inputId = `input-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className={`relative ${className}`}>
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={(e) => onChange && onChange(e)} // Pass the event back to the parent
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`block w-full appearance-none no-spinner pl-12 pr-10 overflow-hidden dark:border-zinc-900 hover:border-[#0c0c0c] small h-14 pt-6 border-zinc-900 bg-transparent rounded-3xl outline-none focus:ring-2 dark:focus:ring-zinc-700 focus:ring-zinc-900 focus:border-none focus:border-zinc-300 transition-all`}
        {...props}
      />
      {/* Icon inside the input container */}
      {iconSrc && (
        <img
          src={iconSrc}
          alt={iconAlt}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
      )}

      <label
        htmlFor={inputId}
        className={`absolute cursor-text left-12 small transform transition-all ${
          isFocused || value
            ? "top-2 text-xs text-gray-800"
            : "top-1/2 -translate-y-1/2 text-base text-gray-800"
        } ${labelClassName}`} // Add the custom label className here
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
