import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState, useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Post from "../components/Post";
import UserProfile from "../components/UserProfile";
import { colors } from "../styles/global";
import { fetchAllPosts } from "../utils.js/firestore";
import { useSelector } from "react-redux";
import { useFocusEffect } from '@react-navigation/native';
export default function PostScreen({ navigation }) {
    const user = useSelector((state) => state.user.userInfo);
    const displayName = user?.displayName;
    const [posts, setPosts] = useState([]);

    useFocusEffect(
        useCallback(() => {
            const getAllPosts = async () => {
                try {
                    const result = await fetchAllPosts();
                    const allPosts = result.flatMap(user => result ? user.posts : []);
                    setPosts(allPosts);
                } catch (error) {
                    console.log(error);
                }
            };

            getAllPosts();
        }, [])
    );

    // Переніс перехід на CommentsScreen звідси всередину компонента <Post />
    const renderItem = ({ item }) => <Post data={item} />;

    return (
        <View style={styles.container}>
            <View contentContainerStyle={styles.contentContainer}>
                <UserProfile
                    name="Natali Romanova"
                    email="email@example.com"
                    avatar={require("../assets/BG.png")}
                />
                <FlatList
                    data={posts}
                    keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
                    renderItem={renderItem}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        marginBottom: 100,
    },
    contentContainer: {
        padding: 16,
    },
});
