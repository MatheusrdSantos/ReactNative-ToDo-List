import React, {Component} from 'react';
import {Text, View, Button, Alert, CheckBox} from 'react-native';
import styles from './styles'

export default class Task extends Component {
  constructor(props){
    super(props);
    this.state = {
      done: this.props.section=='ToDo'?false:true
    }
  }
  render() {
    return (
      <View style={styles.container}>
        
        <Text>{this.props.item.description}</Text>
        
      </View>
    );
  }
}
