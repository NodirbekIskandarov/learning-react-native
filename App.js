import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handlePress = () => {
    // Handle button press
    console.log('Button pressed!');
    Alert.alert(
      'begzodgulmi',
      'ha yo yoq',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => Alert.alert(
            'javob xato'
          )
        },
        { text: 'OK', onPress: () => Alert.alert(
          'togri javob uchun raxmat',
        ) },
      ],
      { cancelable: false }
    )
  };

  const handlePress2 = () => {
    Alert.prompt("nimadir kiriting", "nima", text => console.log(text))
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>bekzod</Text>
      <Button
        title="Press me"
        onPress={handlePress}
        style={styles.button}
      />
      <Button
        title="Press prompt button"
        onPress={handlePress2}
        style={styles.button}
      />

      <Image source={require('./assets/adaptive-icon.png')} style={styles.image}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "red",
  },
  button: {
    width: "100px",
    color: "red",
    display: "none"
  },
  image: {
    width: 200,
    height: 200
  }
});
