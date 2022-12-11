import { useRef } from "react";
import { Animated, SafeAreaView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { BLACK, WHITE } from "../redux/slices/themeslice";
import { APIButton } from "./apibutton";
import { InputBox } from "./inputbox";
import { Title } from "./title";
import { TopBar } from "./topbar";


export const Entry = () =>
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

    return (
        <Animated.View style={[styles.container, {backgroundColor: color}]}>
            <TopBar/>
            <Title title="Dictionary GO"/>
            <InputBox defaultText="Search for something.."/>
            <APIButton/>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});