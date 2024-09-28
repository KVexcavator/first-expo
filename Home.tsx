import React from "react"
import { View, Text, Button, StatusBar } from "react-native"
import styles from "./styles"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RoutesParams } from "./router"

type Props = NativeStackScreenProps<RoutesParams, "Home">

export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor="#61dafb" barStyle="dark-content"/>
      <Text>Home Screen</Text>
      <Button
        title="First Item"
        onPress={() =>
          navigation.navigate("Details", {
            title: "First Item",
            content: "First Item Content",
            stock: 1,
          })
        }
      />
      <Button
        title="Second Item"
        onPress={() =>
          navigation.navigate("Details", {
            title: "Second Item",
            content: "Second Item Content",
            stock: 0,
          })
        }
      />
      <Button
        title="Third Item"
        onPress={() =>
          navigation.navigate("Details", {
            title: "Third Item",
            content: "Third Item Content",
            stock: 200,
          })
        }
      />
    </View>
  )
}