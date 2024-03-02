const express = require('express');
const { newPost, likeUnlikePost, deletePost, newComment, allPosts, getPostsOfFollowing, updateCaption, saveUnsavePost, getPostDetails } = require('../controllers/postController');
const { isAuthenticated } = require('../middlewares/auth');
const { uploadPost } = require('../utils/awsFunctions');
const upload = require("../utils/uploadImage");

const router = express();

router.route("/post/new").post( 
    // isAuthenticated,

    upload.single('avatar'),
    newPost
    );

router.route("/posts/all").get(allPosts);

router.route("/:userId/posts").get(
    // isAuthenticated,
     getPostsOfFollowing);

router.route("/post/detail/:id").get(
    // isAuthenticated,
     getPostDetails);

router.route("/post/:id/:userId")
    .get(
        // isAuthenticated,
         likeUnlikePost)
    .post(
        // isAuthenticated,
         saveUnsavePost)
    .put(
        // isAuthenticated,
         updateCaption)
    .delete(
        // isAuthenticated,
         deletePost);

router.route("/post/comment/:id/:userId").post(
    // isAuthenticated,
     newComment)

module.exports = router;