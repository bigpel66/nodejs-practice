const express = require('express');
const v1Controller = require('../controller/v1');
const { verifyToken, deprecated } = require('../controller/middlewares');

const router = express.Router();

router.use(deprecated);

router.post('/token', v1Controller.postToken);

router.get('/test', verifyToken, v1Controller.getTest);

router.get('/client/posts', verifyToken, v1Controller.getClientPosts);

router.get('/hashtag/:title/posts', verifyToken, v1Controller.getHashtagPosts);

router.get('/follow', verifyToken, v1Controller.getFollow);

module.exports = router;
