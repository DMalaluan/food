import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import  {Context}  from '../context/FavoritesContext';
import { Feather } from '@expo/vector-icons';

const FavoritesScreen = ({ navigation }) => {
    const { state, deleteFavorite } = useContext(Context);

    const RenderEmptyContainer = () =>{
        return(
        <View style={styles.emptyText}>
        <View style={styles.emptyTextDisplayView}>
        <Text style={styles.emptyTextDisplay}>There are no favorites saved</Text>
        </View>
        </View>
        )}

    return <View>
        <FlatList 
            data={state}
            keyExtractor={(favorite) => favorite.id}
            ListEmptyComponent={<RenderEmptyContainer />}
            renderItem={({ item }) => {
                return (
                <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title}</Text>
                        <TouchableOpacity onPress={() => deleteFavorite(item.id)}>
                            <Feather style={styles.icon} name="trash" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>);
            }}
        />
        <Button title="Go to Search Screen" onPress={() => navigation.navigate('Search')} />

    </View>
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    },
    emptyText: {
        marginTop: 10,
        alignSelf: 'center'
    }
});

export default FavoritesScreen;