import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewBio:{
        flex: 0,
        flexDirection: 'row',
        padding: 10,
        borderColor: 'lightgrey',
        width: '100%',
        height:'25%',
        borderBottomWidth: 1,
        justifyContent: 'space-evenly',
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
        padding: 5,

    },
    icon:{
        fontWeight: 'bold',
        fontSize: 30
    },
    Info:{
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    },


})

export default styles