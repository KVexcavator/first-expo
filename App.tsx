import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Box from "./Box";
import styles from "./styles";

const boxes = new Array(10).fill(null).map((v, i) => i + 1);

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
        {boxes.map((i) => (
          <Box key={i}>#{i}</Box>
        ))}
    </View>
  );
}
