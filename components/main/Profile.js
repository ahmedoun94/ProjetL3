//import firebase from 'firebase'
//import firebase from 'firebase'
import firebase from 'firebase/app';
import 'firebase/firestore';
import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const onLogout = () => {
    firebase.auth().signOut();
    
}

export class Profile extends Component {
    render() {
        return (
            <View style={styles.container}><Text>Page mon Espace</Text>
                <Button 
                title="Logout" 
                onPress={() => onLogout()}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
        container: {
      paddingTop: 145,
      flex: 1,
      backgroundColor: '#C3DDE6',
    }})

export default Profile




