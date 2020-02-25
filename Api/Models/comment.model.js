const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const author = require('./article.model');

const commentSchema = new Schema({
    commentIdentify: {type: String, required: true},
    createdAt: {type: String, required: true},
    updatedAt: {type: String, required: true},
    body: {type: String, required: true},
    authorIdentify: String
})
