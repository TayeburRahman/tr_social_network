import axios from "axios";
import { ALL_CHATS_FAIL, ALL_CHATS_REQUEST, ALL_CHATS_SUCCESS, CLEAR_ERRORS, NEW_CHAT_FAIL, NEW_CHAT_REQUEST, NEW_CHAT_SUCCESS } from "../constants/chatConstants";

// Get All Chats
export const getAllChats = (userId) => async (dispatch) => {
    try {

        dispatch({ type: ALL_CHATS_REQUEST });

        const { data } = await axios.get(`/api/v1/chats/${userId}`);

        dispatch({
            type: ALL_CHATS_SUCCESS,
            payload: data.chats,
        });

    } catch (error) {
        dispatch({
            type: ALL_CHATS_FAIL,
            payload: error.response.data.message,
        });
    }
};


// New Chat
export const addNewChat = (userId) => async (dispatch) => {
    try {

        dispatch({ type: NEW_CHAT_REQUEST });
        const config = { header: { "Content-Type": "application/json" } }
        const { data } = await axios.post(`/api/v1/newChat/${userId}`, { receiverId: userId }, config);

        dispatch({
            type: NEW_CHAT_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: NEW_CHAT_FAIL,
            payload: error.response.data.message,
        });
    }
}

// Clear All Errors
export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}