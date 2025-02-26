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
  const [firstName, setFirstName] = useState(""); // State to store user's first name
  const [loading, setLoading] = useState(false); // State to manage loader visibility
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
    if (step === 1) {
      setFirstName(formData.fullName.split(" ")[0]); // Get the first name from full name
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateCoupons = () => {
    const coupons = new Set();
    const prefix = "VRTEE2025";
  
    for (let i = 0; i < 20; i++) { // A to T (20 letters)
      const letter = String.fromCharCode(65 + i); // Convert index to A, B, C ... T
      for (let j = 1; j <= 10; j++) {
        const num = j.toString().padStart(2, "0"); // Ensure 2-digit format
        coupons.add(`${prefix}${letter}${num}`);
      }
    }
    return coupons;
  };
  
  const validCoupons = generateCoupons();
  
  const handleCouponSubmit = async () => {
    if (validCoupons.has(coupon)) {
      try {
        const response = await fetch("http://localhost:5000/check-coupon", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ coupon }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          if (data.isUsed) {
            alert("This coupon has already been used.");
          } else {
            setIsCouponApplied(true);
          }
        } else {
          alert("Error checking coupon status.");
        }
      } catch (error) {
        console.error("Error checking coupon:", error);
        alert("An error occurred while checking the coupon.");
      }
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
  
    setLoading(true); // Show loader when submission starts
  
    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken, // Include CAPTCHA token in the request
          coupon, // Send the coupon code to the backend
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setStep(3); // Move to the Thank You page
      } else {
        alert(data.message); // Show error message
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false); // Hide loader when submission ends
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
      {/* Conditionally render the layout based on the step */}
      {step !== 3 ? (
        <div className="grid w-full grid-cols-7">
          {/* Left Side */}
          <div className="col-span-3 p-10 w-full flex flex-col justify-between h-screen">
            <div>
              <img src="/vrtlogo.png" className="w-44 h-24" alt="Logo" />
            </div>
           
              <div>
              <h1 className=" text-3xl font-semibold gsans text-[#0c0c0c]">
                Here’s What You’ll Gain Inside EE™:
              </h1>
              <div className="flex mt-8 flex-col">
                <div className="flex items-center gap-4">
                  <img src="/check.svg" alt="" className="w-5 h-5" />
                  <h2 className="small text-[#0c0c0c]">
                    <strong>Deep Leadership Insights</strong> – Learn how to
                    leverage your natural strengths and decision-making style to
                    drive business success.{" "}
                  </h2>
                </div>
                <div className="flex mt-3 items-center gap-4">
                  <img src="/check.svg" alt="" className="w-5 h-5" />
                  <h2 className="small text-[#0c0c0c]">
                    <strong>Master Dynamic Communication</strong> – Improve how
                    you <strong>communicate, negotiate, and influence</strong> to
                    build trust and strong relationships.
                  </h2>
                </div>
                <div className="flex mt-3 items-center gap-4">
                  <img src="/check.svg" alt="" className="w-5 h-5" />
                  <h2 className="small text-[#0c0c0c]">
                    <strong>Discover Your Decision-Making Style</strong> –
                    Understand how you approach decisions, handle challenges, and
                    assess risks, so you can
                    <strong>
                      {" "}
                      make clearer, more confident choices that drive business
                      success
                    </strong>
                    .
                  </h2>
                </div>
                <div className="flex mt-3 items-center gap-4">
                  <img src="/check.svg" alt="" className="w-5 h-5" />
                  <h2 className="small text-[#0c0c0c]">
                    <strong>Live Mentoring & Strategy Session</strong> – Get
                    direct guidance from{" "}
                    <strong className="text-[#ff0000]">
                      Rajesh Tedla (35+ years of business expertise)
                    </strong>{" "}
                    in a <strong>3-hour interactive session</strong> tailored to
                    help you apply research-backed leadership strategies.
                  </h2>
                </div>
              </div>
            </div>
             

            <div>
              <h1 className="mt-10 text-sm tracking-tight text-[#0c0c0c]">
                All Right Reserved. VRT Management Group
              </h1>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-span-4 bg-[#ffffff] flex flex-col justify-center items-start w-full p-10">
            {step === 1 && (
              <>
                <h1 className="text-3xl font-semibold gsans text-[#ff0000]">
                  Welcome to Entrepreneur Edge™ (EE™) – Your Leadership
                  Breakthrough Starts Here!
                </h1>
                <p className="small text-[16px] tracking-tight text-[#0c0c0c] mt-3">
                  You’re just one step away from unlocking exclusive access to
                  the Entrepreneur Edge™ (EE™) Program - an elite leadership
                  experience designed to help you lead smarter, execute faster,
                  and scale with confidence.
                </p>
              </>
            )}

            {step < 3 && (
              <div className="relative mt-10 w-full h-4 bg-gray-300 rounded-full overflow-hidden mb-10">
                <div className="progress-bar h-full bg-[#ff0000] w-0"></div>
              </div>
            )}

            {step === 1 && (
              <>
                <h1 className="text-3xl font-semibold gsans text-[#0c0c0c]">
                  Fill in Your Details
                </h1>
                <p className="mt-3 text-md small text-[#0c0c0c]">
                  Enter your details to claim your discount.
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
                  Apply Coupon Code
                </h1>
                <p className="mt-3 small text-md text-[#0c0c0c]">
                  Enter a coupon code to claim your discount.
                </p>
                <div className="mt-10">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl small tracking-tight text-[#0c0c0c]">
                      Price:{" "}
                    </span>
                    <p
                      ref={strikeThroughRef}
                      className={`text-3xl gsans text-[#ff0000] font-semibold ${
                        isCouponApplied
                          ? "line-through opacity-15 text-2xl text-zinc-800"
                          : ""
                      }`}
                      style={{
                        textDecorationThickness: "2px",
                        textDecorationColor: "#ff0000",
                      }}
                    >
                      $ 2000
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

                <div className="relative my-6 w-1/2 ">
                  <CustomInput
                    iconSrc="https://www.svgrepo.com/show/374829/coupon-codes.svg"
                    className={`border-2 border-dashed w-full rounded-3xl`}
                    type="text"
                    label="Enter Coupon Code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    required
                    disabled={isCouponApplied}
                  />

                  {isCouponApplied ? (
                    <p className="text-sm mt-3 small text-green-500">
                      🎉 Coupon Applied Successfully! You saved{" "}
                      <strong>$2000</strong>
                    </p>
                  ) : (
                    ""
                  )}

                  {isCouponApplied && (
                    <button
                      onClick={handleRemoveCoupon}
                      className="absolute right-3 top-[32px] transform -translate-y-1/2 text-[#ff0000] hover:text-red-700"
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
                <div className="">
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
                      className="relative px-10 py-3 small text-white bg-[#ff0000] rounded-3xl mt-10"
                      disabled={loading} // Disable button while loading
                    >
                      {loading ? (
                        <>
                          <span className="loader"></span>
                          <span className="ml-3">Submitting...</span>
                        </>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="grid w-full grid-cols-5">
          <div className="col-span-3 bg-[#ffffff] flex flex-col justify-center h-screen items-start w-full p-16">
          <div>
            <img src="/vrtlogo.png" className="w-44 h-24" alt="Logo" />
          </div>
          <h1 className="text-4xl text-[#0c0c0c] mt-12 gsans font-semibold w-full">
            Congratulations 🎉, <span className="text-[#ff0000]">{firstName}</span>{" "}!
            <br /> You’ve Successfully Unlocked Your Entrepreneur Edge™ Program
            Access!
          </h1>
          <h1 className="text-center mt-16 gsans tracking-wide text-3xl font-semibold text-[#0c0c0c]">
            What’s Next?
          </h1>
          <div className="flex mt-10 items-center gap-4">
            <img src="/check.svg" alt="" className="w-5 h-5" />
            <h2 className="small text-lg tracking-tight text-[#0c0c0c]">
              You’ll receive an email shortly with your official confirmation and
              the Zoom meeting invite for Entrepreneur Edge™ Program.
            </h2>
          </div>
          <div className="flex mt-3 items-center gap-4">
            <img src="/check.svg" alt="" className="w-5 h-5" />
            <h2 className="small text-lg tracking-tight text-[#0c0c0c]">
              Accept the invite to secure your spot in the Entrepreneur Edge™
              Live Mentoring Session on <strong className="text-[#ff0000]">March 6th, 2025, at 10 AM EST With Rajesh  Tedla</strong>.
             
            </h2>
          </div>
          <span className="text-xl gsans font-semibold mt-16 text-[#0c0c0c] tracking-wide">
            🚀 See you in the session!{" "}
          </span>
        </div>
        <div className="col-span-2">

        </div>
        </div>
        // Thank You Page (Only Right Side)
        
      )}
    </div>
  );
};

export default Page;
