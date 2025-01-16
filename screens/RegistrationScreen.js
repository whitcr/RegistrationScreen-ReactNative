import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function RegistrationScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../assets/BG.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.formContainer}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.title}>Реєстрація</Text>

          <TextInput placeholder="Логін" style={styles.input} />
          <TextInput placeholder="Адреса електронної пошти" style={styles.input} />
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Пароль"
              style={[styles.input, styles.passwordInput]}
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
              style={styles.showButton}
            >
              <Text style={styles.showButtonText}>{passwordVisible ? 'Сховати' : 'Показати'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Зареєструватися</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginLink}>
            <Text style={styles.loginLinkText}>
              Вже є акаунт? <Text style={styles.linkText}>Увійти</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },
  formContainer: {
    borderRadius: 25,
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: 250,
    position: 'relative',
  },
  avatarContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -90,
  },
  addButton: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    backgroundColor: '#ff6c00',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#212121',
  },
  input: {
    width: '100%',
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    color: '#212121',
  },
  passwordContainer: {
    width: '100%',
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 60,
  },
  showButton: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  showButtonText: {
    color: '#ff6c00',
    fontSize: 14,
  },
  registerButton: {
    backgroundColor: '#ff6c00',
    borderRadius: 100,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginTop: 15,
    alignItems: 'center',
    width: '100%',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 10,
  },
  loginLinkText: {
    color: '#1b4371',
    fontSize: 14,
  },
  linkText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
