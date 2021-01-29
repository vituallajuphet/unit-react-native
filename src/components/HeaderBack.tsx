import React, { useEffect } from 'react';
import { IconButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import { appTitle } from '../lib/utils'

interface Props {
    screenName?: string
}


const HeaderBack: React.FC<Props> = ({ screenName }) => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.headerCont}>
                <View>
                    <IconButton
                        icon="keyboard-backspace"
                        color='#222'
                        size={30}
                        onPress={() => navigation.navigate("Home")}
                    />
                </View>
                <View style={{ marginLeft: 20 }}>
                    <Text style={styles.titleStyle}>{screenName}</Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    headerCont: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: 'yellow'
    },
    titleStyle: {
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#222'
    }
});

export default HeaderBack;
