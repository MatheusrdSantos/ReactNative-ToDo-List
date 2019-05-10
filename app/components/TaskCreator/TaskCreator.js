import React, {Component} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import {newTask} from '../../actions';
import {Button, Text, Label, Input, Form, Item} from 'native-base';
class TaskCreator extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskDescription: ''
    }
  }
  clearTextField(){
    this.setState({taskDescription:''})
  }
  render() {
    return (
      <View style={styles.container}>
        <Form style={styles.textInput}>
          <Item>
            <Input placeholder="Description" value={this.state.taskDescription} onChangeText={(text)=> this.setState({taskDescription:text})}/>
          </Item>
        </Form>
        {/* <TextInput ref={input => this._text = input} value={this.state.taskDescription} onChangeText={(text)=> this.setState({taskDescription:text})} style={styles.textInput} placeholder="Type here a task"></TextInput> */}
        <Button active
        onPress={()=>{
          this.clearTextField()
          this.props.addTask(this.state.taskDescription)
        }}
        ><Text>Add</Text></Button>
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
