import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const TodoList = ({ task, deleteTask, editTask }) => {
    const [editingIndex, setEditingIndex] = useState('');
    const [editingText, setEditingText] = useState('');
    const [editingStatus, setEditingStatus] = useState('');

    const handleDelete = (index) => {
        deleteTask(index);
    }

    const handleEdit = (index) => {
        setEditingIndex(index);
        setEditingText(task[index].text);
        setEditingStatus(task[index].status);
    }

    const handleSave = (index) => {
        editTask(index, editingText, editingStatus);
        setEditingIndex('');
    }

    return (
        <ScrollView>
            <View>
                {task.map((taskItem, index) => (
                    <View key={index} style={styles.container}>
                        {editingIndex === index ? (
                            <>
                                <TextInput placeholder='Enter text to edit' style={styles.taskInput} value={editingText} onChangeText={(text) => setEditingText(text)} />

                                {/* <Select value={editingStatus} onChange={(e) => setEditingStatus(e.target.value)}>
                                <Option value='' disabled>Select your status</Option>
                                <Option value='Completed'>Completed</Option>
                                <Option value='Pending'>Pending</Option>
                                <Option value='Error'>Error</Option>
                                <Option value='Probably'>Probably</Option>
                            </Select> */}
                                <Text style={styles.saveBtn} onPress={() => handleSave(index)} >Save</Text>
                            </>
                        ) : (
                            <>
                                <View><Text>{taskItem.text}</Text></View>
                                <View style={styles.right}>
                                    <Text>{taskItem.status}</Text>
                                    <Text style={styles.editbtn} onPress={() => handleEdit(index)}>Edit</Text>
                                    <Text style={styles.deletebtn} onPress={() => handleDelete(index)}>Delete</Text>
                                </View>
                            </>
                        )}
                    </View>
                ))}

            </View>
        </ScrollView>
    )
}

export default TodoList

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
        width: 280,
        backgroundColor: '#FEFBF6',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FEFBF6',
    },
    saveBtn: {
        color: 'green',
        fontWeight: 'bold',
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
    }
})