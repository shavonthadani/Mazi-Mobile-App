import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import ProfileScreen from './ProfileScreen';
const MapScreen = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    );
};
//move this to another file later

const Tab = createBottomTabNavigator();

const MapWithTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Map') {
                            iconName = 'map';
                        } else if (route.name === 'Profile') {
                            iconName = 'user';
                        }

                        return <FontAwesome name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#70C582',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default MapWithTabs;
