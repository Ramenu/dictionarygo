import { SafeAreaView, TextInput, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { EMPTY_FIELD } from "../redux/actionTypes";
import { setWordToSearch } from "../redux/slices/dictionaryslice";

export const InputBox = ({defaultText}) =>
{
    const dispatch = useDispatch();
    const word = useSelector((state) => state.dictionary.wordToSearch);
    console.log(word);
    return (
        <TextInput style={styles.input} 
                   defaultValue={defaultText} 
                   value={word} 
                   onChangeText={(text) => dispatch(setWordToSearch(text))}
                   onFocus={() => dispatch(setWordToSearch(""))}/>
    );;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#E2DEDE',
        borderRadius: 25,
        width: "50%",
        height: "5%",
        overflow: "hidden",
        opacity: 0.6,
        textAlign: "center"
    }
});
