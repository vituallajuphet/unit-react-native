import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { View, Text, Button } from 'react-native'
import { SplashScreen, Home, ConvertCurrency } from './pages/index'
import { connect } from 'react-redux'

interface Props {
  is_started?: false
}

const Stack = createStackNavigator();

const Routes: React.FC<Props> = ({ is_started }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='Home'
      >
        {
          !is_started ? (
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
          ) : (
              <>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='ConvertCurrency' component={ConvertCurrency} />
              </>
            )
        }

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const mapStateToProps = (state: any) => ({ is_started: state.screen.screenStart })

export default connect(mapStateToProps, {})(Routes);