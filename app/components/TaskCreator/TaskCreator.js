import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, Button, Alert} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import {newTask} from '../../actions'
class TaskCreator extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskDescription: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput ref={input => this._text = input} value={this.state.taskDescription} onChangeText={(text)=> this.setState({taskDescription:text})} style={styles.textInput} placeholder="Type here a task"></TextInput>
        <Button
        onPress={()=>this.props.addTask(this.state.taskDescription)}
        title="add"
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: description => dispatch(newTask(description))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreator)
