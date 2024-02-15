import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TodoTask from '../TodoTask'
import TodoList from '../TodoList'

const Home = ({navigation}) => {
    const [tasks, setTasks] = useState([]);

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
    };


    return (
        <View style={styles.background}>
            <Button
                title="Go tab"
                onPress={() => {
                    // Navigate using the `navigation` prop that you received
                    navigation.navigate('Tab');
                }}
            />
            <Text style={styles.header}>Todo Task Home</Text>
            <TodoTask addTask={addTask} />
            <Text style={styles.header}>Todo Informations</Text>
            <TodoList task={tasks} deleteTask={deleteTask} editTask={editTask} />
        </View>
    )
}

export default Home

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
    }
})