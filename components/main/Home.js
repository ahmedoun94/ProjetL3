import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import  {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
//import  {GoogleAutocomplete} from 'react-native-google-autocomplete';
//import Placesearch from 'react-native-placesearch';
//import {API_KEY} from './key';

export default class Home extends Component{
  render (){
    return (
      <View style={styles.container}>
          <Text>page de recherche </Text> 
          <GooglePlacesAutocomplete 
            //placeholderTextColor= '#06394B'
            placeholder="Votre destination"
            minLength={2}
            autoFocus={false}
            returnKeyType={'default'}
            fetchDetails={true}
            onPress ={(data, details = null) => {
              console.log(data, details);
            }}

            //getDefaultValue={() => ''}
            query ={{
              key: 'AIzaSyC9Pnl5Qj9RzQ60Fh89xUM5EgCI28SuRPI',
              langage: 'en',
              types: 'cities'
            }}
        
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C3DDE6',
      paddingTop: 45,
      
    },
    input:{
      fontSize: 15,
      paddingLeft: 30,
      borderWidth: 1,
      borderRadius: 10,
      borderColor:'#06394B',
      backgroundColor: 'white',
      shadowRadius: 5,
      shadowOpacity: 10,
      shadowColor: 'black',
      padding: 6,
      margin: 5,
      width:250,
      marginLeft: 90,
      elevation: 10
  
    },
})
