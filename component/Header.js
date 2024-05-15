import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Header() {
  const cartData = useSelector((state)=>state.reducer)
    const [cartItems, setCartItems] = useState(0)
    useEffect(() => {
      setCartItems(cartData.length)
    }, [cartData])
  return (
    <View style={{padding:20, backgroundColor:'blue'}}>
      <Text style={{color:'white'}}>Cart Item : {cartItems}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})