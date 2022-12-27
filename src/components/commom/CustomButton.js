import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function CustomButton({ text, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}>
            <Text
                style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "70%",
        backgroundColor: '#ff9980',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
        marginTop: 20,
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    }
})