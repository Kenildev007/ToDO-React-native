import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'pending', value: '1' },
    { label: 'Completed', value: '2' },
    { label: 'Error', value: '3' },
    { label: 'Probably', value: '4' },
];

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
        editTask(index, editingText, editingStatus || task[index].status);
        setEditingIndex('');
    }

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <ScrollView>
            <View>
                {task.map((taskItem, index) => (
                    <View key={index} style={styles.container}>
                        {editingIndex === index ? (
                            <>
                                <View style={styles.editBox }>
                                    <TextInput placeholder='Enter text to edit' style={styles.editInput} value={editingText} onChangeText={(text) => setEditingText(text)} />

                                    <Dropdown
                                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        data={data}
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={!isFocus ? 'Select item' : '...'}
                                        value={value}
                                        onFocus={() => setIsFocus(true)}
                                        onBlur={() => setIsFocus(false)}
                                        onChange={(task) => {
                                            setValue(task.value);
                                            setIsFocus(false);
                                            setEditingStatus(task.label);
                                        }}
                                    />
                                    <Text style={styles.saveBtn} onPress={() => handleSave(index)} >Save</Text>
                                </View>
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
    editInput: {
        width: 180,
        backgroundColor: '#FEFBF6',
        borderRadius: 10,
        marginRight: 5,
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
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    editBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        padding: 2,
        
    }

})