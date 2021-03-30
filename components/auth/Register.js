import React, { Component } from 'react'
import { Text, TouchableOpacity, ScrollView, KeyboardAvoidingView,StyleSheet,TextInput, View, Button  } from 'react-native'
import { Ionicons, FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';

//import firebase from 'firebase'
import firebase from 'firebase/app';
import 'firebase/firestore';

export class Register extends Component {
    constructor(props){
        super(props)

        this.state = {
            lastName: '',
            firstName: '',
            birthDay: '',
            phone_number:'',
            adress: '',
            email: '',
            password: '',
        }

        this.onSignUp= this.onSignUp.bind(this)
    }
    onSignUp(){
        const { firstName, birthDay, adress ,email, password, lastName, phone_number} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        lastName,
                        firstName,
                        birthDay,
                        phone_number,
                        adress,
                        email,
                        password
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
        
    }
    render() {
        return(
            <KeyboardAvoidingView style={styles.container} behaviour='position' keyboardVerticalOffset={-100} >
            <ScrollView style={{flex:0, width:'100%', height:100}} >
                <TouchableOpacity onPress ={() =>this.props.navigation.navigate("Login")}>
                <Ionicons name="arrow-back-circle-sharp" size={40} color='#06394B' />
                </TouchableOpacity>
                <Text style={{color:'#06394B', textAlign:'center', padding:6, fontSize:20, paddingTop:20}}> Vous n'avez pas de compte?</Text>
                <Text style={{color:'#06394B', textAlign:'center', padding:6, fontSize:20,paddingBottom:30}}> Inscrivez-vous!</Text>
                <View>
                <Ionicons name="person-circle" size={30} color='#06394B' style={styles.inputIcon} />
                    <TextInput style={styles.input}
                    placeholderTextColor= '#06394B'
                    placeholder="Nom"
                    onChangeText={(lastName) =>  this.setState({ lastName })}
                    />
                </View>
                <View >
                <Ionicons name="person-circle" size={30} color='#06394B' style={styles.inputIcon} />
                    <TextInput style={styles.input}
                    placeholderTextColor= '#06394B'
                    placeholder="Prénom"
                    onChangeText={(firstName) =>  this.setState({ firstName })}
                    />
                </View>
                <View>
                <MaterialIcons name="cake" size={30} color='#06394B' style={styles.inputIcon} />
                    <TextInput style={styles.input}
                    placeholderTextColor= '#06394B'
                    placeholder="Date de naissance"
                    onChangeText={(birthDay) =>  this.setState({ birthDay })}
                    />
                </View>
                <View>
                <Ionicons name="call" size={24} color='#06394B' style={styles.inputIcon} />
                    <TextInput style={styles.input}
                    placeholderTextColor= '#06394B'
                    placeholder="Numéro de portable"
                    onChangeText={(phone_number) =>  this.setState({ phone_number })}
                    />
                </View>
                <View>
                <FontAwesome name="home" size={24} color='#06394B' style={styles.inputIcon} />
                    <TextInput style={styles.input}
                    placeholderTextColor= '#06394B'
                    placeholder="Adresse"
                    onChangeText={(adress) =>  this.setState({ adress })}
                    />
                </View>
                <View>
                <Entypo name="email" size={24} color='#06394B' style={styles.inputIcon} />
                    <TextInput style={styles.input}
                    placeholderTextColor= '#06394B'
                    placeholder="Adresse email"
                    onChangeText={(email) =>  this.setState({ email})}
                    />
                </View>
                
                <View>
                <Ionicons name="lock-closed-sharp" size={24} color='#06394B' style={styles.inputIcon} />
                    <TextInput style={styles.input}
                    secureTextEntry
                    placeholderTextColor= '#06394B'
                    placeholder="Mot de passe"
                    onChangeText={(password) =>  this.setState({ password })}
                    />
                </View>
                <View>
                <Ionicons name="lock-closed-sharp" size={24} color='#06394B' style={styles.inputIcon} />
                    <TextInput style={styles.input}
                    secureTextEntry
                    placeholderTextColor= '#06394B'
                    placeholder="Confirmez Le Mot de passe"
                    onChangeText={(confirmPassword) =>  this.setState({ confirmPassword })}
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text onPress={ () => this.onSignUp()} style={{color:'#06394B',fontSize: 25}}>INSCRIPTION</Text>
                </TouchableOpacity>
            </ScrollView>
            </KeyboardAvoidingView>
            );
        /*return (
            <View>
                 <TextInput
                     placeholder="name"
                     onChangeText={(name) =>  this.setState({ name })}
                 />
                 <TextInput
                     placeholder="email"
                     onChangeText={(email) =>  this.setState({ email })}
                 />
                 <TextInput
                     placeholder="phone_number"
                     onChangeText={(phone_number) =>  this.setState({ phone_number })}
                 />
                  <TextInput
                     placeholder="password"
                     secureTextEntry={true}
                     onChangeText={(password) =>  this.setState({ password })}
                 />
                 <Button
                    onPress={ () => this.onSignUp()}
                    title="Sign Up"
                 />
            </View>
        )*/
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C3DDE6',
      paddingTop: 45,
      
  
      
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
      marginLeft: 160,
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
      marginLeft: 90,
      elevation: 10
      
  
  
  
    },
    inputIcon:{
      position: 'absolute',
      top:10,
      left: 50,
      
  
    }
  });

export default Register
