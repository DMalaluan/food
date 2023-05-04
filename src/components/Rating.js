import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Rating = ({ rating }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.ratingText}>{rating.rating} stars</Text>
            <Text style={{ marginBottom: 5 }}>{rating.text}</Text> 
            <Text>From: {rating.user.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 300,
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 5,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 5,
        backgroundColor: 'lightgrey'
    },
    ratingText: {
        fontSize: 16,
        marginBottom: 5
    }
});

export default Rating;