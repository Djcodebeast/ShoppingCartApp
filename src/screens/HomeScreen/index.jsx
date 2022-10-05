import { View, StyleSheet, FlatList } from 'react-native'
import ProductItem from '../../components/ProductItem'
import { useState, useEffect } from 'react'
import { DataStore } from 'aws-amplify'
import { Product } from '../../models'

const HomeScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        DataStore.query(Product).then(setProducts);
    }, [])
    return (
        <View style={styles.page}>
            <FlatList
                data={products}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                    <ProductItem item={item} key={item.id} />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 10,
    }
})



export default HomeScreen;