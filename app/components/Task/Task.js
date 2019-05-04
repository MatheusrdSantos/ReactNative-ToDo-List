import React, {Component} from 'react';
import {Text, View, Button, Alert, CheckBox} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {toggleTask} from '../../actions'

class Task extends Component {
  constructor(props){
    super(props);
    this.state = {
      done: this.props.section=='ToDo'?false:true
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <CheckBox value={this.props.item.done} onValueChange={()=>{this.props.toggleTask(this.props.index,!this.props.item.done)}}></CheckBox>
        <Text>{this.props.item.description}</Text>
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
    toggleTask: (index, newStatus) => dispatch(toggleTask(index, newStatus))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);