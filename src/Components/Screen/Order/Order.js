import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { textScale } from '../../../Styles/responsiveStyles'

const Order = () => {
  return (
    <View style={styles.mainHeader}>
      <Text style={styles.Text}>Order </Text>
    </View>
  )
}

export default Order

const styles = StyleSheet.create({
  mainHeader:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
  },
  Text:{
      fontSize:textScale(16)
  }
})