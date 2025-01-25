import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../styles/global";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function UserProfile({ name, email, avatar }) {
    return (
        <View style={styles.container} >
            <Image source={avatar} style={styles.avatar} />
            <View>
                <Text style={styles.name}> {name} </Text>
                <Text style={styles.email} > {email} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.black_primary,
    },
    email: {
        fontSize: 14,
        color: colors.text_gray,
    },
});
