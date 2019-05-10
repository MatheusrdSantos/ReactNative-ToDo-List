import React, {Component} from 'react';
import {Text, View, Alert} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {toggleTask, deleteTask} from '../../actions';
import {Card, Button, Icon, CheckBox} from 'native-base';

class Task extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
        <CheckBox style={styles.checkbox} color="#3f51b5" checked={this.props.item.done} onPress={()=>{this.props.toggleTask(this.props.index,!this.props.item.done)}}/>
          {/* <CheckBox style={styles.checkbox} value={this.props.item.done} onValueChange={()=>{this.props.toggleTask(this.props.index,!this.props.item.done)}}></CheckBox> */}
          <Text style={styles.description}>{this.props.item.description}</Text>
          {/* <Button light style={styles.button}> */}
            <Icon type="MaterialIcons" style={styles.delIcon} onPress={()=>{this.props.deleteTask(this.props.index, this.props.item.done)}} name="clear"/>
          {/* </Button> */}
        </Card>
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