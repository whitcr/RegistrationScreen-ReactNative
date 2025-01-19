import React, { useState } from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
} from "react-native";

export default function PasswordField({ placeholder, value, onChangeText }) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder={placeholder}
                secureTextEntry={!passwordVisible}
                value={value}
                onChangeText={onChangeText}
            />
            <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={styles.showButton}
            >
                <Text style={styles.showButtonText}>
                    {passwordVisible ? "Сховати" : "Показати"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        position: "relative",
    },
    input: {
        width: "100%",
        backgroundColor: "#f6f6f6",
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        color: "#212121",
    },
    passwordInput: {
        paddingRight: 60,
    },
    showButton: {
        position: "absolute",
        right: 15,
        top: 15,
    },
    showButtonText: {
        color: "#ff6c00",
        fontSize: 14,
    },
});
