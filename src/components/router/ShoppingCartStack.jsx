import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingCartScreen from '../../screens/ShoppingCartScreen';

const Stack = createNativeStackNavigator();

const ShoppingCartStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={ShoppingCartScreen} name="Shopping Cart" options={{ title: 'Home' }} />
        </Stack.Navigator>
    )
}

export default ShoppingCartStack;