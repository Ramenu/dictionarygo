import { configureStore } from "@reduxjs/toolkit";
import dictionaryReducer from "../slices/dictionaryslice";

export default configureStore({
    reducer: {
        dictionary: dictionaryReducer
    }
});