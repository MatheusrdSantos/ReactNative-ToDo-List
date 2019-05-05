import React, {Component} from 'react';
import {View, Button} from 'react-native';
import styles from './styles';

class TaskFilter extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Button title="all"></Button>
                </View>
                <View style={styles.item}>
                    <Button title="todo"></Button>
                </View>
                <View style={styles.item}>
                    <Button title="done"></Button>
                </View>
            </View>
        );
    }
}

export default TaskFilter;