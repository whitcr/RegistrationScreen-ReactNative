import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer, useNavigationState } from "@react-navigation/native";
import AuthNavigator from './navigation/AuthNavigarot';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <GestureHandlerRootView>
          <NavigationContainer>
            {isLoggedIn ? (
              <BottomTabNavigator setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <AuthNavigator setIsLoggedIn={setIsLoggedIn} />
            )}
          </NavigationContainer>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
