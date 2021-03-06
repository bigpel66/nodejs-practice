const fs = require('fs');
const express = require('express');
const postController = require('../controller/post');
const { isLoggedIn } = require('../controller/middlewares');

const router = express.Router();

fs.readdir('uploads', (error) => {
    if (error) {
        console.error('Upload Folder Generated');
        fs.mkdirSync('uploads');
    }
});

router.post(
    '/img',
    isLoggedIn,
    postController.postWithImage,
    postController.postImageRespond
);

router.post(
    '/',
    isLoggedIn,
    postController.postWithoutImage,
    postController.postText
);

router.delete('/:id', isLoggedIn, postController.deleteText);

router
    .post('/:id/like', isLoggedIn, postController.postLike)
    .delete('/:id/like', isLoggedIn, postController.deleteLike);

router.get('/hashtag', postController.getHashtags);

module.exports = router;
