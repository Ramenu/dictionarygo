import { configureStore } from "@reduxjs/toolkit";
import dictionaryReducer from "../slices/dictionaryslice";
import themeReducer from "../slices/themeslice";

export default configureStore({
    reducer: {
        dictionary: dictionaryReducer,
        theme: themeReducer
    }
});