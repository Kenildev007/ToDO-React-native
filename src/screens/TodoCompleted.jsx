import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodoCompleted = ({tasks}) => {
    const completedTasks = tasks.filter(x => x.status === "Completed");

    return (
        <View style={styles.background}>
            <Text style={styles.header}>Completed Tasks</Text>
            {completedTasks.map((elem,index) => (
                <View key={index}>
                    <Text>{elem.text}</Text>
                </View>
            ))}
        </View>
    )
}

export default TodoCompleted;

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
