/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import TaskCreator from './components/TaskCreator'
import TaskList from './components/TaskList'
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: ['create item styles', 'implement interaction with itens', 'sleep']
    };
  }
  addTask = (task) => {
    this.state.todo.push(task)
    this.setState({todo: this.state.todo})
    //alert(task)
  }
  render() {
    return (
        <View style={styles.container}>
            <TaskCreator newTask={this.addTask}></TaskCreator>
            <TaskList todo={this.state.todo}></TaskList>
        </View>
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
