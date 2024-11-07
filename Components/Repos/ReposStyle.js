import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewRepos:{
        flex: 0,
        flexDirection: 'row',
        padding: 10,
        borderColor: 'lightgrey',
        width: '100%',
        height:'25%',
        borderBottomWidth: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'

    },
    viewIcon:{
        flex: 0,
        borderWidth: 1,
        width: 40,
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'lightgrey',
        marginRight: 10,
        padding: 5
    },
    icon:{
        fontWeight: 'bold',
        fontSize: 30
    },
    Info:{
        flex: 1,
        flexDirection: 'collumn',
    },
    viewTitle:{
        flex: 1
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    item:{
        flexBasis: 0
    },
    viewList:{
        flex: 2,
        justifyContent:'flex-start',
        paddingLeft: 5,
    },


})

export default styles