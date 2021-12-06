import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'

export const Card = ({
  src,
  children,
  preferred = false,
  lightColor = '#0079C1',
  darkColor = '#00457C',
  logoSize = 75,
  coinSize = 100,
  link,
}) => {
  return (
    <Pressable
      onPress={() => (window.location.href = link)}
      style={{
        alignSelf: 'center',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFFcc',
        padding: 5,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          width: coinSize,
          height: coinSize,
          borderRadius: coinSize,
          borderWidth: 3,
          backgroundColor: lightColor,
          borderColor: darkColor,
          justifyContent: 'center',
        }}
      >
        <Image
          style={{ width: logoSize, height: logoSize, alignSelf: 'center' }}
          source={src}
        />
      </View>
      <Text
        style={{
          alignSelf: 'center',
          marginVertical: 10,
          fontFamily: 'title',
          fontSize: 20,

          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 10,
        }}
      >
        {children}
      </Text>
      {/* <Text
        style={{
          alignSelf: 'center',

          fontFamily: 'textItalic',
        }}
      >
        {preferred ? 'preferred' : ''}
      </Text> */}
    </Pressable>
  )
}
