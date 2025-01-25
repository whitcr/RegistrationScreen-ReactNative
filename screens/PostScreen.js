import { View, Text, StyleSheet, Image } from "react-native";
import Post from "../components/Post";
import UserProfile from "../components/UserProfile";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../styles/global";

export default function PostScreen() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <UserProfile
                    name="Natali Romanova"
                    email="email@example.com"
                    avatar={require("../assets/BG.png")}
                />
                <Post
                    image={require("../assets/BG.png")}
                    title="Ліс"
                    location="Ivano-Frankivsk Region, Ukraine"
                    commentsCount={0}
                    likesCount={1}
                />
                <Post
                    image={require("../assets/BG.png")}
                    title="Закат"
                    location="Black Sea, Ukraine"
                    commentsCount={5}
                    likesCount={2}
                />
            </ScrollView>
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
