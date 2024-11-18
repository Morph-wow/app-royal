import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './home.styles'; 


const Home = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Benvenuto nella Home!</Text>
        </View>
    );
}

export default Home;