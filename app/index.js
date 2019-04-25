/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import TaskCreator from './components/TaskCreator'
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
            <TaskCreator></TaskCreator>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'blue',
    },
});
