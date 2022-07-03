const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postScema = new Schema({
    text: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Post = mongoose.model('Post', postScema);

module.exports = Post;
