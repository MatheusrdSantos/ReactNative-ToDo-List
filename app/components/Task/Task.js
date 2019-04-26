import React, {Component} from 'react';
import {Text, View, Button, Alert} from 'react-native';
import styles from './styles'

export default class Task extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>{this.props.item}</Text>
        <Button onPress={
            () => {
                this.props.removeTask('doing',this.props.index)
                console.log(this.props.index)
            }
        } title="x"></Button>
      </View>
    );
  }
}
