import { configureStore } from "@reduxjs/toolkit";

import counterStore from "./counterStore";
import userStore from "./userStore";

const store = configureStore({
    reducer: {
        data: counterStore,
        user: userStore,
    }
});

export default store;