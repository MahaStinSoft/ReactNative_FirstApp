import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";
 
const DetailScreen = ({route,navigation}) => {

    const { FirstName, LastName } = route.params;

    return(
        <View style={styles.container}>
            <Text>
                DetailsScreen
            </Text>

            <Text>FirstName: {JSON.stringify(FirstName)}</Text>
      <Text>LastName: {JSON.stringify(LastName)}</Text>
      <View style={styles.btn}>
      <Button  title="Back" onPress={() => navigation. goBack() }/>
      </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
            flex: 1,
           alignItems: 'center',
            justifyContent: 'center',
          
    },
    btn:{
        marginTop: 20
    }
})

export default DetailScreen