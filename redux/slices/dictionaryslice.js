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
        fetchAPI: async (state, action) => {
            if (action.type === FETCH_WORD_FROM_DICTIONARY) {
                const api = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`;
                await fetch(api).then((resp) => resp.json()).then((j) => {json = j[0];});
            }
        }
    }
});

export const {setWordToSearch, fetchAPI} = dictionarySlice.actions;

export default dictionarySlice.reducer;