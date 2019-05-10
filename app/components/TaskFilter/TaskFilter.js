import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import {changeFilter} from '../../actions';
import {FILTERS} from '../../actions';
import {Footer, FooterTab, Button, Text} from 'native-base';

class TaskFilter extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Footer>
                    <FooterTab>
                        <Button active={this.props.filter==FILTERS.ALL} onPress={()=>{
                            this.props.changeFilter(FILTERS.ALL)
                        }}>
                        <Text>All</Text>
                        </Button>
                        <Button active={this.props.filter==FILTERS.INCOMPLETE} onPress={()=>{
                        this.props.changeFilter(FILTERS.INCOMPLETE)
                        }}>
                        <Text>Todo</Text>
                        </Button>
                        <Button active={this.props.filter==FILTERS.COMPLETED} onPress={()=>{
                        this.props.changeFilter(FILTERS.COMPLETED)
                        }}>
                        <Text>Done</Text>
                        </Button>
                    </FooterTab>
                </Footer>
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
        changeFilter: (newFilter) => dispatch(changeFilter(newFilter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFilter);