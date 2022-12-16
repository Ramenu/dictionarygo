import { useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import { useSelector } from "react-redux"
import { BLACK, DARK_GREY, WHITE, SILVER } from "../redux/slices/themeslice";

export const CustomText = ({children, style, useDifferentPalette}) =>
{
    const theme = useSelector((state) => state.theme);
    const animatedColorValue = useRef(new Animated.Value(theme.input)).current;
    Animated.timing(animatedColorValue, {toValue: theme.output, duration: theme.animationDuration, useNativeDriver: false}).start();

    if (useDifferentPalette) {
        const color = animatedColorValue.interpolate({
            inputRange: [0, 255],
            outputRange: [DARK_GREY, SILVER]
        });
        return <Animated.Text style={[styles.text, {color: color}, style]}>{children}</Animated.Text>
    }

    const color = animatedColorValue.interpolate({
        inputRange: [0, 255],
        outputRange: [BLACK, WHITE]
    });

    return <Animated.Text style={[styles.text, {color: color}, style]}>{children}</Animated.Text>
}

const styles = StyleSheet.create({
    text: {
        position: "relative",
        fontWeight: "bold",
        textAlign: "center",
        opacity: 0.85
    }
});