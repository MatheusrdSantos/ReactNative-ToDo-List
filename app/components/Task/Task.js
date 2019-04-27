import React, {Component} from 'react';
import {Text, View, Button, Alert, CheckBox} from 'react-native';
import styles from './styles'

export default class Task extends Component {
  constructor(props){
    super(props);
    this.state = {
      done: this.props.section==='ToDo'?false:true
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <CheckBox value={this.state.done} onValueChange={()=>{
            this.setState({done: !this.state.done});
            /* The first argument means the list where the task should be displayed */
            this.props.updateList(!this.state.done, this.props.index)
        }}></CheckBox>
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
