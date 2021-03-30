import React, { Component } from 'react';
import { StyleSheet,TextInput, Text, View, Button,KeyboardAvoidingView,ScrollView,TouchableOpacity  } from 'react-native'
import { Ionicons, FontAwesome, AntDesign, Entypo} from '@expo/vector-icons';

//import firebase from 'firebase'
import firebase from 'firebase/app';
import 'firebase/firestore';

export class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }

        this.onSignUp= this.onSignUp.bind(this)
    }
    /*onSignUp(){
        const { email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }*/
    /*onSignUp(){
        const { email, password, name, phone_number} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email,
                        password,
                        phone_number
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }*/
    onSignUp= () =>{
            const { email, password} = this.state;
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .catch(error => this.setState({errorMessage: error.message}))
            };
    render() {
        return(
            <KeyboardAvoidingView style={styles.container} behaviour='position' keyboardVerticalOffset={-100} >
              <ScrollView style={{flex:0, width:'100%', height:100}} >
                <View style={{alignItems:'center', paddingTop:40}}>
                <Ionicons name="ios-car" size={150} color="#06394B"  />
                <Text style={{color:'#06394B', textAlign:'center', padding:6, fontSize:15}}> Move around the city with</Text>
                <Text style={{color:'#06394B', textAlign:'center',fontSize:30, fontWeight:'bold',paddingBottom:20 }}>UMove !</Text>
                <Text style={{color:'#06394B', textAlign:'center', padding:6, fontSize:20, paddingBottom:30 }}> Connectez vous à votre compte UMove</Text>
                </View>
                
                
                <View  >
                <Entypo name="email" size={24} color='#06394B' style={styles.inputIcon} />
                  <TextInput style={styles.input}
                  placeholderTextColor= '#06394B'
                  placeholder="Votre adresse email"
                  onChangeText={(email) =>  this.setState({ email })}
                  />
                </View>
                <View >
                <Ionicons name="lock-closed-sharp" size={24} color='#06394B' style={styles.inputIcon} />
                  <TextInput style={styles.input}
                  secureTextEntry
                  placeholderTextColor= '#06394B'
                  placeholder="Votre mot de passe"
                  onChangeText={(password) =>  this.setState({ password })}
                  />
                </View>
                <TouchableOpacity style={styles.button} onPress = {() =>this.onSignUp()}>
                  <Text style={{color:'#06394B',fontSize: 25}}>Connexion</Text>
                </TouchableOpacity>
                <View>
                  <TouchableOpacity onPress ={() =>this.props.navigation.navigate("Register")}>
                    <Text style={{textDecorationLine:'underline',color:'#06394B', textAlign:'center', padding:6, fontSize:15 }}>
                      Vous n'avez pas de compte? Inscrivez-vous
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress ={() =>this.props.navigation.navigate("Password")}>
                    <Text style={{textDecorationLine:'underline',color:'#06394B', textAlign:'center', fontSize:15}}>
                       Mot de passe oublié? Changez-le 
                    </Text>
                  </TouchableOpacity>
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>
          );
        /*return (
            <View>
                 <TextInput
                     placeholder="email"
                     onChangeText={(email) =>  this.setState({ email })}
                 />
                  <TextInput
                     placeholder="password"
                     secureTextEntry={true}
                     onChangeText={(password) =>  this.setState({ password })}
                 />
                 <Button
                    onPress={ () => this.onSignUp()}
                    title="Sign In"
                 />
            </View>
        )*/
    }
}

const styles = StyleSheet.create({
    container: {

      flex: 1,
      backgroundColor: '#C3DDE6',
      paddingTop: 5,
    },
    
    header: {

      fontSize: 25,
      color: '#06394B',
      alignItems: 'center',
      textAlign: 'center',
  
    },
    button:{
      
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#06394B',
      shadowRadius: 5,
      shadowColor: 'black',
      shadowOpacity: 0.8,
      width: 150,
      height:40,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 190,
      margin: 20,
      backgroundColor: '#ABD7E6',
      elevation:10
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
      marginLeft:95,
      elevation:20,
    },
    inputIcon:{

      position: 'absolute',
      top:10,
      left: 60,
    }
  });
  

export default Login
