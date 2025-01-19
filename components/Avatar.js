import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Avatar() {
    return (
        <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    avatarContainer: {
        marginBottom: 20,
        alignItems: "center",
    },
    avatar: {
        width: 100,
        height: 100,
        backgroundColor: "#f6f6f6",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: -90,
    },
    addButton: {
        position: "absolute",
        bottom: -10,
        right: -10,
        backgroundColor: "#ff6c00",
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    addButtonText: {
        color: "#fff",
        fontSize: 20,
        lineHeight: 20,
    },
    });
