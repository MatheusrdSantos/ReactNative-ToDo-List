import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, Button, Alert} from 'react-native';
import styles from './styles'
export default class TaskCreator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput ref={input => this._text = input} style={styles.textInput} placeholder="Type here a task"></TextInput>
        <Button
        /* onPress={() => {
            Alert.alert('You tapped the button!');
        }} */
        onPress={()=>this.props.newTask(this._text._lastNativeText)}
        title="add"
        />
      </View>
    );
  }
}
