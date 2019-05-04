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
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import combineReducer from './reducers';

const store = createStore(combineReducer);
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [],
      done: []
    };
  }
  addTask = (task) => {
    this.state.todo.push(task)
    this.setState({todo: this.state.todo})
    //alert(task)
  }
  updateList = (newStatus, taskIndex) =>{
    if(newStatus){
      let taskDescription = this.state.todo.splice(taskIndex, 1)[0];
      console.log(taskDescription)
      this.setState({todo: this.state.todo});
      this.state.done.push(taskDescription);
      this.setState({done: this.state.done});
    }else{
      let taskDescription = this.state.done.splice(taskIndex, 1);
      this.setState({done: this.state.done});
      this.state.todo.push(taskDescription);
      this.setState({todo: this.state.todo});
    }
  }
  removeTask = (done, index) => {
    if(!done){
      this.state.todo.splice(index, 1)
      this.setState({todo: this.state.todo})
    }else{
      this.state.done.splice(index, 1)
      this.setState({done: this.state.done})
    }
  }
  render() {
    return (
        <Provider store={store}>
          <View style={styles.container}>
              <TaskCreator newTask={this.addTask}></TaskCreator>
              <TaskList todo={this.state.todo} done={this.state.done} updateList={this.updateList} removeTask={this.removeTask}></TaskList>
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
