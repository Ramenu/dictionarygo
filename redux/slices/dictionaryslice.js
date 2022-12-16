import { createSlice } from "@reduxjs/toolkit";
import { CHANGE_FIELD, EMPTY_FIELD, FETCH_WORD_FROM_DICTIONARY } from "../actionTypes";

export const dictionarySlice = createSlice({
    name: "dictionary",
    initialState: {
        wordToSearch: null,
        data: {},
    },
    reducers: {
        setWordToSearch: (state, action) => {
            return {...state, wordToSearch: action.payload};
        },
        setData: (state, action) => {
            return {...state, data: action.payload};
        }
    }
});

export const {setWordToSearch, setData} = dictionarySlice.actions;

export default dictionarySlice.reducer;