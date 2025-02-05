import { ImageBackground, Keyboard, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AvatarProfile from "../components/AvatarProfile";
import Post from "../components/Post";

export default function ProfileScreen() {


    return (
        <ScrollView onPress={Keyboard.dismiss} style={styles.mainContainer}>
            <ImageBackground
                source={require("../assets/BG.png")}
                style={styles.backgroundImage}
            >
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <AvatarProfile avatar={require("../assets/BG.png")} />
                        <Post
                            image={require("../assets/BG.png")}
                            title="Ліс"
                            location="Ivano-Frankivsk Region, Ukraine"
                            commentsCount={0}
                        />
                        <Post
                            image={require("../assets/BG.png")}
                            title="Закат"
                            location="Black Sea, Ukraine"
                            commentsCount={5}
                        />
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        height: "100%",
        marginTop: 100,
        backgroundColor: "#fff",
    },
    contentContainer: {
        padding: 16,
        position: "relative",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-start",
    },
});
