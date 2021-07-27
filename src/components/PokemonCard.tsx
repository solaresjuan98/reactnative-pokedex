import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import ImageColors from 'react-native-image-colors'
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {

    const [bgColor, setBgColor] = useState('#ccc');

    // useEffect(() => {
    //     ImageColors.getColors(pokemon.picture, { fallback: '#ccc' })
    //         .then(colors => {

    //             (colors.platform === 'android')
    //                 ? setBgColor(colors.dominant || '#ccc') 
    //                 : setBgColor(colors.background || '#ccc')

    //             console.log(bgColor);
    //             // if (colors.platform === 'android') {
    //             //     setBgColor(colors.dominant || '#ccc');
    //             // } else {
    //             //     setBgColor(colors.background || '#ccc')
    //             // }

    //         })
    //     // IOS background
    //     // Android dominant
    // }, [])

    return (
        <TouchableOpacity
            activeOpacity={0.9}
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
                backgroundColor: bgColor
            }}>

                {/* pokemon name and ID*/}
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>

                {/* pokeball */}
                <View style={styles.pokeballContainer}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokeball}
                    />
                </View>



                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        //backgroundColor: '#ccc',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    name: {
        color: '#47504D',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokeballContainer: {
        //backgroundColor: 'blue',
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.5,
        overflow: 'hidden'
    },
    pokeball: {
        width: 100,
        height: 100,
        right: -20,
        bottom: -20

    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5
    }
});

