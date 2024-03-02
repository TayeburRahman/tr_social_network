const express = require('express');
const { newChat, getChats } = require('../controllers/chatController');
const { isAuthenticated } = require('../middlewares/auth');

const router = express();

router.route("/newChat/:userId").post(
    // isAuthenticated,
    newChat);
router.route("/chats/:userId").get(
    // isAuthenticated,
    getChats);

module.exports = router;