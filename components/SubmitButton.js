import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
export default function SubmitButton({ text, onPress, disable = false }) {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <TouchableOpacity
            style={[styles.button, disable && styles.buttonDisabled]}
            onPress={onPress}
            disabled={disable}
        >
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
    buttonDisabled: {
        backgroundColor: "#cccccc",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});