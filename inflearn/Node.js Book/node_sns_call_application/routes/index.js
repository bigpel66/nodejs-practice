const express = require('express');
const indexController = require('../controller/index');

const router = express.Router();

router.get('/', indexController.getTest);

router.get('/clientposts', indexController.getClientPosts);

router.get('/hashtagposts/:hashtag', indexController.getHashtagPosts);

router.get('/followlist', indexController.getFollowList);

module.exports = router;
