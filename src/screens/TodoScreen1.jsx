import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TodoTask from '../TodoTask'
import TodoList from '../TodoList'

const TodoScreen1 = ({ navigation, tasks, addTask, editTask }) => {
    
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.background}>
                <Text style={styles.header}>Todo Task App</Text>
                <TodoTask addTask={addTask} />
                <Text style={styles.header}>Todo Informations</Text>
                <TodoList task={tasks} editTask={editTask} />

            </View>
        </View>

    )
}

export default TodoScreen1

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