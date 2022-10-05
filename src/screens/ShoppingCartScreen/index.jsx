import { View, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native'
// import products from '../../data/cart'
import CartProductItem from '../../components/CartProductItem'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { DataStore } from 'aws-amplify'
import { Product, CartProduct } from '../../models';
import { useState, useEffect } from 'react';


const ShoppingCartScreen = () => {
    const [cartProducts, setCartProducts] = useState([])




    useEffect(() => {
        const fetchCartProducts = async () => {
            DataStore.query(CartProduct).then(setCartProducts)
        }

        fetchCartProducts();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {

            const products = await Promise.all(
                cartProducts.map(cartProduct =>
                    DataStore.query(Product, cartProduct.productID)
                )
            );

            console.log('products', products)

            setCartProducts(currentCartProducts =>
                currentCartProducts.map(cartProduct => ({
                    ...cartProduct,
                    product: products.find(p => p?.id === cartProduct.productID)
                }))
            )

        };


        fetchProducts();

    }, [])



    const navigation = useNavigation();

    const onCheckout = () => {
        navigation.navigate('Address');
    }

    if (cartProducts.filter(cp => !cp.product).length !== 0) {
        return <ActivityIndicator />
    }


    const totalPrice = cartProducts.reduce((summedPrice, product) => (
        summedPrice + (product?.product?.price || 0) * product.quantity
    ), 0);
    return (

        <View style={styles.page}>

            <FlatList data={cartProducts}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <CartProductItem cartItem={item} key={item.id} />
                    //render quantity selector
                )}
                ListHeaderComponent={() => (
                    <View>
                        <Text style={styles.subtotal}> Subtotal ({cartProducts.length} items):
                            <Text style={styles.subtotalText}> {totalPrice.toFixed(2)} </Text>
                        </Text>
                        <Button
                            text='Proceed to checkout'
                            onPress={onCheckout}
                            containerStyles={{ backgroundColor: '#f7e300', borderColor: '#c7b702' }}
                        />
                    </View>
                )}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 10,
    },
    subtotal: {
        fontSize: 18,
    },
    subtotalText: {
        color: '#e47911',
        fontWeight: 'bold',
    }
})



export default ShoppingCartScreen;