import React from 'react';
import { Button, Text, View, Platform, SafeAreaView, StatusBar} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

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

function CustomDrawerContent(props) {
  return (  
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
      <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontWeight: 'bold', fontSize: 18 }}>MIP/MID</Text>
      </View>
      <DrawerItemList {...props} 
      activeTintColor='white'
      activeBackgroundColor='navy'
      inactiveTintColor='navy'
      />
      <DrawerItem
        label="Teste"
        onPress={() => {}}
      />
      </SafeAreaView>
    </DrawerContentScrollView>
    
  );
}

/*Menu Lateral*/
export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerStyle={{
          backgroundColor: 'white',
          width: 240,
        }}>
        <Drawer.Screen name="Home" component={StackHome}
          options={{
            drawerIcon: (({focused, color, size }) => <MaterialIcons name="home" size={20} color={focused ? 'white' : 'navy'} />)
          }}
        />
        <Drawer.Screen name="Gerenciamento URs" component={StackGerenciamentoURs}
          options={{
            drawerIcon: (({focused, color, size }) => <MaterialIcons name="people" size={21} color={focused ? 'white' : 'navy'} />)
          }}
        />
        <Drawer.Screen name="Gerenciamento Pesquisa" component={StackGerenciamentoPesquisa}
          options={{
            drawerIcon: (({focused, color, size }) => <MaterialIcons name="book" size={21} color={focused ? 'white' : 'navy'} />)
          }}
        />
        <Drawer.Screen name="Anotações De Campo" component={StackAnotacoesDeCampo}
          options={{
            drawerIcon: (({focused, color, size }) => <MaterialIcons name="bug-report" size={21} color={focused ? 'white' : 'navy'} />)
          }}
        />
        <Drawer.Screen name="Monitoramento Ferrugem" component={StackMonitoramentoFerrugem}
          options={{
            drawerIcon: (({focused, color, size }) => <FontAwesome name="leaf" size={20} color={focused ? 'white' : 'navy'} />)
          }}
        />
        <Drawer.Screen name="Pulverização" component={StackPulverizacao}
          options={{
            drawerIcon: (({focused, color, size }) => <MaterialIcons name="filter-vintage" size={21} color={focused ? 'white' : 'navy'} />)
          }}
        />
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

