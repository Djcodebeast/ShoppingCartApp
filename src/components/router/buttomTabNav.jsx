import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                    } else if (route.name === 'ShoppingCart') {
                        iconName = focused ? 'ios-cart' : 'ios-cart-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarShowLabel: false,
                tabBarInactiveTintColor: '#e47911',
                tabBarActiveTintColor: '#ffbd7d',
                headerShown: false,
            })}

        >
            <Tab.Screen
                component={HomeStack}
                name="Home"

            />
            <Tab.Screen component={HomeScreen} name="Profile" />
            <Tab.Screen component={ShoppingCartStack} name="ShoppingCart" />
        </Tab.Navigator>
    )
}

export default BottomTabNav;