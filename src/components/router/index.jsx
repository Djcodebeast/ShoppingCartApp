import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNav from './buttomTabNav';

const Root = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Root.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Root.Screen component={BottomTabNav} name="HomeTabs" />
            </Root.Navigator>
        </NavigationContainer>
    )
}

export default Router