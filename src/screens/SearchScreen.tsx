import React, { useEffect, useState } from 'react';
import { Text, View, Platform, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { styles as globalStyles } from '../theme/appTheme';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    const [filteredPokemons, setFilteredPokemons] = useState<SimplePokemon[]>([])

    const [term, setTerm] = useState('');


    useEffect(() => {

        if (term.length === 0) {
            return setFilteredPokemons([]);
        }

        if (isNaN(Number(term))) {
            setFilteredPokemons(
                simplePokemonList.filter(
                    (pokemon) => pokemon.name.
                        toLocaleLowerCase().includes(term.toLocaleLowerCase())
                )
            );
        } else {

            const pokemonById = simplePokemonList.find((pokemon) => pokemon.id === term);

            setFilteredPokemons(
                (pokemonById) ? [pokemonById] : []
            )
        }



    }, [term])


    if (isFetching) {

        return (
            <Loading />
        )

    }


    return (
        <View style={{
            flex: 1,
            //marginTop: (Platform.OS === 'ios') ? top : top + 15,
            marginHorizontal: 20
        }}>
            {/* <Text>Search Screen</Text> */}

            <SearchInput
                onDebounce={(value) => setTerm(value)}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: (Platform.OS === 'ios') ? top : top + 15,
                }}
            />
            <FlatList
                data={filteredPokemons}
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}

                // Header
                ListHeaderComponent={(
                    <Text style={{
                        ...globalStyles.title,
                        ...globalStyles.globalMargin,
                        paddingBottom: 10,
                        marginTop: (Platform.OS === 'ios') ? top + 60 : top + 80
                    }}>
                        {term}
                    </Text>
                )}

                renderItem={({ item }) => <PokemonCard pokemon={item} />}

            />
        </View>
    );
}


