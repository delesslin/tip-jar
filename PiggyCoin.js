import React from 'react'
import { View, Image } from 'react-native'

const PiggyCoin = ({ d = 400 }) => {
  return (
    <View
      style={{
        overflow: 'hidden',
        borderRadius: d,
        borderWidth: 5,
        borderColor: '#edc531',
        width: d - 50,
        height: d - 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fad643',
      }}
    >
      <Image
        style={{
          width: d,
          height: d,
          top: 0,
          position: 'absolute',
        }}
        source={require('./assets/noun-piggy-bank-1005096.png')}
      />
    </View>
  )
}

export default PiggyCoin
