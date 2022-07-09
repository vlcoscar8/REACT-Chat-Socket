export const GET_USERS = "GET_USERS";
export const PUSH_USER = "PUSH_USER";
export const DELETE_USER = "DELETE_USER";

const actionGetUsers = (users) => ({
    type: GET_USERS,
    payload: users,
});

const actionPushUserToChat = (user) => ({
    type: PUSH_USER,
    payload: user,
});

const actionDeleteUserFromChat = (user) => ({
    type: DELETE_USER,
    payload: user,
});

export const setReduxStateChatUsers = (users) => {
    return (dispatch) => dispatch(actionGetUsers(users));
};

export const setReduxStatePushUserToChat = (user) => {
    return (dispatch) => dispatch(actionPushUserToChat(user));
};

export const setReduxStateDeleteUserFromChat = (user) => {
    return (dispatch) => dispatch(actionDeleteUserFromChat(user));
};
