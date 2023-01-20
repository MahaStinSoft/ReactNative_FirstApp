import React from "react";
import { View, Text , StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import axios from 'react-native-axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

//import axios from 'axios';

class LoginScreen extends React.Component {

    state ={
        username: "",
        password: "",
        loading: false
    }

    onChangeHandle(state,value) {
        this.setState({
            [state] : value
        })
    }

    doLogin(){
        const { username, password } = this.state;
        if(username && password) {
            const req = {
                "email": username,
                "password": password
            }
            this.setState({
                loading: true
            })
            axios.post("https://reqres.in/api/login",req)
            .then(
                res => {
                    this.setState({
                        loading: false
                    })
                   // console.warn(res.data.token);
                   AsyncStorage.setItem("token", res.data.token)
                   .then(
                    res => {
                        this.props.navigation.navigate('DashBoardScreen');
                        alert("Login Successfull!");
                    }
                   )
                },
                err => {
                    this.setState({
                        loading: false
                    })
                    alert('Username or Password is Incorrect');
                }
            )
        } else {
               alert("Enter Username & Password");
        }
    } 

    render() {

        const { username, password, loading } = this.state;

        return (
            <View style={styles.container}>
             <View style={styles.formWrapper}>
                <Text style={styles.welcomeText}>Welcome </Text>
                <View style={styles.formRow}>
                    <TextInput 
                    style={styles.textInput}
                    value={username}
                    onChangeText={(value) => this.onChangeHandle('username', value)}
                    placeholder="Enter username"
                    placeholderTextColor="#333" />
                </View>
                <View style={styles.formRow}>
                    <TextInput 
                    style={styles.textInput}
                    value={password}
                    onChangeText={(value) => this.onChangeHandle('password', value)}
                    placeholder="Enter password"
                    placeholderTextColor="#333"
                    secureTextEntry />
                </View>
                <TouchableOpacity 
                activeOpacity ={0.8}
                style={{
                ...styles.signinBtn,
                backgroundColor: loading ? "#ddd" : "blue"
             }}
                //onPress={() => this.props.navigation.navigate('DashBoardScreen')}
                onPress={() => this.doLogin()}
                disabled={loading} >
                    <Text style={styles.signinText}>
                        {loading ? "Loading...": "SignIn" }
                    </Text>
                </TouchableOpacity>
             </View>
            </View>
        )
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formWrapper: {
        width: '80%'
    },
    formRow: {
        marginBottom: 10
    },
    textInput:{
        backgroundColor:"#ddd",
        height: 40,
        paddingHorizontal: 10,
        color: "#333"
    },
    welcomeText:{
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 27,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    signinBtn:{
     // backgroundColor: "blue",
        paddingVertical: 8,
    },
    signinText:{
        textAlign: "center",
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})