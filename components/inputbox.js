import { useRef } from "react";
import { SafeAreaView, TextInput, StyleSheet, Animated } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { EMPTY_FIELD } from "../redux/actionTypes";
import { setData, setWordToSearch } from "../redux/slices/dictionaryslice";
import { DARK_GREY, LIGHT_GREY } from "../redux/slices/themeslice";


export const InputBox = (props) => {
    const dispatch = useDispatch();
    const word = useSelector((state) => state.dictionary.wordToSearch);
    const theme = useSelector((state) => state.theme);

    return (
        <TextInput style={[styles.input, { backgroundColor: theme.textInputColor, color: theme.textColor }]}
            defaultValue={props.defaultText}
            value={word}
            onChangeText={(text) => dispatch(setWordToSearch(text))}
            onFocus={() => {
                dispatch(setWordToSearch(""));
                if (props.hasOwnProperty('setProgress')) {
                    props.setProgress(0);
                }
            }} />
    );
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 25,
        width: "50%",
        height: "5%",
        overflow: "hidden",
        opacity: 0.6,
        textAlign: "center"
    }
});
