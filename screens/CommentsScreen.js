import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    FlatList,
    Pressable,
} from "react-native";

const ImageHeader = ({ image, title }) => (
    <View style={styles.imageHeaderContainer}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
    </View>
);

const CommentItem = ({ avatar, text, date }) => (
    <View style={styles.commentItemContainer}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.commentTextContainer}>
            <Text style={styles.commentText}>{text}</Text>
            <Text style={styles.commentDate}>{date}</Text>
        </View>
    </View>
);

const CommentInput = () => {

    return (
        <View style={styles.commentInputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Коментувати..."
            />
            <Pressable style={styles.submitButton}>
                <Text style={styles.submitButtonText}>↑</Text>
            </Pressable>
        </View>
    );
};

const CommentScreen = () => {
    const comments = [
        {
            id: "1",
            avatar: require("../assets/BG.png"),
            text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
            date: "09 червня, 2020 | 08:40",
        },
        {
            id: "2",
            avatar: require("../assets/BG.png"),
            text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
            date: "09 червня, 2020 | 09:14",
        },
        {
            id: "3",
            avatar: require("../assets/BG.png"),
            text: "Thank you! That was very helpful!",
            date: "09 червня, 2020 | 09:20",
        },
    ];

    return (
        <View style={styles.container}>
            <ImageHeader
                image={require("../assets/BG.png")}
                title="Коментарі"
            />
            <FlatList
                data={comments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CommentItem
                        avatar={item.avatar}
                        text={item.text}
                        date={item.date}
                    />
                )}
                contentContainerStyle={styles.commentList}
            />
            <CommentInput />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    imageHeaderContainer: {
        alignItems: "center",
        padding: 16,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 8,
    },
    title: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    commentList: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    commentItemContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    commentTextContainer: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        borderRadius: 8,
        padding: 12,
    },
    commentText: {
        fontSize: 14,
        color: "#333",
    },
    commentDate: {
        fontSize: 12,
        color: "#888",
        marginTop: 4,
    },
    commentInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderTopWidth: 1,
        borderColor: "#eee",
    },
    textInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 14,
        backgroundColor: "#f9f9f9",
    },
    submitButton: {
        marginLeft: 8,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#ff6c00",
        alignItems: "center",
        justifyContent: "center",
    },
    submitButtonText: {
        fontSize: 16,
        color: "#fff",
    },
});

export default CommentScreen;
