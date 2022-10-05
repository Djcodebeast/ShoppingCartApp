import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: '#fff',

    },
    title: {
        color: '#000',
    },
    price: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    description: {
        marginVertical: 10,
        lineHeight: 20,
    }

});

export default styles;