import { Animated, StyleSheet, View, Alert, Modal } from "react-native";
import { CustomButton } from "./custombutton";
import { InputBox } from "./inputbox";
import { Title } from "./title";
import { CustomView } from "./customview";
import { TopBar } from "./topbar";
import { useDispatch, useSelector } from "react-redux";
import backupJson from "../backup.json";
import { useState, useEffect } from "react";
import { setData } from "../redux/slices/dictionaryslice";
import { Bar } from 'react-native-progress';

export const Search = ({route, navigation}) =>
{
    const [progress, setProgress] = useState(0);
    const word = useSelector((state) => state.dictionary.wordToSearch);
    const dispatch = useDispatch();

    useEffect(()=>{setProgress(0)},[]);

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

                    //simulate loading progress bar
                    setProgress(0);
                    setTimeout(() => {setProgress(1)}, 250);

                    setTimeout(() => navigation.navigate("Dictionary", {title: word}), 500);
                // In case retrieving the JSON fails, just use the backup
                }).catch((err) => {
                    const confirmation = [
                        {text: "No", onPress: () => {}},
                        {text: "Yes", onPress: () => setData(backupJson)}
                    ];
                    Alert.alert("Attention", "Failed to fetch API. Want to use the backup instead?", confirmation)
                    console.error(err);
                    // Simulate loading
                    setTimeout(() => navigation.navigate("Dictionary", {title: word}), 500);
                });
            }}/>
            <View style={{margin:30}}>
                <Bar progress={progress} color="grey"></Bar>
            </View>
            
        </CustomView>
    );
}


