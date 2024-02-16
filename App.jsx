import 'react-native-gesture-handler';
import { View, Text, Button } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TodoCompleted from './src/screens/TodoCompleted';
import TodoScreen1 from './src/screens/TodoScreen1';



const Drawer = createDrawerNavigator();

function DrawerA() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Drawer A</Text>
    </View>
  );
}
function DrawerB() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Drawer B</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
function TabA() {
  return (
    <View>
      <Text>Tab A</Text>
    </View>
  );
}
function TabB() {
  return (
    <View style={{flex : 1,alignItems:'center',justifyContent: 'center'}}>
      <Text style={{fontSize:28,fontWeight:'bold'}}>@</Text>
    </View>
  );
}

function Drawernav() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index, isCompleted) => {
    if (isCompleted) {
      const updatedCompletedTasks = [...completedTasks];
      updatedCompletedTasks.splice(index, 1);
      setCompletedTasks(updatedCompletedTasks);
    } else {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    }
  };

  const editTask = (index, newText, newStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { ...updatedTasks[index], text: newText, status: newStatus };
    setTasks(updatedTasks);

    if (newStatus === 'Completed') {
      setCompletedTasks([...completedTasks, updatedTasks[index]]);
      deleteTask(index);
    }
  }
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" >
      {(props) => <TodoScreen1 {...props} tasks={tasks} addTask={addTask} editTask={editTask} />}
      </Drawer.Screen>
      <Drawer.Screen name="Completed Task" >
      {(props) => <TabNav {...props} completedTasks={completedTasks} deleteTask={deleteTask} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  )
}

function StackA({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Stack A</Text>
      <Button title="Go to B" onPress={()=> navigation.navigate('StackB')} ></Button>
    </View>
  );
}
function StackB({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Stack B</Text>
      <Button title="Go to A" onPress={()=> navigation.goBack()} ></Button>
    </View>
  );
}
const stack = createNativeStackNavigator();
function StackNav() {
  return (
    <stack.Navigator>
      <stack.Screen name="StackA" component={StackA} />
      <stack.Screen name="StackB" component={StackB} />
    </stack.Navigator>
  )
}

function TabNav({ completedTasks, deleteTask }){
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='A' >
      {(props) => <TodoCompleted {...props} completedTasks={completedTasks} deleteTask={deleteTask} />}
      </Tab.Screen>
      <Tab.Screen name='B' >
      {(props) => <StackNav />}
      
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default App = () => {
  return (
    <NavigationContainer>
    <Drawernav />
    </NavigationContainer>
  )
}