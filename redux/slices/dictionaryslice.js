import { createSlice } from "@reduxjs/toolkit";
import { CHANGE_FIELD, EMPTY_FIELD, FETCH_WORD_FROM_DICTIONARY } from "../actionTypes";

export const dictionarySlice = createSlice({
    name: "dictionary",
    initialState: {
        wordToSearch: null,
        json: {}
    },
    reducers: {
        setWordToSearch: (state, action) => {
            return {...state, wordToSearch: action.payload};
        },
        fetchAPI: (state, action) => {
            let result = {};
            const api = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`;
            fetch(api).then((resp) => resp.json()).then((j) => {result = j[0];});
            console.log(result);
            return {...state, json: result};
        }
    }
});

export const {setWordToSearch, fetchAPI} = dictionarySlice.actions;

export default dictionarySlice.reducer;