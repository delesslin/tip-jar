import React from 'react'
import { View } from 'react-native'
import Background from './Background'
import { useFonts } from 'expo-font'
import { Header } from './Header'
import { Card } from './Card'
export default function App() {
  const [loaded] = useFonts({
    title: require('./assets/RobotoCondensed-Bold.ttf'),
    text: require('./assets/RobotoMono-VariableFont_wght.ttf'),
    textItalic: require('./assets/RobotoMono-Italic-VariableFont_wght.ttf'),
  })

  if (!loaded) {
    return null
  }
  return (
    <View style={{ flex: 1, alignSelf: 'stretch' }}>
      <Background />
      <Header title="DeLesslin's Tip Jar">
        Tanake! Ni yat DeLesslin George-Warren I am a Catawba artist/educator
        living and working in the Catawba Nation and elsewhere. If you've
        learned something from me or just want to support my work, please
        consider sending me a tip 😼
      </Header>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',

          flexDirection: 'row',

          justifyContent: 'space-evenly',
        }}
      >
        <Card
          src={require('./assets/paypal.png')}
          preferred='true'
          link='https://www.paypal.com/paypalme/delesslin'
          logoSize={50}
        >
          @delesslin
        </Card>
        <Card
          src={require('./assets/cashapp.png')}
          subtitle=''
          link='https://cash.app/$delessl'
          lightColor='#00D64B'
          darkColor='#00C244'
        >
          $delessli
        </Card>
        <Card
          src={require('./assets/venmo.png')}
          subtitle=''
          link='https://venmo.com/u/delesslin'
          lightColor='#3d95ce'
          darkColor='#343538'
          logoSize={70}
        >
          @delesslin
        </Card>
      </View>
    </View>
  )
}
