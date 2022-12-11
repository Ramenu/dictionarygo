import { useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { BLACK, WHITE } from "../redux/slices/themeslice";


export const Title = ({title}) =>
{

    const theme = useSelector((state) => state.theme);
    const value = useRef(new Animated.Value(theme.input)).current;
    Animated.timing(value, {toValue: theme.output, duration: theme.animationDuration, useNativeDriver: false}).start();

    const color = value.interpolate({
        inputRange: [0, 255],
        outputRange: [BLACK, WHITE]
    });

    return (
        <Animated.Text style={[styles.title, {color: color}]}>{title}</Animated.Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 25,
        opacity: 0.9,
        bottom: "25%"
    }
});