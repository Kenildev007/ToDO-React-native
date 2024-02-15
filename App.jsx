import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title='Go to Profile Page'
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}
function ProfileScreen({ navigation }) {
  return (
    <View>
      <Button
        title='Go to Dashboard Page'
        onPress={() => navigation.navigate('Dashboard')}
      />
      <Button
        title='Go back'
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
function DashboardScreen({ navigation }) {
  return (
    <View>
      <Text>This is the last page</Text>
      <Button
        title='Go back'
        onPress={() => navigation.goBack()}
      />
      <Button
        title='Go To Home Page'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Profile' component={ProfileScreen} />
        <Stack.Screen name='Dashboard' component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

