export const GET_CHATS = "GET_CHATS_OK";
export const PUSH_CHAT = "PUSH_CHAT";
export const ACTIVE_CHAT = "ACTIVE_CHAT";
export const DEFAULT_CHAT = "DEFAULT_CHAT";

const actionGetChats = (chats) => ({
    type: GET_CHATS,
    payload: chats,
});

const actionPushChat = (chat) => ({
    type: PUSH_CHAT,
    payload: chat,
});

const actionActiveChat = (chat) => ({
    type: ACTIVE_CHAT,
    payload: chat,
});

const actionDefaultChat = () => ({
    type: DEFAULT_CHAT,
});

export const setReduxStateChatList = (chats) => {
    return (dispatch) => dispatch(actionGetChats(chats));
};

export const setReduxStatePushChat = (chat) => {
    return (dispatch) => dispatch(actionPushChat(chat));
};

export const setReduxStateActiveChat = (chat) => {
    return (dispatch) => dispatch(actionActiveChat(chat));
};

export const setReduxStateDefaultChat = () => {
    return (dispatch) => dispatch(actionDefaultChat());
};
