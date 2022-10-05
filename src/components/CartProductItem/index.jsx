import { View, Text, Image, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import QuantitySelector from '../QuantitySelector';
import { useState } from 'react'


const CartProductItem = ({ cartItem }) => {
  const { quantity: quantityProp, product } = cartItem;
  const [quantity, setQuantity] = useState(quantityProp)
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: product.image }} />

        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3} ellipsizeMode='tail'>{product.title}</Text>
          <View style={styles.ratingsContainer}>
            {Array.from({ length: 5 }, ((el, i) => (
              <FontAwesome
                style={styles.star}
                name={i < Math.floor(product.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={"#e47911"}
                key={`${product.id}-${i}`}
              />
            )))

            }
            <Text> {product.ratings} </Text>
          </View>
          <Text style={styles.price}>from ${product.price.toFixed(2)}
            {product.oldPrice && <Text style={styles.oldPrice}> ${product?.oldPrice.toFixed(2)} </Text>}
          </Text>
        </View>
      </View>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
    </View>
  )
}

export default CartProductItem