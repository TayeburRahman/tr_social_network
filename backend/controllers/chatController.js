const catchAsync = require("../middlewares/catchAsync");
const Chat = require("../models/chatModel");

// Create New Chat
exports.newChat = catchAsync(async (req, res, next) => {

    const chatExists = await Chat.findOne({
        users: {
            $all: [req.params.userId, req.body.receiverId]
        }
    });

    if (chatExists) {
        return res.status(200).json({
            success: true,
            newChat: chatExists
        });
    }

    const newChat = await Chat.create({
        users: [req.params.userId, req.body.receiverId],
    });

    res.status(200).json({
        success: true,
        newChat
    });
});

// Get All Chats
exports.getChats = catchAsync(async (req, res, next) => {

    const chats = await Chat.find(
        {
            users: {
                $in: [req.params.userId]
            }
        }
    ).sort({ updatedAt: -1 }).populate("users latestMessage");

    res.status(200).json({
        success: true,
        chats
    });
});