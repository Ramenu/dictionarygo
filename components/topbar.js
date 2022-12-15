import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/slices/themeslice";

export const TopBar = () =>
{
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);
    const Press = () => dispatch(changeTheme());

    return (
            <TouchableHighlight style={styles.button} underlayColor={theme.underlayColor} onPress={Press}>
                <Image style={styles.icon} source={theme.icon}/>
            </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "baseline",
        bottom: "38%"
    },  
    button: {
        opacity: 0.75,
        borderRadius: 20,
        alignSelf: "baseline",
        position: 'absolute',
        top: 10,
        left: 5
    },
    icon: {
        width: 30,
        height: 30,
    }
});