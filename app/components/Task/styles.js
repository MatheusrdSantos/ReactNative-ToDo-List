import { StyleSheet } from 'react-native';
/* Task styles */
export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        marginBottom:10,
    },
    textLineThrough:{
        textDecorationLine: 'line-through'
    },
    description:{
        flex:1,
        alignSelf: 'center'
    },
    card:{
        flex:1,
        flexDirection: 'row',
        marginBottom:10,
        padding: 5
    },
    checkbox:{
        alignSelf: 'center'
    },
    delIcon:{
        alignSelf: 'center',
        color: '#e02e0b',
        fontSize: 20
        
    }
});