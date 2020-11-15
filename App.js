import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HomeScreen } from './HomeScreen';
import { WorkoutScreen } from './WorkoutScreen';
import { DietScreen } from './DietScreen';
import { ProgressScreen } from './ProgressScreen';
import { UsersScreen } from './UsersScreen';
import { WorkoutsScreen } from './WorkoutsScreen';
import { MealsScreen } from './MealsScreen';
import { SettingsScreen } from './SettingsScreen';
import { LogoutScreen } from './LogoutScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import MyTabs from './BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeStack = createStackNavigator();
const WorkoutStack = createStackNavigator();
const DietStack = createStackNavigator();
const ProgressStack = createStackNavigator();
const UsersStack = createStackNavigator();
const WorkoutsStack = createStackNavigator();
const MealsStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const LogoutStack = createStackNavigator();

const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

function WorkoutStackScreen() {
  return (
    <WorkoutStack.Navigator headerMode="none">
      <WorkoutStack.Screen name="Workout" component={WorkoutScreen} />
    </WorkoutStack.Navigator>
  );
}

function DietStackScreen() {
  return (
    <DietStack.Navigator headerMode="none">
      <DietStack.Screen name="Diet" component={DietScreen} />
    </DietStack.Navigator>
  );
}

function ProgressStackScreen() {
  return (
    <ProgressStack.Navigator headerMode="none">
      <ProgressStack.Screen name="Progress" component={ProgressScreen} />
    </ProgressStack.Navigator>
  );
}

function UsersStackScreen() {
  return (
    <UsersStack.Navigator headerMode="none">
      <UsersStack.Screen name="Users" component={UsersScreen} />
    </UsersStack.Navigator>
  );
}

function WorkoutsStackScreen() {
  return (
    <WorkoutsStack.Navigator headerMode="none">
      <WorkoutsStack.Screen name="Workouts" component={WorkoutsScreen} />
    </WorkoutsStack.Navigator>
  );
}

function MealsStackScreen() {
  return (
    <MealsStack.Navigator headerMode="none">
      <MealsStack.Screen name="Meals" component={MealsScreen} />
    </MealsStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator headerMode="none">
      <SettingsStack.Screen name="Setting" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

function LogoutStackScreen() {
  return (
    <LogoutStack.Navigator headerMode="none">
      <LogoutStack.Screen name="Logout" component={LogoutScreen} />
    </LogoutStack.Navigator>
  );
}

function TabsScreen () {
  return(
    <Tab.Navigator headerMode="none"
    initialRouteName="HomeStackScreen"
    tabBarOptions={{
      activeTintColor: '#e91e63',
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Workout"
      component={WorkoutStackScreen}
      options={{
        tabBarLabel: 'Workout',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="mars" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Diet"
      component={DietStackScreen}
      options={{
        tabBarLabel: 'Diet',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="heartbeat" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Progress"
      component={ProgressStackScreen}
      options={{
        tabBarLabel: 'Progress',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="tasks" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
  );

}


const Drawer = createDrawerNavigator();


export default function App() {

  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="Profile"> */}
      {/* <Drawer.Screen options={{ headerShown : false}}> */}
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={TabsScreen}  />
        <Drawer.Screen name="Users" component={UsersStackScreen} />
        <Drawer.Screen name="Meals" component={MealsStackScreen} />
        <Drawer.Screen name="Workouts" component={WorkoutsStackScreen} />
        <Drawer.Screen name="Settings" component={SettingsStackScreen} />
        <Drawer.Screen name="Log out" component={LogoutStackScreen} />
      </Drawer.Navigator>

    </NavigationContainer>

  );
  // <View style={styles.container}>
  //   <Text>Open up App.js to start working on your app!</Text>
  //   <StatusBar style="auto" />
  // </View>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
