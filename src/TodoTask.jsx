import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const TodoTask = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');

    const handeInputChange = (text) => {
        setTaskText(text);
    };

    const handleAddTask = () => {
        if(taskText.trim()) {
            addTask({ text: taskText, status: 'Pending' });
            setTaskText('');
        }
    };  

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.taskInput}
                placeholder='Enter your task here'
                value={taskText}
                onChangeText={handeInputChange}
                ></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text} onPress={handleAddTask}>Add Task</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TodoTask;

const styles = StyleSheet.create({
    taskInput: {
        width: 280,
        backgroundColor: '#FEFBF6',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FEFBF6',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'green',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})