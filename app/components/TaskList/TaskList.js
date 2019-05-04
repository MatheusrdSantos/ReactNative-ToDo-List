import React, {Component} from 'react';
import {SectionList, Text, View, Button} from 'react-native';
import styles from './styles';
import Task from '../Task';
import { connect } from 'react-redux';

class TaskList extends Component {
    constructor (props){
        super(props);

        console.log(this.props.tasks);
    }
    
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <SectionList
                    sections={[
                        {title: 'ToDo', data: this.props.tasks},
                        {title: 'Done', data: this.props.tasks},
                    ]}
                    
                    renderItem={({item,index, section}) => <Task item={item} section={section.title} index={index} updateList={this.props.updateList} removeTask={this.props.removeTask}></Task>}

                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    
                    keyExtractor={(item, index) => index+item}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
      tasks: state.taskReducer
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);