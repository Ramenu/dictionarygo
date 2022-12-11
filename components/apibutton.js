import { useRef } from "react";
import { Button, StyleSheet, TouchableOpacity, Text, Animated } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { BLACK, DARK_GREY, LIGHT_GREY, WHITE } from "../redux/slices/themeslice";

// APIButton component
export const APIButton = () =>
{
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    const animatedColorValue = useRef(new Animated.Value(theme.input)).current;
    Animated.timing(animatedColorValue, {toValue: theme.output, duration: theme.animationDuration, useNativeDriver: false}).start();

    const color = animatedColorValue.interpolate({
        inputRange: [0, 255],
        outputRange: [BLACK, WHITE]
    });

    //const onPress = () => dispatch(fetchAPI());
    // Custom button
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: theme.buttonColor}]}>
            <Animated.Text style={[styles.text, {color: color}]}>SUBMIT</Animated.Text>
        </TouchableOpacity>
    );
}

// Styles for our APIButton
const styles = StyleSheet.create({
    button: {
        marginTop: "5%",
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: LIGHT_GREY,
        width: "20%",
        textAlign: "center"
    },
    text: {
        fontWeight: "bold",
        textAlign: "center",
        opacity: 0.85
    }
});
