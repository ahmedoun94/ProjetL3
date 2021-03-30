import React, {Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,TextInput,KeyboardAvoidingView, ScrollView} from 'react-native';
import {Ionicons, Entypo} from '@expo/vector-icons';

export default class Password extends Component {
    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behaviour='position' keyboardVerticalOffset={-100} >
              <ScrollView style={{flex:0, width:'100%', height:100}} >
                <TouchableOpacity onPress ={() =>this.props.navigation.navigate("Login")}>
                    <Ionicons name="arrow-back-circle-sharp" size={40} color='#06394B' />
                </TouchableOpacity>
                <View style={{alignItems:'center', }}>
                    <Ionicons name="ios-car" size={100} color="#06394B"  />
                </View>
                <Text style={{color:'#06394B', textAlign:'center', padding:6, fontSize:20, paddingTop:20}}> Vous avez votre mot de passe? </Text>
                <Text style={{color:'#06394B', textAlign:'center', padding:6, fontSize:20, paddingBottom:30}}> Réinitialisez-le</Text>
                <View>   
                    <Entypo name="email" size={24} color='#06394B' style={styles.inputIcon} />
                    <TextInput style={styles.input}
                    placeholderTextColor= '#06394B'
                    placeholder="Votre adresse email"
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color:'#06394B',fontSize: 25}}>Envoyez le lien</Text>
                </TouchableOpacity>
              </ScrollView>
            </KeyboardAvoidingView>
        )
        
    }

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C3DDE6',
      paddingTop: 45,
      alignSelf:'auto'
      
  
      
    },
    header: {
      fontSize: 25,
      color: '#06394B',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: 10,
      margin: 20,
  
    },
    button:{
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#06394B',
      shadowRadius: 5,
      
      shadowColor: 'black',
      shadowOpacity: 0.8,
      width: 180,
      height:40,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 130,
      margin: 20,
      backgroundColor: '#ABD7E6',
      elevation: 10
  
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
      marginLeft: 70,
      elevation: 20
  
  
  
    },
    inputIcon:{
      position: 'absolute',
      top:10,
      left: 37,
      
  
    }
  });