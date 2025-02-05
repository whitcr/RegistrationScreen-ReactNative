import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Post from "../components/Post";
import UserProfile from "../components/UserProfile";
import { colors } from "../styles/global";
import { fetchAllPosts } from "../utils.js/firestore";
import { useSelector } from "react-redux";

export default function PostScreen({ navigation }) {
    const user = useSelector((state) => state.user.userInfo);
    const displayName = user?.displayName;
    const [posts, setPosts] = useState([]);

    const isFocused = useIsFocused();


    useEffect(() => {
        const getAllPosts = async () => {
            try {
                const result = await fetchAllPosts();
                console.log(result);
                const allPosts = result.flatMap(user => result ? user.posts : []);
                setPosts(allPosts);
                console.log(allPosts);
            } catch (error) {
                console.log(error);
            }
        };

        getAllPosts();
    }, []);

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
    },
    contentContainer: {
        padding: 16,
    },
});
