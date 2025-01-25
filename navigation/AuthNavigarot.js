import { createStackNavigator } from "@react-navigation/stack"

import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";

const Stack = createStackNavigator();

const AuthNavigator = ({ setIsLoggedIn }) => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login">
                {props => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen
                name="Signup"
                component={RegistrationScreen}
            />
        </Stack.Navigator>
    );
};

export default AuthNavigator;