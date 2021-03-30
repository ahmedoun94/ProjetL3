
import React, {Component, useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import {View, Text, StyleSheet, Dimensions,  } from 'react-native';
//import MapView from 'expo';
//import * as Permissions from 'expo-permissions';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
//import Geolocation from 'react-native-geolocation-service';


export default class Add extends Component{
  constructor(props) {
    super(props);
    this.state ={
      region : null,
      
    }
    this._getLocationAsync();
  }
  _getLocationAsync = async () => {
    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted')
      console.log('Permissions to access location was denied');
    let location = await Location.getCurrentPositionAsync({enabledHighAccuracy: true})

    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045
    }
    this.setState({region:region})
  }
  render (){
    return (
        <View style={styles.container}>
        <MapView
          initialRegion={this.state.region}
          showsUserLocation={true}
          style={{flex:1}}
        
        >
          
        </MapView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C3DDE6',
      //paddingTop: 45,
      
  
      
    },
})





/*import React, { Component } from 'react'
import { View, Text } from 'react-native'


export class Page extends Component {
    render() {
        return (
            <View>
                <Text>Feed</Text>
            </View>
        )
    }
}

export default Page*/