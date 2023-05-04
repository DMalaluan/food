import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, FlatList, Image, ScrollView, Button } from 'react-native';
import yelp from "../api/yelp";
import Rating from "../components/Rating";
import { Context } from "../context/FavoritesContext";

const ResultsShowScreen = ({ navigation }) => {
    const {addFavorite} = useContext(Context);
    const [result, setResult] = useState(null);
    const [reviewResult, setReviewResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    const getReviewResult = async (id) => {
        const response = await yelp.get(`/${id}/reviews`);
        setReviewResult(response.data);
    };

    useEffect(() => {
        getResult(id);
        getReviewResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return <>
        <Text style={styles.resultName}>{result.name}</Text>
        <Text style={{ marginBottom: 7,  alignSelf: 'center' }}>Address: {result.location.display_address[0]}{result.location.display_address[1] ? ', ' + result.location.display_address[2] : null}</Text>
        <Text style={{  alignSelf: 'center'}}>Phone Number: {result.display_phone}</Text>
        <Text style={styles.sectionTitle}>Images:</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image style={styles.image} source={{ uri: item }} />
            }}
        />
        <Text style={styles.sectionTitle}>Ratings:</Text>
        {reviewResult ? 
        <FlatList
            data={reviewResult.reviews}
            keyExtractor={(review) => review.id}
            renderItem={({ item }) => {
                return <View>
                    <Rating rating={item} />
                </View>
            }}
        /> : null}
        <Button title="Add to Favorites" onPress={() => {addFavorite(id, result.name); navigation.navigate('Favorites')}} />
    </>
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 75,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5
    },
    resultName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 15,
        marginBottom: 10, 
        alignSelf: 'center'
    },
    sectionTitle: {
        marginLeft: 5, 
        marginTop: 5,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center'
    }
});

export default ResultsShowScreen;