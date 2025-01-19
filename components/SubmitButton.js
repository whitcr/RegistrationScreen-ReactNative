import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SubmitButton({ text, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ff6c00",
        borderRadius: 100,
        paddingVertical: 15,
        paddingHorizontal: 40,
        marginTop: 15,
        alignItems: "center",
        width: "100%",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
