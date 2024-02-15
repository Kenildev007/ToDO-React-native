import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


function HomeScreen() {
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    )
}
function SettingsScreen() {
    return (
        <View>
            <Text>SettingsScreen</Text>
        </View>
    )
}


const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default BottomTab

const styles = StyleSheet.create({})