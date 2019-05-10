import {StyleSheet} from 'react-native';

export default StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'stretch',
        },
        emptyContainer:{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        listContainer: {
            flex:1,
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            backgroundColor: '#ffffff',
        },
});