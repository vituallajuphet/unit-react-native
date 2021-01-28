import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
 
import { appTitle } from '../../lib/utils'


const SplashScreen = () => {

    useEffect(() => {
        return
    }, [])


    return (
    <>
        <View style={styles.splashScreen}>
            <View>
                <Text style={styles.splashText}>{appTitle}</Text>
                <Text style={styles.devHeading}>Developed By:</Text>
                <Text style= {styles.developText}>Jervoso, Francis Jude A.</Text>
                <Text style= {styles.developText}>Delagente, Wonder Monick S.</Text>
                <Text style= {styles.developText}>Jervoso, Francis Jude A.</Text>
            </View>
        </View>
    </>
    );
};

const styles = StyleSheet.create({
    splashScreen: {
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor:'yellow',
        color:'white',
        flex:6
    },
    devHeading:{
        textAlign:'center',
        fontSize:20,
        marginTop:40,
        marginBottom:10,
    },
    developText:{
        fontSize:17,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:5
    },
    splashText:{
        fontSize: 35,
        color:'#333',
        fontWeight:'bold',
        textAlign:'center'
    }
});

export default SplashScreen;
