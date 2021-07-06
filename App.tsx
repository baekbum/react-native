import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, Dimensions } from 'react-native';
import { Colors } from 'react-native-paper';
import Color from 'color';

export default function App() {
  const {height, width} = Dimensions.get('window');
  console.log(Platform.OS);
  console.log(`height: ${height}, width: ${width}`);
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Text style={styles.Text}>Hello~! react-native</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: Colors.blue500,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Text: {
    fontSize: 20,
    color: Color(Colors.blue500).alpha(0.7).lighten(0.9).toString()
  }
});
