import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import BottomTab from '../screens/BottomTab';

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Home" component={Home} options={{ title: 'Awesome app' }} />
                <Stack.Screen name="Tab" component={BottomTab} options={{ title: 'Awesome app' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
 
export default Navigation;