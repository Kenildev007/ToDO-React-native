import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTaskStatus, setEditIndex, editTask, clearEditIndex, updateTaskText } from './redux/mainReducer'; // Import the new actions
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'pending', value: 'Pending' },
    { label: 'Completed', value: 'Completed' },
    { label: 'Error', value: 'Error' },
    { label: 'Probably', value: 'Probably' },
];

const TodoList = () => {
    const tasks = useSelector(state => state.tasks);
    const editIndex = useSelector(state => state.editIndex);
    const dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch(deleteTask(index));
    }

    const handleEdit = (index) => {
        dispatch(setEditIndex(index)); // Set the edit index when "Edit" is clicked
    }

    const handleSave = (index, newText, newStatus) => {
        dispatch(editTask(index, newText, newStatus)); // Save the edited task
        dispatch(clearEditIndex()); // Clear the edit index to exit edit mode
    }

    const handleEditChange = (index, text) => {
        // Dispatch an action to update the text in Redux state
        dispatch(updateTaskText(text));
    }
    

    const handleStatusChange = (index, newStatus) => {
        dispatch(updateTaskStatus(index, newStatus));
    }

    return (
        <ScrollView>
            <View>
                {tasks.map((taskItem, index) => (
                    <View key={index} style={styles.container}>
                        <Text>{taskItem.text}</Text>
                        <View style={styles.right}>
                            <Text>{taskItem.status}</Text>
                            {editIndex === index ? (
                                <>
                                    <Dropdown
                                        style={styles.dropdown}
                                        data={data}
                                        value={taskItem.status}
                                        labelField="label"
                                        valueField="value"
                                        onChange={(selectedItem) => handleStatusChange(index, selectedItem.value)}
                                    />
                                    <Text style={styles.savebtn} onPress={() => handleSave(index, taskItem.text, taskItem.status)}>Save</Text>
                                </>
                            ) : (
                                
                                <Text style={styles.editbtn} onPress={() => handleEdit(index)}>Edit</Text>
                            )}
                            <Text style={styles.deletebtn} onPress={() => handleDelete(index)}>Delete</Text>
                        </View>
                    </View> 
                ))}
            </View>
        </ScrollView>
    );
};

export default TodoList;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#F0F3FF',
    },
    taskInput: {
        flex: 1,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FEFBF6',
    },
    right: {
        flexDirection: 'row',
        gap: 8,
    },
    deletebtn: {
        color: 'red',
        fontWeight: 'bold',
    },
    editbtn: {
        color: 'blue',
        fontWeight: 'bold',
    },
    dropdown: {
        height: 40,
        width: 120,
        borderColor: 'gray',
        borderWidth: 0.5,
        marginRight: 5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    savebtn: {
        color: 'green',
        fontWeight: 'bold',
    },
});
