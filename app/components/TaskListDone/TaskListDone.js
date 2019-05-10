import React, {Component} from 'react';
import {Text, View, SectionList} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import Task from '../Task';

class TaskListDone extends Component{
    render(){
        return (
            <SectionList
                sections={[
                    {title: 'Done', data: this.props.tasks}
                ]}
                
                renderItem={({item,index, section}) => <Task item={item} section={section.title} index={index} updateList={this.props.updateList} removeTask={this.props.removeTask}></Task>}

                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                
                keyExtractor={(item, index) => index+item.description}
                />
        );
    }
}
mapStateToProps = (state) => {
    return {
        tasks: state.tasks.done
    }
}

mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskListDone);