/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import AppContainer from './components/AppContainer'
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Spinner} from 'native-base';
import {Provider} from 'react-redux';
import {store, persistor} from './reducers';
import {PersistGate} from 'redux-persist/integration/react'
class App extends Component {
  constructor(props){
    super(props);
  }
  loading = ()=>{
    return (
      <View style={styles.leadingContainer}>
        <Spinner color='blue'></Spinner>
        <Text>Loading</Text>
      </View>
    );
  }
  render() {
    return (
        <Provider store={store}>
         <PersistGate persistor={persistor} loading={this.loading()}>
            <AppContainer></AppContainer>
          </PersistGate>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  leadingContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App