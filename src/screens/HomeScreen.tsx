import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { styles } from '../theme/appTheme'
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/PokemonCard'

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();

    usePokemonPaginated();
    return (
        <View>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokeballBG}
            />

            <View style={{
                //...styles.globalMargin,
                alignItems: 'center'
            }}>
                <FlatList
                    data={simplePokemonList}
                    keyExtractor={(pokemon) => pokemon.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}

                    // Header
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            top: top + 20,
                            marginBottom: top + 20,
                            paddingBottom: 15
                        }}>
                            Pokedex xd
                        </Text>
                    )}

                    renderItem={({ item }) => <PokemonCard pokemon={item} />}

                    // infinite scroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}

                    ListFooterComponent={
                        <ActivityIndicator
                            style={{ height: 100 }}
                            size={20}
                            color="green"
                        />
                    }
                />
            </View>




        </View>
    )
}
