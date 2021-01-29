import React, { useEffect, useState } from 'react';


import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar,
    TextInput,
    Alert,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler'

import { HeaderBack } from '../../components/index'
import { connect } from 'react-redux'

import { appTitle } from '../../lib/utils'
import Dropdown from '../../components/Dropdown'

interface Props {
    is_started?: boolean
    navigation?: any
}

interface Obj{
    label: string
    value: string
    curToPeso: number
}

const ConvertCurrency = (props: Props) => {

    const [val1, setVal1] = useState( { label: '', value: '', curToPeso: 0 })
    const [val2, setVal2] = useState({ label: '', value: '', curToPeso: 0 })

    const roleitems = [
        { label: 'USD', value: 'usd', curToPeso: 48.07 },
        { label: 'EUR', value: 'eud', curToPeso: 58.22 },
        { label: 'GBP', value: 'gbp', curToPeso: 65.93 },
        { label: 'JPY', value: 'jyp', curToPeso: 0.46 },
        { label: 'NZD', value: 'nzd', curToPeso: 34.49 },
        { label: 'PHP', value: 'php', curToPeso: 1 },
        { label: 'KRW', value: 'krw', curToPeso: 0.043 }
    ]

    const getData1 = (dta:Obj) =>{
        setVal1(dta)
    }

    const getData2 = (dta:Obj) =>{
        setVal2(dta)
    }

    const convert_currency = () => {
        const result = val1.curToPeso * val1.curToPeso
        Alert.alert("Result: " + result.toString())
    }

    const textField1Handler = (e:any) => {
        console.log(e)
    }

    return (
        <View>
            <HeaderBack screenName='Currency Converter' />

            <View style={{ padding: 15, paddingTop: 30 }}>
                <Text>From</Text>
                <Dropdown
                    placeHolder='Role*'
                    items={roleitems}
                    value='usd'
                    onSelectChange = { getData1 }
                />
                
            </View>

            <View style={{ padding: 15, paddingTop: 10 }}>
                <Text>To</Text>
                <Dropdown
                    placeHolder='Role*'
                    items={roleitems}
                    value='usd'
                    onSelectChange = { getData2 }
                />
                <TextInput onChangeText= {(e:any) => console.log(e)} style={styles.textField} placeholder="Enter first value" />
                <TextInput style={styles.textField} placeholder="Enter second value" />
                <View style={{ marginTop: 50 }}>
                    <Button color="black" onPress={() => convert_currency()} title="Convert" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    dropdown: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        borderColor: 'transparent',
        borderBottomColor: '#C7C7C7',
        color: '#C7C7C7',
        textAlign: 'left',
        paddingHorizontal: 0,
    },
    btn: {

    },
    textField:{
        borderBottomColor:'#666',
        borderBottomWidth:1,
        marginTop:20
    }
    

});

const mapStateToProps = (state: any) => ({ is_started: state.screen.screenStart })

export default connect(mapStateToProps, {})(ConvertCurrency);
