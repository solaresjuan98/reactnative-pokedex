import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Platform, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { StyleProp } from 'react-native';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
    onDebounce: (value: string) => void;
    style?: StyleProp<ViewStyle>;
}

export const SearchInput = ({ style, onDebounce }: Props) => {

    const [textValue, setTextValue] = useState('');
    //console.log(textValue);

    const { debouncedValue } = useDebouncedValue(textValue, 1500);


    useEffect(() => {
        console.log({ debouncedValue });
        onDebounce(debouncedValue);
    }, [debouncedValue])

    return (
        <View style={{ ...styles.container, ...style as any }}>

            <View style={styles.textBackground}>
                <TextInput
                    placeholder="Search Pokemon"
                    style={{
                        ...styles.textInput,
                        top: (Platform.OS === 'ios') ? 0 : 2
                    }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />

                <Ionicons
                    name="search-outline"
                    color="blue"
                    size={30}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: '#ccc'
    },
    textBackground: {
        backgroundColor: '#f3f1f3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18
    }

});