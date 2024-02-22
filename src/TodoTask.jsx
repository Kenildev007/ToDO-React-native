import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from './redux/mainReducer';

const TodoTask = () => {
    const taskText = useSelector(state => state.taskText);
    const dispatch = useDispatch();

    const handeInputChange = (text) => {
        dispatch({ type: 'UPDATE_TASK_TEXT', payload: text });
    };

    const handleAddTask = () => {
        if(taskText.trim()) {
            dispatch(addTask({ text: taskText, status: 'Pending' }));
            dispatch({ type: 'UPDATE_TASK_TEXT', payload: '' });
        }
    };  

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.taskInput}
                placeholder='Enter your task here'
                value={taskText}
                onChangeText={handeInputChange}
            />
            <TouchableOpacity onPress={handleAddTask} style={styles.button}>
                <Text style={styles.text}>Add Task</Text>
            </TouchableOpacity>
        </View>
    );
};

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
});
