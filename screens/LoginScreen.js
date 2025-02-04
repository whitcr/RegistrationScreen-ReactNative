import React, { useState } from "react";
import {
    ImageBackground,
    Keyboard,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { useDispatch } from "react-redux";
import CustomTitle from "../components/CustomTitle";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import SubmitButton from "../components/SubmitButton";
import { loginDB } from "../utils.js/auth";

export default function LoginScreen({ route, navigation }) {
    const dispatch = useDispatch();

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
        try {
            loginDB({ email: formData.email, password: formData.password }, dispatch)
        } catch (err) {
            console.error('Login error:', err); 
        }
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

                    <SubmitButton text="Увійти" onPress={handleSubmit} />

                    <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate("Signup")}>
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
