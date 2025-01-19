import React from "react";
import { StyleSheet, Text } from "react-native";

export default function CustomTitle({ value }) {
    return (
        <Text style={styles.title}>{value} </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#212121",
    },
});
