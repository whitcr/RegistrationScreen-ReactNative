import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Pressable, Keyboard } from 'react-native';
import { colors } from '../styles/global';
import Ionicons from '@expo/vector-icons/Ionicons'
import SubmitButton from '../components/SubmitButton';

const CreatePostScreen = () => {
    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <View style={styles.imageContainer}>
                <TouchableOpacity>
                    <Text style={styles.imageUploadText}>Upload image</Text>

                </TouchableOpacity>
                <Ionicons
                    name="add-outline"
                    size={24}
                />
            </View>

            <TextInput
                style={styles.locationInput}
                placeholder="Name"
            />

            <TextInput
                style={styles.locationInput}
                placeholder="Location"
            />

            <SubmitButton text={"Завантажити"} disable />

            <View style={styles.deleteButtonContainer}>
                <Ionicons
                    name="trash-bin-outline"
                    size={24}
                    style={styles.deleteButton}
                />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    imageContainer: {
        width: '100%',
        height: 300,
        backgroundColor: colors.border_gray,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: colors.border_gray,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageUploadText: {
        fontSize: 18,
        color: '#999',
    },
    locationInput: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: colors.border_gray,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    deleteButtonContainer: {
        width: 60,
        height: 60,
        backgroundColor: colors.border_gray,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    deleteButton: {
        color: colors.black_primary,
    },
});

export default CreatePostScreen; 