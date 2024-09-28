import React from "react"
import { View, Text, Button, StatusBar } from "react-native"
import styles from "./styles"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RoutesParams } from "./router"

type Props = NativeStackScreenProps<RoutesParams, "Details">

export default function Details({ route, navigation }: Props) {
  const { content, title } = route.params

  React.useEffect(() => {
    navigation.setOptions({ title })
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor="#61dafb" barStyle="dark-content"/>
      <Text>{content}</Text>
    </View>
  )
}