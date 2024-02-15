import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import TodoCompleted from './src/screens/TodoCompleted';
import TodoScreen1 from './src/screens/TodoScreen1';

const Tab = createBottomTabNavigator();


function HomeScreen() {
  return (
    <View>

    </View>
  )
}
function SettingScreen() {
  return (
    <View>
      <TodoCompleted />
    </View>
  )
}
export default App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTask = [...tasks];
    updatedTask.splice(index, 1);
    setTasks(updatedTask);
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
      <Tab.Navigator>
        <Tab.Screen name="Home" options={{ title: "Todo App" }} >
          {(props) => <TodoScreen1 {...props} tasks={tasks} addTask={addTask} deleteTask={deleteTask} editTask={editTask} />}
        </Tab.Screen>
        <Tab.Screen name="Completed"  options={{ title: "Completed" }} >
          {(props) => <TodoCompleted {...props} completedTasks={completedTasks} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
