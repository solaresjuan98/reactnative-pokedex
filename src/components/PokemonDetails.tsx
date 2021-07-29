import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;

}

export const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: '#EEF3F1'
            }}
            showsVerticalScrollIndicator={false}
        >


            {/* types and weight */}
            <View style={{
                ...styles.container,
                marginTop: 400
            }}>
                <Text style={styles.title}>
                    Types
                </Text>


                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={type.name}>
                                {type.name}
                            </Text>
                        ))
                    }
                </View>

                {/* Weight */}
                <Text style={styles.title}>
                    Weight
                </Text>
                <Text style={styles.regularText}>
                    {pokemon.weight}
                </Text>

            </View>

            {/* Sprites */}
            <View style={{
                ...styles.container
            }}>
                <Text style={styles.title}>
                    Sprites
                </Text>
            </View>


            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {/*Images*/}
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />

                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprite}
                />

                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprite}
                />

                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprite}
                />
            </ScrollView>


            {/* Pokemon Skills */}
            <View style={{
                ...styles.container
            }}>
                <Text style={styles.title}>
                    Skills
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={ability.name}>
                                {ability.name}
                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* Pokemon Moves */}
            <View style={{
                ...styles.container
            }}>
                <Text style={styles.title}>
                    Moves
                </Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={move.name}>
                                {move.name}
                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* Pokemon Stats */}
            <View style={{
                ...styles.container
            }}>
                <Text style={styles.title}>
                    Stats
                </Text>
                <View>
                    {
                        pokemon.stats.map((stat, i) => (
                            <View
                                key={stat.stat.name + i}
                                style={{ flexDirection: 'row' }}>
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10,
                                        width: 150
                                    }}
                                    key={stat.stat.name}
                                >
                                    {stat.stat.name}
                                </Text>

                                <Text
                                    style={{
                                        ...styles.regularText,
                                        fontWeight: 'bold'
                                    }}>
                                    {stat.base_stat}
                                </Text>
                            </View>




                        ))
                    }
                </View>
            </View>

            {/* final sprite */}
            <View style={{
                marginBottom: 80,
                alignItems: 'center'
            }}>
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20
    },
    regularText: {
        fontSize: 17
    },
    basicSprite: {
        width: 100,
        height: 100
    }
});