import * as actions from "../actions/chatActiveActions";
import * as chatActions from "../actions/chatActions";

const INITIAL_STATE = {
    chats: [],
    chatActive: false,
};

export default function chatReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.ACTIVE_CHAT:
            return {
                chatActive: action.payload,
            };
        case chatActions.DEFAULT_CHAT:
            return INITIAL_STATE;
        default:
            return state;
    }
}
