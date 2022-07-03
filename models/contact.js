const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactScema = new Schema({
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});

const Contact = mongoose.model('Contact', contactScema);

module.exports = Contact;
