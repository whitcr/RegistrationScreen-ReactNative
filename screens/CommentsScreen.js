import { Ionicons } from "@expo/vector-icons";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import 'react-native-get-random-values';
import { useSelector } from "react-redux";
import InputField from "../components/InputField";
import { addCommentToDB, getDocument } from "../utils.js/firestore";

const CommentsScreen = ({ route, navigate }) => {
    const user = useSelector((state) => state.user.userInfo);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const { postId } = route?.params;

    const addComment = async () => {
        const commentObj = {
            id: nanoid(),
            comment,
            userId: user?.uid,
            date: new Date().valueOf(),
        }

        try {
            await addCommentToDB(postId, commentObj)
            setComment('');
            Alert.alert('Success!')
            getComments()
        } catch (error) {
            console.log(error);
        }
    };

    const getComments = async () => {
        try {
            const result = await getDocument(postId, 'posts');

            setComments(result?.comments);
        } catch (error) {
            console.log(error)
        };
    };

    useEffect(() => {
        if (postId) {
            getComments();
        }
    }, [postId]);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    };

    const CommentItem = ({ text, date }) => (
        <View style={styles.commentItemContainer}>
            <View style={styles.commentTextContainer}>
                <Text style={styles.commentText}>{text}</Text>
                <Text style={styles.commentDate}>{formatDate(date)}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.section}>
            <FlatList
                data={comments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CommentItem
                        text={item.comment}
                        date={item.date}
                    />
                )}
                contentContainerStyle={styles.commentList}
            />
            <View />

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}> 
            <InputField
                value={comment}
                onChangeText={setComment}
                placeholder="Напишіть ваш коментар тут"
            >
            </InputField>
            <TouchableOpacity onPress={addComment}>
                <Ionicons
                    size={24}
                    name="add-circle"
                    color="black"
                />
                </TouchableOpacity></View>
        </View>
    );
};

export default CommentsScreen;

const styles = StyleSheet.create({
    section: {
        flex: 1,
        padding: 16,
        paddingBottom: 32,
        justifyContent: 'space-between',
    }, commentList: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    commentItemContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16,
    }, commentTextContainer: {
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
})