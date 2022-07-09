import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import chatReducer from "./reducers/chatReducer";

const rootReducer = combineReducers({
    chats: chatReducer,
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
