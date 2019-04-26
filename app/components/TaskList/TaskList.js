import React, {Component} from 'react';
import {SectionList, Text, View, Button} from 'react-native';
import styles from './styles';
import Task from '../Task';

export default class TaskList extends Component {
    constructor (props){
        super(props);
        this.state = {
            doneData: ['create section list']
        }
        console.log(this.props.todo)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <SectionList
                    sections={[
                        {title: 'ToDo', data: this.props.todo},
                        {title: 'Done', data: this.state.doneData},
                    ]}
                    renderItem={({item,index}) => <Task item={item} index={index} removeTask={this.props.removeTask}></Task>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                    />
                </View>
            </View>
        );
    }
}
