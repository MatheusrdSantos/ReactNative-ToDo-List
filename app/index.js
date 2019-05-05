/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import TaskCreator from './components/TaskCreator'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter';
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider, connect} from 'react-redux';
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
          <View style={styles.container}>
              <TaskCreator></TaskCreator>
              <TaskList></TaskList>
              <TaskFilter></TaskFilter>
          </View>
        </Provider>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'blue',
    },
});

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default App