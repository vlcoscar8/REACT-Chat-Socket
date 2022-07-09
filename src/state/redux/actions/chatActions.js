export const GET_CHATS = "GET_CHATS_OK";
export const PUSH_CHAT = "PUSH_CHAT";

const actionGetChats = (chats) => ({
    type: GET_CHATS,
    payload: chats,
});

const actionPushChat = (chat) => ({
    type: PUSH_CHAT,
    payload: chat,
});

export const setReduxStateChatList = (chats) => {
    return (dispatch) => dispatch(actionGetChats(chats));
};

export const setReduxStatePushChat = (chat) => {
    return (dispatch) => dispatch(actionPushChat(chat));
};
