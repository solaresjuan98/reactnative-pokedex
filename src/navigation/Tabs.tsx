import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Navigator } from './Navigator';
import { Ionicons } from '@expo/vector-icons';
import { Tab2Component } from './Tab2Component';


const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            tabBarOptions={{
                activeTintColor: '#5856D6',
                labelStyle: {
                    marginBottom: (Platform.OS === 'ios') ? 0 : 10
                },
                style: {
                    //backgroundColor: '#C7D8D2',
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    borderWidth: 0,
                    elevation: 0,
                    height: (Platform.OS === 'ios' ? 90 : 60)
                }
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={Navigator}
                options={{
                    tabBarLabel: "List",
                    tabBarIcon: ({ color }) =>
                        (<Ionicons color={color} size={25} name="list-outline" />)
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={Tab2Component}
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color }) =>
                        (<Ionicons color={color} size={25} name="search-outline" />)
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({

});