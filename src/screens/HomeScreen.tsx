import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { styles } from '../theme/appTheme'

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    usePokemonPaginated();
    return (
        <View>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokeballBG}
            />

            <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20
            }}>
                Pokedex xd
            </Text>
        </View>
    )
}
