import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';

import { Header } from '../../components/index'
import { connect } from 'react-redux'
// components

import ConvertList from './common/ConvertList'

import { appTitle } from '../../lib/utils'

interface Props {
    is_started?: boolean
    navigation?: any
}

const Home = (props: Props) => {
    const test = () => {
        console.log(1111)
    }

    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <Header />
                    <View>
                        <ConvertList />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({

});

const mapStateToProps = (state: any) => ({ is_started: state.screen.screenStart })

export default connect(mapStateToProps, {})(Home);
