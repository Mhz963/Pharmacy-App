import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const StylishButton = ({ onPress, title }) => (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#007bff', // Button background color
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: 'white', // Button text color
        fontSize: 16,
    },
});

export default StylishButton;
