import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wecome from './screen/Wecome';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import Main from './screen/main';


export default class App extends React.Component {
  render(){
  return (
    <View   style={styles.container}>
     <Wecome/>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const switchNavigator = createSwitchNavigator({
  'Welcome' : Welcome,
  'Main' : Main
})

const AppContainer =  createAppContainer(switchNavigator);

