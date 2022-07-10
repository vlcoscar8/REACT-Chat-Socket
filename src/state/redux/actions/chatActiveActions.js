export const ACTIVE_CHAT = "ACTIVE_CHAT";

const actionActiveChat = (chat) => ({
    type: ACTIVE_CHAT,
    payload: chat,
});

export const setReduxStateActiveChat = (chat) => {
    return (dispatch) => dispatch(actionActiveChat(chat));
};
