import * as actions from "../actions/usersActions";

const INITIAL_STATE = {
    users: [],
};

export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GET_USERS:
            return {
                users: action.payload,
            };
        case actions.PUSH_USER:
            return {
                users: [...state.users, action.payload],
            };
        case actions.DELETE_USER:
            return {
                users: state.users.filter(
                    (element) => element !== action.payload
                ),
            };
        case actions.DEFAULT_USER:
            return INITIAL_STATE;
        default:
            return state;
    }
}
