import React from "react";
import { View, Text , StyleSheet, TouchableOpacity, Button} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

class DashBoardScreen extends React.Component {

    doLogout() {
        AsyncStorage.removeItem("token")
        .then( 
            res => {
                this.props.navigation.navigate('LoginScreen')

            }
        )
    }

    render() {
        return (
            <View style={styles.container}>
             <View style={styles.dashboardWrapper}>
                <Text style={styles.userText}>Hey User</Text>
                <View>
                <Text style={styles.inputText}>Login Screen Authentication</Text>
                <Text style={styles.inputText}>By using Axios and AsyncStorage</Text>
                </View>
                <View style={styles.button}>
            <Button
              title="Go to Details"
              onPress={() => {
               this.props.navigation.navigate('DetailScreen', {
                  FirstName: 'ReactNative',
                  LastName: 'Application'
                });
              }}
            />
          </View>

          <Button
              title="Settingscreen"
              onPress={() => {
               this.props.navigation.navigate('SettingScreen')}}
            />
                <TouchableOpacity 
                style={styles.logoutBtn}
                activeOpacity ={0.8}
                onPress={()=>  this.doLogout()}>
                    <Text style={styles.logoutBtnText}>Logout</Text>
                </TouchableOpacity>
             </View>
            </View>
        )
    }
}

export default DashBoardScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dashboardWrapper:{ },
    userText:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom:10,
        alignSelf: 'center'
    },
    inputText:{
        marginBottom:10
    },
    logoutBtn:{
        backgroundColor: 'red',
        paddingVertical: 8,
        width: 100,
        alignSelf: 'center',
        marginTop: 20
    },
    logoutBtnText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    button:{
        marginTop: 10,
        marginBottom: 10
    }  
})