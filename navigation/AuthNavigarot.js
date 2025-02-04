import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login">
                {props => <LoginScreen {...props}/>}
            </Stack.Screen>
            <Stack.Screen
                name="Signup"
            >
                {props => <RegistrationScreen {...props}/>}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default AuthNavigator;