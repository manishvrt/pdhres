const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// User Schema
const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  couponCode: { type: String, unique: true }, // Ensure unique coupon codes
});


const User = mongoose.model("User", userSchema);

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


app.post("/check-coupon", async (req, res) => {
  const { coupon } = req.body;

  try {
    // Check if the coupon has already been used
    const existingCoupon = await User.findOne({ couponCode: coupon });
    if (existingCoupon) {
      return res.status(200).json({ isUsed: true });
    } else {
      return res.status(200).json({ isUsed: false });
    }
  } catch (error) {
    console.error("Error checking coupon:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/submit", async (req, res) => {
  const { fullName, email, captchaToken, coupon } = req.body;

  try {
    // Verify CAPTCHA token with Cloudflare
    const captchaResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: captchaToken,
        }),
      }
    );

    const captchaData = await captchaResponse.json();
    if (!captchaData.success) {
      return res.status(400).json({ message: "CAPTCHA verification failed" });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Check if the coupon has already been used
    const existingCoupon = await User.findOne({ couponCode: coupon });
    if (existingCoupon) {
      return res.status(400).json({ message: "Coupon already used" });
    }

    // Save the user with the coupon code
    const newUser = new User({ fullName, email, couponCode: coupon });
    await newUser.save();

    // Send acknowledgement email
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ACKNOWLEDGEMENT_EMAIL,
      subject: "New Coupon Application",
      text: `Someone has applied for the coupon:\n\nName: ${fullName}\nEmail: ${email}\nCoupon Code: ${coupon}`,
    };

    await transporter.sendMail(adminMailOptions);

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});