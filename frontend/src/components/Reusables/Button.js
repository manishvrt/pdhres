const Button = ({
  type,
  onClick,
  text,
  className,
  customImage,
  rotate,
  bgColor,
  customImageSize,
}) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${className} ${bgColor || ""} flex justify-center items-center text-[#0c0c0c] h-10 small rounded-full`}
    >
      {text}
      {customImage && (
        <img
          src={customImage}
          className={`pl-3 ${rotate ? "group-hover:rotate-0 duration-500 transition-all -rotate-45" : ""}`}
          style={{ width: customImageSize?.width || "40px", height: customImageSize?.height || "40px" }}
          alt="button icon"
        />
      )}
    </button>
  );
};

export default Button;
