"use client";
import React, { useState } from "react";
import Input from "../Reusables/Input";
import Button from "../Reusables/Button";
import Toast from "../Reusables/Toast";
import ReCAPTCHA from "react-google-recaptcha";

const QualiForm = () => {
  const [isSurveyStarted, setIsSurveyStarted] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    linkedInUrl: "", // Added LinkedIn URL field
  });
  const [captchaToken, setCaptchaToken] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "success",
  });
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);
  const [isQualified, setIsQualified] = useState(false);

  const showToast = (message, type = "success") => {
    setToast({ isVisible: true, message, type });
    setTimeout(
      () => setToast({ isVisible: false, message: "", type: "" }),
      3000
    );
  };

  const questions = [
    {
      question:
        "Which of the following best describes your role in the business?",
      type: "mcq",
      options: [
        "Entrepreneur (Self-employed or actively running a business)",
        "Founder (Launched the business)",
        "Co-founder (Owns at least 25% equity)",
        "Business Partner (Owns at least 25% equity or actively involved in)",
        "Employee",
      ],
    },
    {
      question: "How long have you been operating your business?",
      type: "mcq",
      options: [
        "Less than a year",
        "1-3 years",
        "3-5 years",
        "5+ years",
        "Other",
      ],
    },
    {
      question: "How many full-time employees currently work in your business?",
      type: "mcq",
      options: [
        "0 (No employees)",
        "1 to 10 employees (Stage 1)",
        "11 to 19 employees (Stage 2)",
        "20 to 34 employees (Stage 3)",
        "35 to 57 employees (Stage 4)",
        "58 to 95 employees (Stage 5)",
        "96 to 160 employees (Stage 6)",
        "161 to 500 employees (Stage 7)",
        "Other",
      ],
    },
    {
      question:
        "What is your average annual profitability (as a percentage of total revenue)?",
      type: "mcq",
      options: [
        "Less than 10%",
        "11-20%",
        "21-30%",
        "31% to 40%",
        "More than 40%",
        "Prefer not to say",
      ],
    },
    {
      question: "What type of business do you operate?",
      type: "text",
    },
    {
      question:
        "What is your primary product or service that generates more than 50% of your revenue?",
      type: "text",
    },
    {
      question: "Have you ever completed a Tri-Metrix HD Assessment?",
      type: "mcq",
      options: ["Yes", "No"],
    },
    {
      question:
        "If No: Would you like us to provide complimentary access to this assessment?",
      type: "mcq",
      options: ["Yes", "No"],
    },
    {
      question:
        "Would you like to join the Entrepreneur Edge Workshop to learn the 15 traits to become a successful entrepreneur? (This is a complimentary session valued at $2000.)",
      type: "mcq",
      options: ["Yes", "No"],
    },
    {
      question:
        "Do you know other founders or entrepreneurs who might benefit from this research and workshop? If yes, please share their details below:",
      type: "text",
    },
  ];

  const validatePersonalDetails = () => {
    const { firstName, lastName, email, companyName,linkedInUrl } = personalDetails;

    if (!firstName || !lastName || !email || !companyName) {
      showToast("Please fill out all fields to continue!", "error");
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      showToast("Please enter a valid email address!", "error");
      return false;
    }

    return true;
  };

  const handleInputChange = (value) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: value,
    });
  };

  const handleOptionChange = (value) => {
    if (value === "Other") {
      setShowOtherInput(true);
      handleInputChange(""); // Reset input field if 'Other' is selected
    } else {
      setShowOtherInput(false);
      handleInputChange(value);
    }
  };

  const handleNext = () => {
    // Check if there's an answer for the current question
    if (!answers[currentQuestionIndex]) {
      showToast(
        "Please answer the current question before proceeding.",
        "error"
      );
      return; // Do not proceed if the answer is missing
    }

    if (
      (currentQuestionIndex === 1 &&
        answers[currentQuestionIndex] === "Less than a year") ||
      (currentQuestionIndex === 0 &&
        answers[currentQuestionIndex] === "Employee") ||
      (currentQuestionIndex === 2 &&
        (answers[currentQuestionIndex] === "0 (No employees)" ||
          answers[currentQuestionIndex] === "1 to 10 employees (Stage 1)"))
    ) {
      handleSurveySubmit(false); // Not qualified
    } else {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setShowOtherInput(false);
      }
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowOtherInput(false);
    }
  };

  const handleSurveySubmit = async (qualified = true) => {
    if (!captchaToken) {
      showToast(
        "Please complete the CAPTCHA verification before submitting.",
        "error"
      );
      return;
    }

    const combinedAnswers = Object.keys(answers).map((key) => ({
      question: questions[key].question,
      answer: answers[key],
    }));

    try {
      const response = await fetch("http://localhost:4000/submit-survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: personalDetails.firstName,
          lastName: personalDetails.lastName,
          companyName: personalDetails.companyName,
          email: personalDetails.email,
          linkedInUrl: personalDetails.linkedInUrl,
          answers: combinedAnswers,
          qualified,
          captchaToken,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        showToast(result.message, "success");
        setIsSurveyCompleted(true);
        setIsQualified(qualified);
      } else {
        showToast(result.message, "error");
      }
    } catch (error) {
      showToast("Error submitting survey response", "error");
    }
  };

  const handlePersonalDetailsSubmit = () => {
    if (validatePersonalDetails()) {
      setIsSurveyStarted(true);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="mt-16">
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast({ isVisible: false, message: "", type: "" })}
      />

      {isSurveyCompleted ? (
        <div className="w-full grid lg:grid-cols-7 border border-zinc-400 gap-8 justify-center items-center p-4 lg:p-10 h-auto py-10 bg-[#ffffff] rounded-[45px]">
          <div className="lg:col-span-4">
            <h1 className="lg:text-5xl text-3xl gsans text-[#0c0c0c] font-bold mb-10">
              {isQualified
                ? "Congratulations! You are Qualified! 🎉"
                : "You are not Qualified ☹️ "}
            </h1>
            <p className="text-xl small text-[#0c0c0c]">
              {isQualified
                ? "Your feedback is important to us."
                : "Thank you for your time, but based on your responses, you do not qualify for further assistance."}
            </p>
          </div>
          {/* <div className="lg:col-span-3 hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1489743342057-3448cc7c3bb9"
              alt="Thank You"
              className="w-full h-[60svh] object-cover rounded-[45px]"
            />
          </div> */}
        </div>
      ) : !isSurveyStarted ? (
        <div className="w-full grid  grid-cols-1 lg:grid-cols-7 gap-8 justify-center items-center p-5 lg:p-10 h-auto py-10 bg-[#ffffff] border-zinc-200 lg:border-zinc-200 border  rounded-[45px]">
          <div className="col-span-4">
            <h1 className="lg:text-4xl text-2xl text-[#0c0c0c] font-bold gsans mb-10">
              Check your eligibility for this Elite{" "}
              <br className="hidden lg:block" />
              Research group
            </h1>
            <form className="mt-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 max-w-xl gap-4">
                <Input
                  iconSrc="https://www.svgrepo.com/show/474079/profile.svg"
                  label="First name"
                  type="text"
                  labelClassName="dark:text-zinc-300"
                  className="dark:border-zinc-900 w-full text-[#0c0c0c] dark:text-[#ffffff] border rounded-3xl"
                  value={personalDetails.firstName}
                  onChange={(e) =>
                    setPersonalDetails({
                      ...personalDetails,
                      firstName: e.target.value,
                    })
                  }
                />
                <Input
                  iconSrc="https://www.svgrepo.com/show/474079/profile.svg"
                  label="Last name"
                  type="text"
                  labelClassName="dark:text-zinc-300"
                  className="dark:border-zinc-900 w-full text-[#0c0c0c] dark:text-[#ffffff] border rounded-3xl"
                  value={personalDetails.lastName}
                  onChange={(e) =>
                    setPersonalDetails({
                      ...personalDetails,
                      lastName: e.target.value,
                    })
                  }
                />
                <Input
                  iconSrc="https://www.svgrepo.com/show/474079/profile.svg"
                  label="Email Address"
                  type="email"
                  labelClassName="dark:text-zinc-300"
                  className="dark:border-zinc-900 w-full text-[#0c0c0c] dark:text-[#ffffff] border rounded-3xl"
                  value={personalDetails.email}
                  onChange={(e) =>
                    setPersonalDetails({
                      ...personalDetails,
                      email: e.target.value,
                    })
                  }
                />
                <Input
                  iconSrc="https://www.svgrepo.com/show/474079/profile.svg"
                  label="Company Legal Name"
                  type="text"
                  labelClassName="dark:text-zinc-300"
                  className="dark:border-zinc-900 w-full text-[#0c0c0c] dark:text-[#ffffff] border rounded-3xl"
                  value={personalDetails.companyName}
                  onChange={(e) =>
                    setPersonalDetails({
                      ...personalDetails,
                      companyName: e.target.value,
                    })
                  }
                />
                <Input
  iconSrc="https://www.svgrepo.com/show/474079/profile.svg"
  label="LinkedIn URL"
  type="text"
  labelClassName="dark:text-zinc-300"
  className="dark:border-zinc-900 w-full text-[#0c0c0c] dark:text-[#ffffff] border rounded-3xl"
  value={personalDetails.linkedInUrl}
  onChange={(e) =>
    setPersonalDetails({
      ...personalDetails,
      linkedInUrl: e.target.value,
    })
  }
/>
              </div>
              <Button
                text="Start Survey"
                onClick={handlePersonalDetailsSubmit}
                className="mt-8 w-fit text-[#ffffff] font-semibold bg-[#ff0000] h-14 px-6"
              />
            </form>
          </div>
          <div className="lg:col-span-3 hidden lg:block">
            <img
              src="https://assets.lummi.ai/assets/QmSeCC2zQpkXzqBXNvYUgN2oMSgHMEXETYM3svdKFetjnD?auto=format&w=1500&h=1500"
              alt=""
              className="w-full h-[60svh] object-cover rounded-[45px]"
            />
          </div>
        </div>
      ) : (
        <div className="w-full grid lg:grid-cols-7 gap-8 justify-center items-center p-5 lg:p-10 h-auto py-10 bg-[#ffffff] rounded-[45px]">
          <div className="lg:col-span-4">
            <h1 className="text-2xl text-[#0c0c0c] font-semibold small mb-10">
              <span className="mr-2 text-xl p-2 border border-[#0c0c0c]/20 text-[#0c0c0c]/70 rounded-full w-10 h-10">{`Q${
                currentQuestionIndex + 1
              }`}</span>
              <span className="block text-xl lg:text-2xl mt-4">
                {currentQuestion.question}
              </span>
            </h1>

            {currentQuestion.type === "mcq" ? (
              <div className="lg:h-64 h-auto lg:overflow-y-auto">
                {currentQuestion.options.map((option, idx) => (
                  <label
                    key={idx}
                    className={`flex p-2 mt-2 cursor-pointer rounded-2xl items-center gap-2 ${
                      answers[currentQuestionIndex] === option
                        ? "bg-[#000000] text-white"
                        : "bg-white border"
                    }`}
                  >
                    <input
                      className="radio checked:bg-[#0c0c0c] my-2"
                      type="radio"
                      name={`question-${currentQuestionIndex}`}
                      value={option}
                      checked={answers[currentQuestionIndex] === option}
                      onChange={() => handleOptionChange(option)}
                    />
                    <span className="lg:ml-3 ml-2 text-sm lg:text-lg small">
                      {option}
                    </span>
                  </label>
                ))}
                {showOtherInput && (
                  <input
                    type="text"
                    className="w-full small mt-4 p-3 border rounded-xl"
                    placeholder="Please specify"
                    value={answers[currentQuestionIndex] || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                  />
                )}
              </div>
            ) : (
              <textarea
                rows={4}
                className="w-full border rounded-2xl small p-4"
                value={answers[currentQuestionIndex] || ""}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Your answer here"
              />
            )}
            <div className="mt-12 flex justify-start gap-4">
              {currentQuestionIndex > 0 ? (
                <Button
                  text="Previous"
                  onClick={handlePrev}
                  className="w-fit border border-[#0c0c0c]/60 text-[#0c0c0c] h-12 px-4"
                />
              ) : (
                <Button
                  text="Previous"
                  onClick={handlePrev}
                  className="w-fit border border-[#0c0c0c]/60 text-[#0c0c0c] h-12 px-4 opacity-20 cursor-not-allowed"
                  disabled
                />
              )}
              {currentQuestionIndex === questions.length - 1 ? (
                <>
                <div className="flex items-center gap-6"></div>
                  <Button
                    text="Submit"
                    onClick={() => handleSurveySubmit(true)} // Assume qualified if all questions answered
                    className="w-fit text-[#ffffff] font-semibold bg-[#ff0000] h-12 px-4"
                  />
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
                    onChange={(token) => setCaptchaToken(token)}
                    onExpired={() => setCaptchaToken(null)}
                  />
                </>
              ) : (
                <Button
                  text="Next"
                  onClick={handleNext}
                  className="w-fit text-[#ffffff] bg-[#21b0fe] h-12 px-6"
                />
              )}
            </div>
          </div>
          <div className="lg:col-span-3 hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1489743342057-3448cc7c3bb9"
              alt=""
              className="w-full h-[60svh] object-cover rounded-[45px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default QualiForm;
