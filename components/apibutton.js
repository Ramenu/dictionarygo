import { Button, StyleSheet, TouchableOpacity, Text } from "react-native";

// APIButton component
export const APIButton = () =>
{
    // Custom button
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>SUBMIT</Text>
        </TouchableOpacity>
    );
}

// Styles for our APIButton
const styles = StyleSheet.create({
    button: {
        marginTop: "5%",
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#18C2CD",
        width: "15%",
        textAlign: "center"
    },
    text: {
        fontWeight: "bold",
        color: "#fff", // White colour text
    }
});
