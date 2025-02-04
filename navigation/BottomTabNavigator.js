import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch } from 'react-redux';
import LogoutButton from "../components/LogoutButton";
import CommentScreen from "../screens/CommentsScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import MapScreen from "../screens/MapScreen";
import PostScreen from "../screens/PostScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { colors } from "../styles/global";
import { logoutDB } from "../utils.js/auth";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MainTabs" options={{ headerShown: false }}>
                {() => <BottomTabNavigator/>}
            </Stack.Screen>


            <Stack.Screen
                name="MapScreen"
                component={MapScreen}
            />

            <Stack.Screen
                name="CommentScreen"
                component={CommentScreen}
            />
        </Stack.Navigator>
    );
}


function BottomTabNavigator() {
    const dispatch = useDispatch();

    return (
        <Tab.Navigator
            initialRouteName="Profile"
            screenOptions={({ navigation }) => ({
                tabBarLabel: () => null,
                tabBarStyle: {
                    display: 'flex',
                },
            })}
        >
            <Tab.Screen
                name="Posts"
                component={PostScreen}
                options={({ navigation }) => ({
                    title: "Posts",
                    headerRightContainerStyle: { paddingRight: 8 },
                    headerRight: () => (
                        <LogoutButton
                            onPress={() => logoutDB(dispatch)}
                        />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="grid-outline"
                            size={28}
                            color={focused ? colors.orange : "black"}
                        />
                    ),
                })}
            />

            <Tab.Screen
                name="Create Post"
                component={CreatePostScreen}
                options={({ navigation }) => ({
                    title: "Create Post",
                    headerLeftContainerStyle: { paddingLeft: 8, paddingRight: 8 },
                    headerLeft: () => (
                        <Ionicons name="arrow-back" size={24} onPress={() => navigation.navigate("Profile")} />
                    ),
                    tabBarStyle: { display: "none" },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.addButtonContainer}>
                            <Ionicons
                                name="add-outline"
                                size={32}
                                color={focused ? colors.black : "white"}
                                style={styles.addButton}
                            />
                        </View>
                    ),
                })}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={({ navigation }) => ({
                    title: "Profile",
                    headerRightContainerStyle: { paddingRight: 8 },
                    headerRight: () => (
                        <LogoutButton
                            onPress={() => logoutDB(dispatch)}
                        />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="person"
                            size={32}
                            color={focused ? colors.orange : "black"}
                        />
                    ),
                })}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    addButtonContainer: {
        width: 60,
        height: 60,
        backgroundColor: colors.orange,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: -25,
    },
    addButton: {
        color: "white",
    },
});

export default AppNavigator;