const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    feedbackText: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['suggestion', 'bug_report', 'feature_request', 'other'],
        default: 'other'
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Feedback', feedbackSchema);