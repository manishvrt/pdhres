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
    setTimeout(() => setToast({ isVisible: false, message: "", type: "" }), 3000);
  };

  const questions = [
    {
      question: "Which of the following best describes your role in the business?",
      type: "mcq",
      options: [
        "Entrepreneur (Self-employed or actively running a business)",
        "Founder (Launched the business)",
        "Co-founder (Owns at least 25% equity)",
        "Business Partner (Owns at least 25% equity or actively involved in)",
        "Employee",
      ],
      image: "https://example.com/images/question1.jpg",
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
      image: "https://example.com/images/question2.jpg",
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
      image: "https://example.com/images/question3.jpg",
    },
    // Add more questions with respective images
  ];

  const validatePersonalDetails = () => {
    const { firstName, lastName, email, companyName } = personalDetails;

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
    if (!answers[currentQuestionIndex]) {
      showToast("Please answer the current question before proceeding.", "error");
      return; // Do not proceed if the answer is missing
    }

    if (
      (currentQuestionIndex === 1 && answers[currentQuestionIndex] === "Less than a year") ||
      (currentQuestionIndex === 0 && answers[currentQuestionIndex] === "Employee") ||
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
      showToast("Please complete the CAPTCHA verification before submitting.", "error");
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
        <div> {/* Survey Completed Code Here */} </div>
      ) : !isSurveyStarted ? (
        <div>
          {/* Personal Details Section */}
        </div>
      ) : (
        <div>
          <img src={currentQuestion.image} alt={`Question ${currentQuestionIndex + 1}`} />
        </div>
      )}
    </div>
  );
};

export default QualiForm;
