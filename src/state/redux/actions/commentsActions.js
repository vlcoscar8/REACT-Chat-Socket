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

export const setReduxStatePushComment = (data) => {
    return (dispatch) =>
        dispatch(actionPushComment(data.comments[data.comments.length - 1]));
};

export const setReduxStateGetComments = (comments) => {
    return (dispatch) => dispatch(actionGetComments(comments));
};

export const setReduxStateDefaultComments = () => {
    return (dispatch) => dispatch(actionDefaultComments());
};
