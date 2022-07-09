import { environment } from "../../../environment/environment";

export const GET_USERS = "GET_USERS";
export const PUSH_USER = "PUSH_USER";
export const DELETE_USER = "DELETE_USER";
export const DEFAULT_USER = "DEFAULT_USER";

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

const actionDefaultUser = () => ({
    type: DEFAULT_USER,
});

export const setReduxStateChatUsers = (users) => {
    return async (dispatch) => {
        try {
            const promiseArray = users.map(async (user) => {
                const response = await fetch(
                    `${environment.API_URL}/user/detail/${user}`
                );
                const data = response.json();

                return data;
            });

            Promise.all(promiseArray).then((res) => {
                dispatch(actionGetUsers(res));
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const setReduxStatePushUserToChat = (user) => {
    return (dispatch) => dispatch(actionPushUserToChat(user));
};

export const setReduxStateDeleteUserFromChat = (user) => {
    return (dispatch) => dispatch(actionDeleteUserFromChat(user));
};

export const setReduxStateDefaultUser = () => {
    return (dispatch) => dispatch(actionDefaultUser());
};
