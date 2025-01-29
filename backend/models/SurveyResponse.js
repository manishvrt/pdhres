// models/SurveyResponse.js
const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
});

const SurveyResponseSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    companyName: { type: String, required: true },
    email: { type: String, required: true },
    answers: [AnswerSchema], // Array of answers
});

module.exports = mongoose.model('SurveyResponse', SurveyResponseSchema);
