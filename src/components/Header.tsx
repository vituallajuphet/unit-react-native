import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
 
import { appTitle } from '../lib/utils'


const Header = () => {

    return (
        <>
            <View style={styles.headerCont}>
                <View>
                    <Text style={styles.titleStyle}>{appTitle}</Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    headerCont:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:5,
        paddingRight:5,
        backgroundColor:'yellow'
    },
    titleStyle:{
        fontSize:18,
        textAlign:'left',
        fontWeight:'bold',
        color:'#222'
    }
});

export default Header;
