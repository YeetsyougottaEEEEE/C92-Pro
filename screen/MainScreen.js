import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class MainScreen extends React.Component{
  render(){
    return (
    <View style={styles.container}>
      <Text>Notes</Text>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b7edca',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
