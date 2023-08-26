import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Redux/Store/Store'
import MainContainer from './Components/Screen/mainContainer'


const App = () => {
  return (
   <Provider store = {store}>
    <MainContainer/>
   </Provider>
  )
}

export default App