import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './search.styles'; 


const Search = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Benvenuto nella ricerca</Text>
        </View>
    );
}

export default Search;