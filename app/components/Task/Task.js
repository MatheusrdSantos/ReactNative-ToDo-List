import React, {Component} from 'react';
import {Text, View, Button, Alert, CheckBox} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {toggleTask, deleteTask} from '../../actions'

class Task extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <CheckBox value={this.props.item.done} onValueChange={()=>{this.props.toggleTask(this.props.index,!this.props.item.done)}}></CheckBox>
        <Text style={styles.description}>{this.props.item.description}</Text>
        <Button title="x" onPress={()=>{this.props.deleteTask(this.props.index, this.props.item.done)}}></Button>
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
    toggleTask: (index, newStatus) => dispatch(toggleTask(index, newStatus)),
    deleteTask: (index, taskStatus) => dispatch(deleteTask(index, taskStatus))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);