import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TodoScreen1 from './src/screens/TodoScreen1';
import TodoCompleted from './src/screens/TodoCompleted';

function Feed() {
  return (
    <View>
      <Text></Text>
    </View>
  );
}

function Article() {
  return (
    <View>
      <Text></Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index, isCompleted) => {
    if (isCompleted) {
      const updatedCompletedTasks = [...completedTasks];
      updatedCompletedTasks.splice(index, 1);
      setCompletedTasks(updatedCompletedTasks);
    } else {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    }
  };

  const editTask = (index, newText, newStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], text: newText, status: newStatus };
    setTasks(updatedTasks);

    if (newStatus === 'Completed') {
      setCompletedTasks([...completedTasks, updatedTasks[index]]);
      deleteTask(index);
    }
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="Home" >
          {(props) => <TodoScreen1 {...props} tasks={tasks} addTask={addTask} editTask={editTask} />}
        </Drawer.Screen>
        <Drawer.Screen name="Completed" >
          {(props) => <TodoCompleted {...props} completedTasks={completedTasks} deleteTask={deleteTask} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


