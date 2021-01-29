import React, { useEffect, useState } from 'react';


import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar,
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

const ConvertCurrency = (props: Props) => {

    const [dactive, setActive] = useState('software_enadmingineer')

    const roleitems = [
        { label: 'USD', value: 'usd', cur: 48.07 },
        { label: 'EUR', value: 'eud', cur: 58.22 },
        { label: 'GBP', value: 'gbp', cur: 65.93 },
        { label: 'JPY', value: 'jyp', cur: 0.46 },
        { label: 'NZD', value: 'nzd', cur: 34.49 },
        { label: 'PHP', value: 'php', cur: 1 },
        { label: 'KRW', value: 'krw', cur: 0.043 }
    ]


    return (
        <View>
            <HeaderBack screenName='Currency Converter' />

            <View style={{ padding: 15, paddingTop: 30 }}>
                <Text>From</Text>
                <Dropdown
                    placeHolder='Role*'
                    items={roleitems}
                    value='usd'
                />
            </View>

            <View style={{ padding: 15, paddingTop: 30 }}>
                <Text>To</Text>
                <Dropdown
                    placeHolder='Role*'
                    items={roleitems}
                    value='usd'
                />
                <View style={{ marginTop: 20 }}>
                    <Button color="blue" onPress={() => { }} title="Convert" />
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

    }

});

const mapStateToProps = (state: any) => ({ is_started: state.screen.screenStart })

export default connect(mapStateToProps, {})(ConvertCurrency);
