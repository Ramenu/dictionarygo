import { Animated, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { WHITE, BLACK } from "../redux/slices/themeslice";

export const CustomView = ({children}) =>
{
    const theme = useSelector((state) => state.theme);

    const animatedColorValue = useRef(new Animated.Value(theme.input)).current;
    
    // Animate the color value to the output for a duration of 170ms
    Animated.timing(animatedColorValue, {toValue: theme.output, duration: theme.animationDuration, useNativeDriver: false}).start();

    // Interpolate between white and black
    const color = animatedColorValue.interpolate({
      inputRange: [0, 255],
      outputRange: [WHITE, BLACK]
    });

    return <Animated.View style={[styles.container, {backgroundColor: color}]}>{children}</Animated.View>;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});