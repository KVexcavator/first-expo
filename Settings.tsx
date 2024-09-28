import React from "react"
import { View, Text, Button, StatusBar } from "react-native"
import styles from "./styles"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "./router"

type Props = NativeStackScreenProps<RootStackParamList>

export default function Settings({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor="#61dafb" barStyle="dark-content"/>
      <Text>Settings Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  )
}