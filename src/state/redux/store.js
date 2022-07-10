import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import chatReducer from "./reducers/chatReducer";
import userReducer from "./reducers/userReducer";
import chatActiveReducer from "./reducers/chatActiveReducer";

const rootReducer = combineReducers({
    chats: chatReducer,
    users: userReducer,
    chatActive: chatActiveReducer,
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
