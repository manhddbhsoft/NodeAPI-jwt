const Article = require('../Models/article.model');

module.exports = {
    getByTag: (req, res, next) => {
        Article.find({tagList: req.body})
            .then(article => {
                res.status(200).json(article);
            })
            .catch(() => {
                res.status(422).json({
                    message: 'Unexpected error!'
                });
            })
    }
}