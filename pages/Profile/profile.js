import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './profile.styles'; 

console.log('profile caricato');
console.log('Stili caricati in Profile:', styles);

const Profile = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Benvenuto nella Profile</Text>
        </View>
    );
}

export default Profile;