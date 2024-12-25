const Feedback = require('../models/Feedback');

const createFeedback = async (req, res) => {
    try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully', feedback });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getFeedback = async (req, res) => {
    try {
        const { category, sortBy, order } = req.query;
        let query = {};
        
        if (category) {
            query.category = category;
        }
        
        const sortOption = {};
        if (sortBy) {
            sortOption[sortBy] = order === 'desc' ? -1 : 1;
        }
        
        const feedback = await Feedback.find(query).sort(sortOption);
        res.json(feedback);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createFeedback,
    getFeedback
};