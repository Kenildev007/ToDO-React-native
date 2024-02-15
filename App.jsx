import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoScreen1 from './src/screens/TodoScreen1';
import TodoCompleted from './src/screens/TodoCompleted';

const Stack = createNativeStackNavigator();

const App = () => {
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
    };

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TodoScreen1">
                    {(props) => <TodoScreen1 {...props} tasks={tasks} addTask={addTask} deleteTask={deleteTask} editTask={editTask} />}
                </Stack.Screen>
                <Stack.Screen name="TodoCompleted">
                    {(props) => <TodoCompleted {...props} completedTasks={completedTasks} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
  