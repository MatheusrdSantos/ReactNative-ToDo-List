import { StyleSheet } from 'react-native';
/* styles for taskList */
export default StyleSheet.create({
    textInput: {
        color: 'white',
        width: '70%'
    },
    container: {
        flex:1,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
    },
    sectionHeader:{
        fontWeight: 'bold',
        fontSize: 20 
    }
});