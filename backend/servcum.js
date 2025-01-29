const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const QualifiedResponse = require('./models/Qualified');
const NotQualifiedResponse = require('./models/NotQualified');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error(err));

// Configure nodemailer transporter for custom email
let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Custom SMTP server
    port: process.env.SMTP_PORT, // SMTP port
    secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER, // Your custom email address
        pass: process.env.EMAIL_PASSWORD, // Your custom email password
    }
});

// Function to send email
const sendEmail = (to, subject, text) => {
    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        text: text
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
    const { firstName, lastName, companyName, email, answers, qualified } = req.body;

    const newSurveyResponse = {
        firstName,
        lastName,
        companyName,
        email,
        answers,
    };

    try {
        if (qualified) {
            const response = new QualifiedResponse(newSurveyResponse);
            await response.save();
            // Send Congratulations email
            const subject = "Congratulations!";
            const text = `Dear ${firstName},\n\nCongratulations! 🎉 You are qualified after completing the survey. Thank you for your valuable input!\n\nBest regards,\nVRT Management`;
            sendEmail(email, subject, text);
        } else {
            const response = new NotQualifiedResponse(newSurveyResponse);
            await response.save();
            // Send Not Qualified email
            const subject = "Survey Completion Status";
            const text = `Dear ${firstName},\n\nThank you for completing the survey! 🎉 Unfortunately, you do not meet the qualifications for this survey.\n\nBest regards,\nVRT Management`;
            sendEmail(email, subject, text);
        }

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
