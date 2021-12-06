import React from 'react'
import { View, Image } from 'react-native'
import { useWindowDimensions } from 'react-native'

const Background = ({ source = require('./assets/heron.png') }) => {
  const dimensions = useWindowDimensions()
  const aspect = 1088 / 750
  return (
    <View
      style={{
        flex: 1,
        width: dimensions.width,
        alignItems: 'flex-end',
        position: 'absolute',
      }}
    >
      <Image
        style={{
          height: dimensions.height,
          width: dimensions.height / aspect,
        }}
        source={source}
      />
    </View>
  )
}
export default Background
