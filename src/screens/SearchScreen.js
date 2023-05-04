import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native'
import SearchBar from '../components/SearchBar';
import useResults from'../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price ===price;
        })
    }

    return <>
        <SearchBar term={term} 
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList results={filterResultsByPrice('$$')}title="Bit Pricier" />
        <ResultsList results={filterResultsByPrice('$$$')}title="Big Spender" />
        </ScrollView>
    </>
}

SearchScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
            <Ionicons name="heart-sharp" size={24}/>
          </TouchableOpacity>
        ),
      };
}

const styles = StyleSheet.create({})

export default SearchScreen;