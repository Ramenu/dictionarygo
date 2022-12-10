import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { InputBox } from './components/inputbox';
import store from "./redux/store";
import { useState } from 'react';
import { APIButton } from './components/apibutton';

export default function App() {
  const [defaultText, setDefaultText] = useState("Search for something..");
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
          <InputBox defaultText={defaultText}/>
          <APIButton/>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
