import { View, Text, Image, Pressable } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const ProductItem = ({ item }) => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('ProductDetails', { id: item.id })
  }
  return (

    <Pressable onPress={onPress} style={styles.root}>
      <Image style={styles.image} source={{ uri: item.image }} />

      <View style={styles.rContainer}>
        <Text style={styles.title} numberOfLines={3} ellipsizeMode='tail'>{item.title}</Text>
        <View style={styles.ratingContainer}>
          {Array.from({ length: 5 }, ((el, i) => (
            <FontAwesome
              style={styles.star}
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={18}
              color={"#e47911"}
              key={`${item.id}-${i}`}
            />
          )))

          }
          <Text> {item.ratings} </Text>
        </View>
        <Text style={styles.price}>from ${item.price.toFixed(2)}
          {item.oldPrice && <Text style={styles.oldPrice}> ${item?.oldPrice.toFixed(2)} </Text>}
        </Text>
      </View>
    </Pressable>
  )
}

export default ProductItem