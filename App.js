import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AuthNavigator from './navigation/AuthNavigarot';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import store from './redux/store';
import { authStateChanged } from './utils.js/auth';

export default function App() {
  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <GestureHandlerRootView>
          <AuthListener />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

const AuthListener = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    authStateChanged(dispatch);
  }, [dispatch]);

  return (
    <NavigationContainer>
      {user ? (
        <BottomTabNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
