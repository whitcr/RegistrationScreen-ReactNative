import { View, Text, StyleSheet, Image } from "react-native";

export default function AvatarProfile({ avatar}) {
    return (
        <View style={styles.header}>
            <Image
                source={avatar}
                style={styles.profileImage}
            />
            <Text style={styles.profileName}>name</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 20,
    },
    profileName: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: "bold",
    },
});

