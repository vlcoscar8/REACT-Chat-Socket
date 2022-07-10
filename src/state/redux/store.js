import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import chatReducer from "./reducers/chatReducer";
import userReducer from "./reducers/userReducer";
import chatActiveReducer from "./reducers/chatActiveReducer";
import commentsReducer from "./reducers/commentsReducer";

const rootReducer = combineReducers({
    chats: chatReducer,
    users: userReducer,
    chatActive: chatActiveReducer,
    comments: commentsReducer,
});

export const store = configureStore(
    {
        reducer: rootReducer,
        middleware: (getDefaultMiddlewar) =>
            getDefaultMiddleware({
                immutableCheck: false,
                serializableCheck: false,
            }),
    },
    composeWithDevTools(applyMiddleware(thunk))
);
