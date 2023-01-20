import React from "react";
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthLoadingScreen extends React.Component {

    constructor() {
        super();
        this.checkToken();
    }

    checkToken = async () => {
        const token = await AsyncStorage.getItem("token");
        if(token) {
            this.props.navigation.navigate('DashBoardScreen');
        } else {
            this.props.navigation.navigate('LoginScreen');
        }
    }

    render() {
        return (
            <View style={styles.container}>
            <ActivityIndicator size={50}/>
            </View>
        )
    }
}

export default AuthLoadingScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    } 
})