import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles/global";
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

export default function Post({ image, title, location, commentsCount, likesCount }) {
    const navigation = useNavigation();

    const handlePressLocation = () => {
        navigation.navigate('MapScreen', { location });
    };

    const handlePressComments = () => {
        navigation.navigate('CommentScreen');
    };

    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.footer}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={handlePressComments} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Ionicons name="chatbubble" size={16} color={colors.orange} />
                        <Text style={styles.comments}>{commentsCount}</Text>
                    </TouchableOpacity>
                    <Ionicons name="heart-outline" size={16} color={colors.orange} />
                    <Text style={styles.comments}>{likesCount}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Ionicons name="pin" size={16} color={colors.orange} />
                    <TouchableOpacity onPress={handlePressLocation}>
                        <Text style={styles.location}>{location}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 8,
    },
    footer: {
        width1: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    comments: {
        marginLeft: 4,
        marginRight: 16,
        color: "#757575",
    },
    location: {
        color: "#757575",
    },
});
