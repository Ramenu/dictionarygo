import { useRef } from "react";
import { Button, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { BLACK, DARK_GREY, LIGHT_GREY, WHITE } from "../redux/slices/themeslice";
import { CustomText } from "./customtext";

// CustomButton component
export const CustomButton = ({onPress, text, style}) =>
{
    const theme = useSelector((state) => state.theme);

    // Custom button
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: theme.buttonColor}, style]} onPress={onPress}>
            <CustomText>{text}</CustomText>
        </TouchableOpacity>
    );
}

// Styles for our CustomButton
const styles = StyleSheet.create({
    button: {
        marginTop: "5%",
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: LIGHT_GREY,
        width: "23%",
        textAlign: "center",
        alignSelf: "center"
    }
});
