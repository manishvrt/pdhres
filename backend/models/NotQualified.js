const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
});

const NotQualifiedResponseSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    companyName: { type: String, required: true },
    linkedInUrl: { type: String, required: false },
    email: { type: String, required: true },
    answers: [AnswerSchema],    
});

module.exports = mongoose.model('NotQualifiedResponse', NotQualifiedResponseSchema);
