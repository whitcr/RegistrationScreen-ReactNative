import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer, useNavigationState } from "@react-navigation/native";
import AuthNavigator from './navigation/AuthNavigarot';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        {isLoggedIn ? (
          <BottomTabNavigator setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <AuthNavigator setIsLoggedIn={setIsLoggedIn} />
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
