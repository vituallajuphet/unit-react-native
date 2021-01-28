import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const ConvertList = () => {

    const convertlist = [
        {id:1, name: 'Currency Converter'},
        {id:2, name: 'Temperature Converter'},
        {id:3, name: 'Power Converter'},
        {id:4, name: 'Pressure Converter '},
        {id:5, name: 'Length Converter'},
        {id:6, name: 'Volume Converter'},
        {id:7, name: 'Velocity Converter'},
        {id:8, name: 'Area Converter'},
        {id:9, name: 'Weight Converter'},
        {id:10, name: 'Time Converter'},
    ]

    const List:React.FC = () => {
        return (
            <>
                {convertlist.map(lst => (
                    <View style={styles.listStyle} key={lst.id}>
                        <Text style={styles.listText}>{lst.name}</Text>
                    </View>
                ))}
            </>
        )
    }

    return (
        <>  
            <ScrollView style={{backgroundColor:'whitesmoke',flex:6, flexDirection:'column',height:'100%'}}>
                <View style={{marginTop:10,padding:3}}> 
                    <List />
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    listStyle:{
        padding:15,
        borderColor:'#888',
        borderWidth:1,
        marginBottom:5,
        borderRadius:5,
    },
    listText:{
        fontSize:17
    }
});

export default ConvertList;
