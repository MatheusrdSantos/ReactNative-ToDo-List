/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import AppContainer from './components/AppContainer'
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import combineReducer from './reducers';

const store = createStore(combineReducer);

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <Provider store={store}>
          <AppContainer></AppContainer>
        </Provider>
    );
  }
}

export default App