const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
});

const QualifiedResponseSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    linkedInUrl: { type: String, required: false },
    companyName: { type: String, required: true },
    email: { type: String, required: true },
    answers: [AnswerSchema],    
});

module.exports = mongoose.model('QualifiedResponse', QualifiedResponseSchema);
