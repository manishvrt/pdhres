"use client";
import CustomInput from "@/components/Reusables/CustomInput";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Confetti from "react-confetti";
import Turnstile from "react-turnstile";

const Page = () => {
  const [step, setStep] = useState(1);
  const [coupon, setCoupon] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(""); // State to store CAPTCHA token
  const priceRef = useRef(null);
  const strikeThroughRef = useRef(null);

  useEffect(() => {
    if (step < 3) {
      gsap.to(".progress-bar", {
        width: `${(step / 2) * 100}%`,
        duration: 0.5,
      });
    }
  }, [step]);

  useEffect(() => {
    if (isCouponApplied) {
      gsap.fromTo(
        priceRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
      gsap.fromTo(
        strikeThroughRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, delay: 0.5 }
      );
    }
  }, [isCouponApplied]);

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && !validateStep1()) return;
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCouponSubmit = () => {
    if (coupon === "DISCOUNT") {
      setIsCouponApplied(true);
    } else {
      alert("Invalid coupon code");
    }
  };

  const handleRemoveCoupon = () => {
    setCoupon("");
    setIsCouponApplied(false);
  };

  const handleFinalSubmit = async () => {
    if (!captchaToken) {
      alert("Please complete the CAPTCHA");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken, // Include CAPTCHA token in the request
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStep(3); // Move to the Thank You page
      } else {
        setErrors({ email: data.message });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {(isCouponApplied || step === 3) && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200}
          recycle={false}
          gravity={0.5}
          wind={0.05}
          tweenDuration={5000}
          initialVelocityX={{ min: -10, max: 10 }}
          initialVelocityY={{ min: -10, max: 10 }}
        />
      )}
      <div className="grid w-full grid-cols-6">
        <div className="col-span-2 p-10 w-full flex flex-col justify-between h-screen">
          <div>
            <img src="/vrtlogo.png" className="w-44 h-24" alt="Logo" />
            <h1 className="mt-10 text-4xl font-semibold gsans text-[#0c0c0c]">
              Use mobile app for better performance
            </h1>
          </div>
          <div>
            <h1 className="mt-10 text-sm tracking-tight text-[#0c0c0c]">
              All Right Reserved. VRT Management Group
            </h1>
          </div>
        </div>

        <div className="col-span-4 bg-[#ffffff] flex flex-col justify-center items-start w-full p-10">
          {step < 3 && (
            <div className="relative w-full h-4 bg-gray-300 rounded-full overflow-hidden mb-16">
              <div className="progress-bar h-full bg-[#ff0000] w-0"></div>
            </div>
          )}

          {step === 1 && (
            <>
              <h1 className="text-3xl font-semibold gsans text-[#0c0c0c]">
                Professional Details
              </h1>
              <p className="mt-3 text-md small text-[#0c0c0c]">
                Tell us about your professional details.
              </p>
              <form className="grid w-full grid-cols-1 mt-10 gap-4">
                <div className="flex flex-col">
                  <CustomInput
                    iconSrc="https://www.svgrepo.com/show/532363/user-alt-1.svg"
                    name="fullName"
                    required
                    className="border w-1/2 dark:bg-[#0c0c0c] dark:border-zinc-800 rounded-3xl"
                    label="Enter your Full Name"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && (
                    <p className="text-[#ff0000] text-sm small ml-2 mt-3">
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <CustomInput
                    iconSrc="https://www.svgrepo.com/show/488920/email.svg"
                    name="email"
                    required
                    className="border w-1/2 dark:bg-[#0c0c0c] dark:border-zinc-800 rounded-3xl"
                    label="Enter your Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-[#ff0000] text-sm small ml-2 mt-3">
                      {errors.email}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleNext}
                  className="px-10 py-3 text-white w-fit bg-[#ff0000] small rounded-3xl mt-10"
                >
                  Next
                </button>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-3xl gsans font-semibold text-[#0c0c0c]">
                Exclusive Offer
              </h1>
              <p className="mt-3 small text-md text-[#0c0c0c]">
                Enter a coupon code to claim your discount.
              </p>
              <div className="mt-10">
                <div className="flex items-center gap-4">
                  <p
                    ref={strikeThroughRef}
                    className={`text-3xl gsans text-[#0c0c0c] font-semibold ${
                      isCouponApplied
                        ? "line-through opacity-15 text-2xl text-[#ff0000]"
                        : ""
                    }`}
                    style={{
                      textDecorationThickness: "2px",
                      textDecorationColor: "#ff0000",
                    }}
                  >
                    $2000
                  </p>
                  {isCouponApplied && (
                    <p
                      ref={priceRef}
                      className="text-3xl gsans font-semibold text-green-500"
                    >
                      $0
                    </p>
                  )}
                </div>
              </div>
              <div className="relative w-1/2 ">
                <CustomInput
                  iconSrc="https://www.svgrepo.com/show/374829/coupon-codes.svg"
                  className={`border-2  border-dashed  mt-10 w-full rounded-3xl`}
                  type="text"
                  label="Enter Coupon Code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  required
                  disabled={isCouponApplied}
                />

                {isCouponApplied ? (
                  <p className="text-md  mt-3 small text-green-500">
                    🎉 Coupon Applied Successfully! You saved <strong>$2000</strong>
                  </p>
                ) : (
                  ""
                )}

                {isCouponApplied && (
                  <button
                    onClick={handleRemoveCoupon}
                    className="absolute right-3 top-[70px] transform -translate-y-1/2 text-[#ff0000] hover:text-red-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {/* Add Turnstile CAPTCHA */}
              <div className="mt-6">
                <Turnstile
                  sitekey="0x4AAAAAAA-abqSXrUHkdgIt" // Replace with your Cloudflare Turnstile site key
                  onVerify={(token) => setCaptchaToken(token)} // Store the CAPTCHA token
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handlePrevious}
                  className="px-10 py-3 small text-white bg-[#0c0c0c] rounded-3xl mt-10"
                >
                  Previous
                </button>
                {!isCouponApplied ? (
                  <button
                    onClick={handleCouponSubmit}
                    className="px-10 py-3 small text-white bg-green-500 rounded-3xl mt-10"
                  >
                    Apply Coupon
                  </button>
                ) : (
                  <button
                    onClick={handleFinalSubmit}
                    className="px-10 py-3 small text-white bg-[#ff0000] rounded-3xl mt-10"
                  >
                    Submit
                  </button>
                )}
              </div>
            </>
          )}

          {step === 3 && (
            <div className="flex flex-col items-center">
              <h1 className="text-5xl text-[#0c0c0c] gsans font-semibold text-center w-full">
                Thank You! Your response has been submitted successfully.
              </h1>
              <p className="text-center mt-8 small text-lg tracking-tight text-[#0c0c0c]">
                Check your email for further instructions on how to claim your
                discount.
              </p>
              <button className="px-10 py-3 small text-white bg-[#ff0000] rounded-3xl mt-10">
                Back to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;