import * as actions from "../actions/commentsActions";

const INITIAL_STATE = {
    comments: [],
};

export default function commentsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.PUSH_COMMENT:
            return {
                comments: [...state.comments, action.payload],
            };
        case actions.GET_COMMENTS:
            return {
                comments: action.payload,
            };
        case actions.DEFAULT_CHAT:
            return INITIAL_STATE;
        default:
            return state;
    }
}
