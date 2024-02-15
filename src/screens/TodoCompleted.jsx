import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodoCompleted = ({ navigation, completedTasks }) => {


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.background}>
                <Text style={styles.header}>Completed Tasks</Text>

                <ScrollView>
                    {completedTasks.map((elem, index) => (
                        <View style={styles.completedText} key={index}>
                            <Text style={styles.completeColor}>{elem.text}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>

    )
}

export default TodoCompleted;

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        width: 380,
        textAlign: 'center',
        margin: 10,
        color: '#333333',
    },
    background: {
        flex: 1,
        backgroundColor: '#C9D7DD',
    },
    completedText: {
        flexDirection: 'row',
        backgroundColor: 'green',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#F0F3FF',
    },
    completeColor: {
        color: 'white',
    }
})
