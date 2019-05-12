/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import AppContainer from './components/AppContainer'
import React, {Component} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './reducers';
import {PersistGate} from 'redux-persist/integration/react'
class App extends Component {
  constructor(props){
    super(props);
  }
  loading = ()=>{
    return (<Text>Loading</Text>);
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

export default App