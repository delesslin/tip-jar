import React from 'react'
import { View, Text } from 'react-native'
import PiggyCoin from './PiggyCoin'

export const Header = ({ title, children }) => {
  return (
    <View
      style={{
        margin: 25,
        marginBottom: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'stretch',
        marginTop: 50,
      }}
    >
      <PiggyCoin d={250} />
      <View
        style={{
          justifyContent: 'space-between',
          marginTop: 25,
        }}
      >
        <View
          style={{
            backgroundColor: '#ffffffcc',
            padding: 15,
            marginBottom: 20,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 45,
              fontFamily: 'title',
            }}
          >
            {title}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#ffffffcc',
            padding: 15,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontFamily: 'textItalic',
              fontSize: 20,
              textAlign: 'center',
              maxWidth: 500,
            }}
          >
            {children}
          </Text>
        </View>
      </View>
    </View>
  )
}
