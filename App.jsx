import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoScreen1 from './src/screens/TodoScreen1';
import TodoCompleted from './src/screens/TodoCompleted';

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.todoscreen}>
        <TodoScreen1 />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text} onPress={() => navigation.navigate('Completed')}>Completed </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
function ProfileScreen({ navigation }) {
  const tasks = [];
  return (

    <ScrollView>
      <View style={styles.todoscreen}>
        <TodoCompleted tasks={tasks} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text} onPress={() => navigation.goBack()}>GO Back</Text>
      </TouchableOpacity>

      
    </ScrollView>
    
  );
}

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name='Home'  component={HomeScreen}>
          {/* {()=> (<TodoScreen1/>)} */}
        </Stack.Screen>
        <Stack.Screen name='Completed' component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  todoscreen: {
    height: 560,
  },
  button: {
    backgroundColor: 'lightgreen',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
