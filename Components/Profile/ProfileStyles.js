import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    //Antes de pesquisar
    search:{
        flex: 1,
        flexDirection: 'row',
        maragin: 30,
        border:4,
        borderColor:'red',
        paddingTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        flex: 0,
        height: 40,
        width:"80%",
        borderWidth: 2,
        borderColor: 'lightgrey',
        borderRadius: 10,
        paddingRight: 10,
        justifyContent: 'center',
        padding: 10,
        margin: 10
    },
    searchButton:{
        fontSize: 30,
        fontWeight: 'bold'
    },
    container:{
        flex: 1,
        flexDirection: 'collumn',
        maragin: 30,
        border:4,
        borderColor:'red',
        paddingTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },

    //Quando pesquisado
    MainInformations:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    MoreInformations:{
        flex: 1,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start'

    },
    reset:{
        flex: 0,
        backgroundColor: 'white',
        height: 90,
        width: '99%',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    buttonReset:{
        borderWidth: 2,
        borderRadius: 20,
        width: "80%",
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default styles