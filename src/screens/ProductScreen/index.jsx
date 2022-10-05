import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react';
import styles from './styles';
import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { DataStore, Analytics } from 'aws-amplify';
import { Product } from '../../models';
import { CartProduct } from '../../models';




const ProductScreen = () => {
    const [product, setProduct] = useState(undefined)
    const [selectedOption, setSelectedOption] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const navigation = useNavigation();
    const route = useRoute()
    useEffect(() => {
        if (!route.params?.id) {
            return
        }
        DataStore.query(Product, route.params.id).then(setProduct)
    }, [route.params?.id])

    useEffect(() => {
        if (product?.options) {
            setSelectedOption(product.options[0])
        }
    }, [product])

    const onAddToCart = async () => {

        if (!product) {
            return;
        }

        const newCartProduct = new CartProduct({
            quantity,
            option: selectedOption,
            productID: product.id
        });

        DataStore.save(newCartProduct);
        navigation.navigate('ShoppingCart')

        const event = { name: 'my_cart_event', attributes: { title: product.title } };
        Analytics.record(event);
    }

    if (!product) {
        return <ActivityIndicator />
    }
    return (
        <ScrollView style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>

            {/* Image carousel */}
            <ImageCarousel images={product.images} />

            {/* Option selector */}
            <Picker
                selectedValue={selectedOption}
                onValueChange={(itemValue) =>
                    setSelectedOption(itemValue)
                }
            >
                {product?.options?.map((option, i) =>
                    <Picker.Item key={i} label={option} value={option} />
                )}
            </Picker>
            {/* Price */}
            <Text style={styles.price}>from ${product.price.toFixed(2)}
                {product.oldPrice && <Text style={styles.oldPrice}> ${product?.oldPrice.toFixed(2)} </Text>}
            </Text>
            {/* Description */}
            <Text style={styles.description}>
                {product.description}
            </Text>
            {/* Quantity selector */}
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />



            {/* Buttons */}
            <Button text={'Add to Cart'} onPress={onAddToCart} />
        </ScrollView>
    )
}

export default ProductScreen;