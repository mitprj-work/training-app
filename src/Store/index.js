import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import counterStore from "./counterStore";
import userStore from "./userStore";

const persistConfig = {
    key: "userKey",
    storage
}

const persistreducer = persistReducer(persistConfig, userStore)
const store = configureStore({
    reducer: {
        data: counterStore,
        user: persistreducer,
    }
});

export const persiststore = persistStore(store);
export default store;