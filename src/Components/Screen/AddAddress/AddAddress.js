import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { textScale } from '../../../Styles/responsiveStyles'

const AddAddress = () => {
  return (
    <View style={styles.mainHeader}>
      <Text style={styles.Text}>Address </Text>
    </View>
  )
}

export default AddAddress

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