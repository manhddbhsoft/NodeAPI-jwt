//Import indepencies
const express = require('express');
const router = express.Router();

const authRequire = require('../Helpers/verifyToken');
const controller = require('../Controllers/article.controller');
//Content

router.get('/:tag', authRequire, controller.getArticleByTag);
router.get('/:author', authRequire, controller.getArticleByAuthor);
router.get('/:favorite', authRequire, controller.getArticleByFavorite);
router.post('/', controller.newArticle);
router.get('/:slug', authRequire, controller.getArticleBySlug);
router.put('/:slug', authRequire, controller.updateArticle);
router.delete('/:slug', authRequire, controller.deleteArticle);
router.get('/:slug/comments', authRequire, controller.getCommentForArticle);
router.post(':slug/comments', authRequire, controller.createCommentForArticle);
router.delete('/:slug/comments/:id', authRequire, controller.deleteCommentForArticle);
router.post('/:slug/favorite', authRequire, controller.createArticleFavorite);
router.delete('/:slug/favotite', authRequire, controller.deleteArticleFavorite);
//Export Module
module.exports = router;