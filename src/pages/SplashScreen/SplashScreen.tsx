import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
} from 'react-native';
import { connect } from 'react-redux'
import { load_started } from '../../redux/action'
import { appTitle } from '../../lib/utils'


interface Props {
    is_started?: boolean
    navigation?: any
    load_started?: any
}

const SplashScreen = (props: Props) => {
    useEffect(() => {

        setTimeout(() => {
            props.load_started(true)
            props.navigation.navigate("Home")
        }, 3000);

        return
    }, [])


    return (
        <>
            <View style={styles.splashScreen}>
                <View>
                    <Text style={styles.splashText}>{appTitle}</Text>
                    <Text style={styles.devHeading}>Developed By:</Text>
                    <Text style={styles.developText}>Jervoso, Francis Jude A.</Text>
                    <Text style={styles.developText}>Delagente, Wonder Monick S.</Text>
                    <Text style={styles.developText}>Jervoso, Francis Jude A.</Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    splashScreen: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'yellow',
        color: 'white',
        flex: 6
    },
    devHeading: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 40,
        marginBottom: 10,
    },
    developText: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5
    },
    splashText: {
        fontSize: 35,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

const mapStateToProps = (state: any) => ({ is_started: state.screen.screenStart })

export default connect(mapStateToProps, { load_started })(SplashScreen);
