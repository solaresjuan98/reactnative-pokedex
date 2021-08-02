import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export const Loading = () => {
    return (
        <View style={styles.activityContainer}>
            <ActivityIndicator
                size={50}
                color="blue"
            />

            <Text>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    activityContainer: {
        flex: 1,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center'
    }
});