import { Animated, StyleSheet, View } from "react-native";
import { CustomButton } from "./custombutton";
import { InputBox } from "./inputbox";
import { Title } from "./title";
import { CustomView } from "./customview";
import { TopBar } from "./topbar";
import { useDispatch, useSelector } from "react-redux";
import backupJson from "../backup.json";
import { useState } from "react";
import { setData } from "../redux/slices/dictionaryslice";

export const Search = ({route, navigation}) =>
{

    const word = useSelector((state) => state.dictionary.wordToSearch);
    const dispatch = useDispatch();

    return (
        <CustomView>
            <TopBar/>
            <Title title={route.params.title}/>
            <InputBox defaultText="Search for something.."/>
            <CustomButton text="SUBMIT" onPress={() => {
                const api = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
                fetch(api).then((resp) => resp.json()).then((json) => {
                    // simulate loading
                    dispatch(setData(json));
                    setTimeout(() => navigation.navigate("Dictionary", {title: word}), 500);
                // In case retrieving the JSON fails, just use the backup
                }).catch((err) => {
                    console.error(err);
                    // Simulate loading
                    dispatch(setData(backupJson));
                    setTimeout(() => navigation.navigate("Dictionary", {title: word}), 500);
                });
            }}/>
        </CustomView>
    );
}


