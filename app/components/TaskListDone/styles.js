import { StyleSheet } from 'react-native';
/* TaskListDone styles */
export default StyleSheet.create({
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