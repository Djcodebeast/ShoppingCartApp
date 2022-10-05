import { View, Text, Pressable, StyleSheet } from 'react-native'


const Button = ({ text, onPress, containerStyles }) => {
    return (
        <View>
            <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
                <Text style={styles.text}>{text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#e47911',
        marginVertical: 10,
        marginBottom: 20,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#a15e1b'
    },
    text: {
        fontSize: 16,
        fontWeight: 'normal',
    }
})

export default Button