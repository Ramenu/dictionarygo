import { useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { BLACK, DARK_GREY, LIGHT_GREY, SILVER, WHITE } from "../redux/slices/themeslice";


export const Title = ({title, subTitle, style}) =>
{

    const theme = useSelector((state) => state.theme);
    const value = useRef(new Animated.Value(theme.input)).current;
    const subTitleVal = useRef(new Animated.Value(theme.input)).current;

    const titleColor = value.interpolate({
        inputRange: [0, 255],
        outputRange: [BLACK, WHITE]
    });

    const subTitleColor = subTitleVal.interpolate({
        inputRange: [0, 255],
        outputRange: [DARK_GREY, SILVER]
    });

    Animated.parallel([
        Animated.timing(value, {toValue: theme.output, duration: theme.animationDuration, useNativeDriver: false}),
        Animated.timing(subTitleVal, {toValue: theme.output, duration: theme.slowAnimationDuration, useNativeDriver: false})
    ]).start();

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.title, {color: titleColor}, style]}>{title}</Animated.Text>
            <Animated.Text style={[styles.subTitle, {color: subTitleColor}, style]}>{subTitle}</Animated.Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        opacity: 0.9,
    },
    subTitle: {
        fontWeight: "bold",
        fontSize: 20,
        opacity: 0.9
    }
});