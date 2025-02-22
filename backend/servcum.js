// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const axios = require('axios');
require('dotenv').config();

const QualifiedResponse = require('./models/Qualified');
const NotQualifiedResponse = require('./models/NotQualified');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.error(err));

// Configure nodemailer transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Function to send email
const sendEmail = (to, subject, text) => {
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

// Route to handle survey submissions
app.post('/submit-survey', async (req, res) => {
  const { firstName, lastName, companyName, email, linkedInUrl, answers, qualified, captchaToken } = req.body;

  // Verify CAPTCHA token
  try {
    const captchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET_KEY}&response=${captchaToken}`
    );

    if (!captchaResponse.data.success) {
      return res.status(400).json({ message: 'Captcha validation failed. Please try again.' });
    }
  } catch (error) {
    console.error('Error verifying CAPTCHA:', error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }

  const newSurveyResponse = {
    firstName,
    lastName,
    companyName,
    linkedInUrl,
    email,
    answers,
  };

  try {
    let emailContent = `Dear ${firstName},\n\n`;

    if (qualified) {
      const response = new QualifiedResponse(newSurveyResponse);
      await response.save();

      emailContent += `Congratulations! 🎉 You are qualified after completing the survey. Thank you for your valuable input!\n\nBest regards,\nVRT Management`;

      // Check if LinkedIn URL is provided and valid
      if (!linkedInUrl || !linkedInUrl.startsWith('https://in.linkedin.com/')) {
        emailContent += `\n\nAdditionally, we noticed you didn't provide a valid LinkedIn profile or any LinkedIn profile at all. Please share the correct link to your LinkedIn profile at your earliest convenience.`;
      }
    } else {
      const response = new NotQualifiedResponse(newSurveyResponse);
      await response.save();

      emailContent += `Thank you for completing the survey! 🎉 Unfortunately, you do not meet the qualifications for this survey.\n\nBest regards,\nVRT Management`;
    }

    sendEmail(email, qualified ? 'Congratulations!' : 'Survey Completion Status', emailContent);

    res.status(201).json({ message: 'Survey response saved successfully!' });
  } catch (error) {
    console.error('Error saving survey response:', error.message);
    res.status(500).json({ message: 'Error saving survey response', error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
