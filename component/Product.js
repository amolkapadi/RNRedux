import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addToCart, removeToCart } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';

export default function Product(props) {
    const item = props.item;
    const [isAdded, setIsAdded] = useState(false);
    const dispatch = useDispatch()

    const handleAdd = (item) => {
      dispatch(addToCart(item))
    }
    const handleRemove = (item) => {
      dispatch(removeToCart(item.title))
    }
    const cartItems = useSelector((state)=> state.reducer);


    useEffect(() => {
      
      let result = cartItems.filter((element) => {
        return element.title === item.title
      });
      if (result.length) {
        setIsAdded(true)
      }else {
        setIsAdded(false)
      }
    }, [cartItems])
    return (
        <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.description}>{item.description}</Text>
       {
        isAdded ? 
        <Button title="Remove to Cart" onPress={() => handleRemove(item)}/>
        : 
        <Button title="Add to Cart" onPress={() => handleAdd(item)}/>
       }

      </View>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        resizeMode:'contain'
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
      },
      price: {
        fontSize: 16,
        color: '#888',
        marginBottom: 10,
      },
      description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
      },
})
