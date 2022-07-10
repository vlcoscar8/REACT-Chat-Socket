import { environment } from "../../../environment/environment";

export const GET_COMMENTS = "GET_COMMENTS";
export const PUSH_COMMENT = "PUSH_COMMENT";
export const DEFAULT_CHAT = "DEFAULT_CHAT";

const actionPushComment = (comment) => ({
    type: PUSH_COMMENT,
    payload: comment,
});

const actionGetComments = (comments) => ({
    type: GET_COMMENTS,
    payload: comments,
});

const actionDefaultComments = () => ({
    type: DEFAULT_CHAT,
});

export const setReduxStatePushComment = (body, id) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":
                "https://react-chat-socket-oscar.netlify.app/",
            "Access-Control-Request-Method": "POST",
        },
        body: JSON.stringify(body),
    };

    return async (dispatch) => {
        try {
            const response = await fetch(
                `${environment.API_URL}/chat/add/comment/${id}`,
                requestOptions
            );

            const data = await response.json();

            dispatch(
                actionPushComment(data.comments[data.comments.length - 1])
            );
        } catch (error) {
            console.log(error);
        }
    };
};

export const setReduxStateGetComments = (comments) => {
    return (dispatch) => dispatch(actionGetComments(comments));
};

export const setReduxStateDefaultComments = () => {
    return (dispatch) => dispatch(actionDefaultComments());
};
