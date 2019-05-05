import React, {Component} from 'react';
import {View, Button} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {changeFilter} from '../../actions';
import {FILTERS} from '../../actions';

class TaskFilter extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Button title="all" onPress={()=>{
                        this.props.changeFilter(FILTERS.ALL)
                    }}></Button>
                </View>
                <View style={styles.item}>
                    <Button title="todo" onPress={()=>{
                        this.props.changeFilter(FILTERS.INCOMPLETE)
                    }}></Button>
                </View>
                <View style={styles.item}>
                    <Button title="done" onPress={()=>{
                        this.props.changeFilter(FILTERS.COMPLETED)
                    }}></Button>
                </View>
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
        changeFilter: (newFilter) => dispatch(changeFilter(newFilter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFilter);