const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const author = require('./user.model');

const articleSchema = new Schema({
    slug: {type: String, required: true},
    title: {type: String, required: true},
    descreption: {type: String, required: true},
    body: {type: String, required: true},
    tagList: {type: [String], required: true},
    item: String,
    createAt: {type: String, required: true},
    updateAt: {type: String, required: true},
    favorite: {type: Boolean, required: true},
    //favoritesCount: {type: Int32Array, required: true},
    author: {type: String, required: true},
    articleIndentify: String
});

const Article = mongoose.model('article', articleSchema);
module.exports = Article;