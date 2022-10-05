import { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen'
import ProductScreen from '../../screens/ProductScreen';

const Stack = createNativeStackNavigator();





const HomeStack = () => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                options={{ title: 'Home' }}

            >
                {() => <HomeScreen />}

            </Stack.Screen>
            <Stack.Screen component={ProductScreen} name="ProductDetails" />
        </Stack.Navigator>
    )
}

export default HomeStack;