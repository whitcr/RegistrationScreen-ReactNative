import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Keyboard,
    ImageBackground,
    Text,
    TouchableOpacity,
    Pressable
} from "react-native";

import PasswordField from "../components/PasswordField";
import SubmitButton from "../components/SubmitButton";
import InputField from "../components/InputField";
import CustomTitle from "../components/CustomTitle";

export default function LoginScreen() {
    const [formData, setFormData] = useState({
        login: "",
        email: "",
        password: "",
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        console.log("Дані форми:", formData);
    };

    return (
        <Pressable style={styles.container} onPress={Keyboard.dismiss}>
            <ImageBackground
                source={require("./../assets/BG.png")}
                style={styles.backgroundImage}
            >
                <View style={styles.formContainer}>

                    <CustomTitle value="Увійти" />

                    <InputField
                        placeholder="Адреса електронної пошти"
                        value={formData.email}
                        onChangeText={(text) => handleChange("email", text)}
                    />
                    <PasswordField
                        placeholder="Пароль"
                        value={formData.password}
                        onChangeText={(text) => handleChange("password", text)}
                    />

                    <SubmitButton text="Зареєструватися" onPress={handleSubmit} />

                    <TouchableOpacity style={styles.loginLink}>
                        <Text style={styles.loginLinkText}>
                            Немає аккаунту? <Text style={styles.linkText}>Зареєструватися</Text>
                        </Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-start",
    },
    formContainer: {
        borderRadius: 25,
        backgroundColor: "#fff",
        padding: 20,
        width: "100%",
        alignItems: "center",
        marginTop: 250,
        position: "relative",
        height: "100%",
    },
    linkText: {
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
    loginLink: {
        marginTop: 15,
    },
});
