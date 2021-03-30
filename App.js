import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {View, Text} from 'react-native';


import * as firebase from 'firebase'


import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3Tl_0GTnh5AfYr-bSsRZ7iPW5ML2QImU",
  authDomain: "test-b67df.firebaseapp.com",
  projectId: "test-b67df",
  storageBucket: "test-b67df.appspot.com",
  messagingSenderId: "76388343424",
  appId: "1:76388343424:web:3d62ee4433dceacebc9065",
  measurementId: "G-73WWW8F6Z3"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'
import MainScreen from './components/Main'
import PasswordScreen from './components/auth/Password'

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      loaded: false,
    }
  }
    componentDidMount(){
      firebase.auth().onAuthStateChanged((user) => {
        if(!user) {
          this.setState({
            loggedIn: false,
            loaded: true,
          })
        
      }else {
          this.setState({
            loggedIn: true,
            loaded: true,
        })
      }
    })
  }
  render() {
    const { loggedIn, loaded } =this.state;
    if(!loaded){
      return(
        <View style={{ flex : 1, justifyContent: 'center'}}>
          <Text>
          Loading
          </Text>
        </View>
      )
    }
    if(!loggedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen}
            options={{headerShown: false}}/>
             <Stack.Screen name="Register" component={RegisterScreen}
             options={{headerShown: false}}/>
             <Stack.Screen name="Password" component={PasswordScreen}
             options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return(
      <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Main ">
            <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App


