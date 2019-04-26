import React, {Component} from 'react';
import {SectionList, Text, View, Button} from 'react-native';
import styles from './styles'
export default class TaskList extends Component {
    constructor (props){
        super(props);
        this.state = {
            todoData: ['create item styles', 'implement interaction with itens'],
            doneData: ['create section list']
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <SectionList
                    sections={[
                        {title: 'ToDo', data: this.state.todoData},
                        {title: 'Done', data: this.state.doneData},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                    />
                </View>
            </View>
        );
    }
}
