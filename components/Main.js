import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MatierialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/index'

import HomeScreen from './main/Home'
import ProfileScreen from './main/Profile'
import AddScreen from './main/Add'


const Tab = createBottomTabNavigator();

export class Main extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
        return (
            <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
            tabBarIcon: ({ color, size }) =>  (
                <MatierialCommunityIcons name="home" color={color} size={26}/>
            )
        }}/>
        <Tab.Screen name="Add" component={AddScreen} 
        options={{
            tabBarIcon: ({ color, size }) =>  (
                <MatierialCommunityIcons name="plus-box" color={color} size={26}/>
            )
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} 
        options={{
            tabBarIcon: ({ color, size }) =>  (
                <MatierialCommunityIcons name="account-circle" color={color} size={26}/>
            )
        }}/>
            </Tab.Navigator>
        )
    }
}
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);
export default connect(mapStateToProps, mapDispatchProps)(Main);
