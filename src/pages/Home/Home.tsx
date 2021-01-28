import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Header } from '../../components/index'
// components

import ConvertList from './common/ConvertList'

import { appTitle } from '../../lib/utils'



const Home = () => {

    return (
        <>  
            <ScrollView>
                <Header />
                <View>
                    <ConvertList />
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({

});

export default Home;
