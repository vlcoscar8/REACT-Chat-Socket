import * as actions from "../actions/chatActions";

const INITIAL_STATE = {
    chats: [],
    chatActive: false,
};

export default function chatReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GET_CHATS:
            return {
                chats: action.payload,
                chatActive: state.chatActive,
            };
        case actions.PUSH_CHAT:
            return {
                chats: [...state.chats, action.payload],
                chatActive: state.chatActive,
            };
        case actions.ACTIVE_CHAT:
            return {
                chats: state.chats,
                chatActive: action.payload,
            };
        case actions.DEFAULT_CHAT:
            return INITIAL_STATE;
        default:
            return state;
    }
}
