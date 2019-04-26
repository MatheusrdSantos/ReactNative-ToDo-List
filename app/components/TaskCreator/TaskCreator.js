import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, Button, Alert} from 'react-native';
import styles from './styles'
export default class TaskCreator extends Component {
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
        /* onPress={() => {
            Alert.alert('You tapped the button!');
        }} */
        onPress={
          ()=>{
            this.props.newTask(this.state.taskDescription)
            this.setState({taskDescription:''})
          }
        }
        title="add"
        />
      </View>
    );
  }
}
