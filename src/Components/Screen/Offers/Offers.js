import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { textScale } from '../../../Styles/responsiveStyles'

const Offers = () => {
  return (
    <View style={styles.mainHeader}>
      <Text style={styles.Text}>Offers is not available...</Text>
    </View>
  )
}

export default Offers

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