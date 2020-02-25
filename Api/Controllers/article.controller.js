const Article = require('../Models/article.model');
//const Profile = require('../Models/user.model');
const Comment = require('../Models/comment.model');

module.exports = {
    getArticleByTag: (req, res, next) => {
        try {
            var tag = req.params.tag;
            Article.find({tag: tag})
                .then(aricle => {
                    res.status(200).json(aricle);
                })
                .catch(error => {
                    res.status(401).json({
                        message: 'Unauthorized'
                    });
                })
        } catch (error) {
            res.status(422).json({
                message: 'Unexpected error!'
            })
        }
    },

    getArticleByAuthor: (req, res, next) => {
        try {
            var authorName = req.params.author;
            Article.find({author: authorName})
                .then(article => {
                    res.status(200).json(article);
                })
                .catch(error => {
                    res.status(401).json({
                        message: 'Unauthorized!'
                    })
                })
        } catch (error) {
            res.status(422).json({
                message: "Unexpected error!"
            })
        }
    },

    getArticleByFavorite: (req, res, next) => {
        try {
            var favorite = req.body.favorite;
            var authorName = req.query.author;
            Article.find({favorite: favorite, author: authorName})
                .then(article => {
                    res.status(200).json(article);
                })
                .catch(error => {
                    res.status(401).json({
                        message: 'Unauthorized!'
                    })
                })
        } catch (error) {
            res.status(422).json({
                message: "Unexpected error!"
            })
        }
    },
    //Limit, offset was not understood

    newArticle: (req, res, next) => {
        try {
            const newArticle = new Article(req.body);
            newArticle.save()
                .then(article => {
                    res.status(201).json(article);
                })
                .catch(() => {
                    res.status(401).json({
                        message: 'Unauthorized!'
                    });
                })
        } catch (error) {
            res.status(422).json({
                message: 'Unexpected error!'
            });
        }
    },

    getArticleBySlug: (req, res, next) => {
        try {
            const slug = req.params.slug;
            Article.find({slug: slug})
                .then(article => {
                    res.status(201).json(article);
                })
        } catch (error) {
            res.status(422).json({
                message: 'Unexpected error!'
            });
        }
    },

    updateArticle: (req, res, next) => {
        try {
            Article.findOneAndUpdate({author: req.body.author, slug: slug}, req.body)
                .then(article => {
                    res.status(201).json(article);
                })
                .catch(() => {
                    res.status(401).json({
                        message: 'Unauthorized!'
                    });
                })
        } catch (error) {
            res.status(422).json({
                message: 'Unexpected error!'
            });
        }
    },

    deleteArticle: (req, res, next) => {
        try {
            Article.findOneAndRemove({slug: slug})
                .then(article => {
                    res.status(201).json({
                        message: 'Delete successful!'
                    });
                })
                .catch(() => {
                    res.status(401).json({
                        message: 'Unauthorized!'
                    });
                })
        } catch (error) {
            res.status(422).json({
                message: 'Unexpected error!'
            });
        }
    },

    getCommentForArticle: async (req, res, next) => {
        try {
            const findArticle = await Article.findOne({slug: req.params.slug});
            Comment.find({articleIdentify: findArticle.articleIdentify})
                .then(comments => {
                    res.status(201).json(comments);
                })
                .catch(() => {
                    res.status(401).json({
                        message: 'Unauthorized!'
                    });
                })
        } catch (error) {
            res.status(422).json({
                message: 'Unexpected error!'
            });
        }
    },

    createCommentForArticle: async (req, res, next) => {
        try {
            const newComment = new Comment(req.body);
            const findArticle = await Article.findOne({slug: req.params.slug});
            newComment.articleIdentify = findArticle.articleIdentify;
            newComment.save()
                .then(comment => {
                    res.status(200).json(comment);
                })
                .catch(() => {
                    res.status(401).json({
                        message: 'Unauthorized!'
                    });
                })
        } catch (error) {
            res.status(422).json({
                message: 'Unexpected error!'
            });
        }
    },

    deleteCommentForArticle: async (req, res, next) => {
        try {
            const findArticle = await Article.findOne({slug: req.params.slug});
            Comment.findOneAndRemove({articleIdentify: findArticle.articleIdentify, commentIdentify: req.params.id})
                .then(() => {
                    res.status(200).json({
                        message: 'Delete successful!'
                    });
                })
                .catch(() => {
                    res.status(401).json({
                        message: 'Unauthorized!'
                    });
                })
        } catch (error) {
            res.status(422).json({
                message: 'Unexpected error!'
            });
        }
    },

    createArticleFavorite: (req, res, next) => {
        try {
            Article.findOneAndUpdate({slug: req.params.slug}, {favorite: true})
                .then(article => {
                    res.status(200).json({
                        message: 'OK'
                    });
                })
                .catch(() => {
                    res.status(401).json({
                        message: 'Unauthorized!'
                    })
                })
        } catch (error) {
            res.status(422).json({
                message: 'Unexpected error!'
            });
        }
    },

    deleteArticleFavorite: (req, res, next) => {
        try {
            Article.findOneAndUpdate({slug: req.params.slug}, {favorite: false})
                .then(article => {
                    res.status(200).json({
                        message: 'OK'
                    });
                })
                .catch(() => {
                    res.status(401).json({
                        message: 'Unauthorized!'
                    })
                })
        } catch (error) {
            res.status(422).json({
                message: 'Unexpected error!'
            });
        }
    }
    // getArticleFollowed: (req, res, next) => {
    //     try {
    //         Article.
    //     } catch (error) {
    //         res.status(422).json({
    //             message: 'Unexpected error!'
    //         });
    //     }
    // }
}