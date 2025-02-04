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

import Avatar from "../components/Avatar";
import CustomTitle from "../components/CustomTitle";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import SubmitButton from "../components/SubmitButton";
import { registerDB } from "../utils.js/auth";

export default function RegistrationScreen({ route, navigation }) {
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
    registerDB(formData.email, formData.password, formData.login);
  };

  return (
        <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require("./../assets/BG.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.formContainer}>
            <Avatar />

            <CustomTitle value="Реєстрація" />

            <InputField
              placeholder="Логін"
              value={formData.login}
              onChangeText={(text) => handleChange("login", text)}
            />
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

            <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLinkText}>
                Вже є акаунт? <Text style={styles.linkText}>Увійти</Text>
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
