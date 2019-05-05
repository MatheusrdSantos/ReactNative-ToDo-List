import React, {Component} from 'react';
import {View, Text} from 'react-native'
import TaskCreator from '../TaskCreator';
import TaskList from '../TaskList';
import TaskFilter from '../TaskFilter';
import styles from './styles';
import {connect} from 'react-redux';
import {FILTERS} from '../../actions';

class AppContainer extends Component{
    displayFilter(){
        if(this.props.filter == FILTERS.ALL){
            return (<TaskList></TaskList>);
        }else if(this.props.filter == FILTERS.COMPLETED){
            return (
                <View style={styles.emptyContainer}>
                    <Text>{this.props.filter}</Text>
                </View>
            );
        }else if(this.props.filter == FILTERS.INCOMPLETE){
            return (
                <View style={styles.emptyContainer}>
                    <Text>{this.props.filter}</Text>
                </View>
            );
        }
    }
    render(){
        console.log(this.props.filter)
        return (
            <View style={styles.container}>
                <TaskCreator></TaskCreator>
                {this.displayFilter()}
                <TaskFilter></TaskFilter>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        filter: state.filter
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);