// App.js

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TodoTask from './TodoTask';
import TodoList from './TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, editTask } from './redux/mainReducer'; // Import actions

const App = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const handleAddTask = (task) => {
        dispatch(addTask(task));
    };

    const handleDeleteTask = (index) => {
        dispatch(deleteTask(index));
    };

    const handleEditTask = (index, newText, newStatus) => {
        dispatch(editTask(index, newText, newStatus));
    };

    return (
        <View style={styles.background}>
            <Text style={styles.header}>Todo Task App</Text>
            <TodoTask addTask={handleAddTask} />
            <Text style={styles.header}>Todo Informations</Text>
            <TodoList tasks={tasks} deleteTask={handleDeleteTask} editTask={handleEditTask} />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#333333',
    },
    background: {
        flex: 1,
        backgroundColor: '#C9D7DD',
    },
});
