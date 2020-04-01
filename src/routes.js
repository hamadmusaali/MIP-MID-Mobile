import React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Pulverizacao from './pages/Pulverizacao';
import OperacaoPulverizacao from './pages/Pulverizacao/OperacaoPulverizacao';
import NovaOperacaoPulverizacao from './pages/Pulverizacao/NovaOperacaoPulverizacao';
import {Text, Button} from 'react-native';

const Drawer = createDrawerNavigator();
const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StackHome} />
        <Drawer.Screen name="Pulverização" component={StackPulverizacao} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function StackHome({ navigation }) {
  return (
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component = {Home}
          options={{
            headerLeft: () => (
              <Text onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>Menu</Text>),
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />
    </AppStack.Navigator>
  );
}

function StackPulverizacao({ navigation }) {
    return (
      <AppStack.Navigator>
          <AppStack.Screen name="Pulverização" component = {Pulverizacao} 
            options={{
              headerLeft: () => (
                <Text onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>Menu</Text>),
              headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#fff"
                />
              ),
            }}
          />
          <AppStack.Screen name="OperacaoPulverizacao" component = {OperacaoPulverizacao} />
          <AppStack.Screen name="NovaOperacaoPulverizacao" component = {NovaOperacaoPulverizacao} />
      </AppStack.Navigator>
    );
}

