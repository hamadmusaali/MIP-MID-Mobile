import React from 'react';
import {Text, Button} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import GerenciamentoURs from './pages/GerenciamentoURs';
import GerenciamentoPesquisa from './pages/GerenciamentoPesquisa';

import AnotacoesDeCampo from './pages/AnotacoesDeCampo';

import MonitoramentoFerrugem from './pages/MonitoramentoFerrugem';

import Pulverizacao from './pages/Pulverizacao';
import OperacaoPulverizacao from './pages/Pulverizacao/OperacaoPulverizacao';
import NovaOperacaoPulverizacao from './pages/Pulverizacao/NovaOperacaoPulverizacao';

const Drawer = createDrawerNavigator();
const AppStack = createStackNavigator();

/*Menu Lateral*/
export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StackHome} />
        <Drawer.Screen name="Gerenciamento URs" component={StackGerenciamentoURs} />
        <Drawer.Screen name="Gerenciamento Pesquisa" component={StackGerenciamentoPesquisa} />
        <Drawer.Screen name="Anotações De Campo" component={StackAnotacoesDeCampo} />
        <Drawer.Screen name="Monitoramento Ferrugem" component={StackMonitoramentoFerrugem} />
        <Drawer.Screen name="Pulverização" component={StackPulverizacao} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

/*Stack para cada navegação*/
//View da Home
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

//View da GerenciamentoURs
function StackGerenciamentoURs({ navigation }) {
  return (
    <AppStack.Navigator>
        <AppStack.Screen name="Gerenciamento URs" component = {GerenciamentoURs} 
          options={{
            headerLeft: () => (
              <Text onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>Menu</Text>)
          }}
        />
    </AppStack.Navigator>
  );
}

//View da GerenciamentoPesquisa
function StackGerenciamentoPesquisa({ navigation }) {
  return (
    <AppStack.Navigator>
        <AppStack.Screen name="Gerenciamento Pesquisa" component = {GerenciamentoPesquisa} 
          options={{
            headerLeft: () => (
              <Text onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>Menu</Text>)
          }}
        />
    </AppStack.Navigator>
  );
}

//View da Anotações de Campo
function StackAnotacoesDeCampo({ navigation }) {
  return (
    <AppStack.Navigator>
        <AppStack.Screen name="Anotações De Campo" component = {AnotacoesDeCampo} 
          options={{
            headerLeft: () => (
              <Text onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>Menu</Text>)
          }}
        />
    </AppStack.Navigator>
  );
}

//View do Monitoramento Ferrugem
function StackMonitoramentoFerrugem({ navigation }) {
  return (
    <AppStack.Navigator>
        <AppStack.Screen name="Monitoramento Ferrugem" component = {MonitoramentoFerrugem} 
          options={{
            headerLeft: () => (
              <Text onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>Menu</Text>)
          }}
        />
    </AppStack.Navigator>
  );
}

//View da Pulverização
function StackPulverizacao({ navigation }) {
    return (
      <AppStack.Navigator>
          <AppStack.Screen name="Pulverização" component = {Pulverizacao} 
            options={{
              headerLeft: () => (
                <Text onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>Menu</Text>)
            }}
          />
          <AppStack.Screen name="OperacaoPulverizacao" component = {OperacaoPulverizacao} />
          <AppStack.Screen name="NovaOperacaoPulverizacao" component = {NovaOperacaoPulverizacao} />
      </AppStack.Navigator>
    );
}

