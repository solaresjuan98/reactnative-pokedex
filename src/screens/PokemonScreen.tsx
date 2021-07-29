import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { RootStackParams } from '../navigation/Navigator';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { ActivityIndicator } from 'react-native';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }


export const PokemonScreen = ({ navigation, route }: Props) => {

    const { simplePokemon, color } = route.params;
    const { top } = useSafeAreaInsets();
    const { id, name, picture } = simplePokemon;

    const { isLoading, pokemon } = usePokemon(id);

    return (

        <View style={{ flex: 1 }}>

            {/*Header container*/}
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,
            }}>

                {/* back button */}
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    activeOpacity={0.8}
                    style={{
                        ...styles.backButton,
                        top: top + 10
                    }}
                >
                    <Ionicons
                        name="arrow-back-outline"
                        color="white"
                        size={40}
                    />
                </TouchableOpacity>

                {/* pokemon name */}
                <Text style={{
                    ...styles.pokemonName,
                    top: top + 50
                }}>
                    {name + '\n'}#{id}
                </Text>

                {/* white pokeball */}
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokeball}
                />

                <FadeInImage
                    uri={picture}
                    style={styles.pokemonImage}
                />


            </View>

            {/* details */}
            {
                isLoading ? (
                    <View style={{ ...styles.loadingIndicator }}>
                        <ActivityIndicator
                            color="blue"
                            size={50}
                        />
                    </View>) :
                    <PokemonDetails pokemon={pokemon} />

            }



        </View>

    );
}


const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
        //overflow: 'hidden'
    },
    backButton: {
        position: 'absolute',
        left: 20
    },
    pokemonName: {
        color: '#47504D',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
        fontWeight: 'bold'
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.6
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -20
    },
    loadingIndicator: {
        flex: 1,
        //backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    }
});