import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function InputField({ placeholder, value, onChangeText }) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        backgroundColor: "#f6f6f6",
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        color: "#212121",
    },
});
