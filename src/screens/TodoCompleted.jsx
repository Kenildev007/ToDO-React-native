import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodoCompleted = ({ navigation, completedTasks }) => {


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.background}>
                <Text style={styles.header}>Completed Tasks</Text>
                {completedTasks.map((elem, index) => (
                    <View key={index}>
                        <Text>{elem.text}</Text>
                    </View>
                ))}
            </View>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
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
