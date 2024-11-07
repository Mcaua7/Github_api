import { View, Text, TextInput, TouchableOpacity, Image, } from "react-native";
import { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "./ProfileStyles";
import Avatar from "../Avatar/Avatar";
import Nome from "../Nome/Nome";
import Bio from "../Bio/Bio";
import Repos from "../Repos/Repos";
import FollowersInfo from "../Followers/Followers"
import Orgs from "../Orgs/Orgs";


const exibir = () => {
    const [user , setUser] = useState(null)
    const [search, setSearch] = useState(false)

    function Validate(search) {
        if (search !== null && search !== undefined) {
            setSearch(true)
        }
    }

    function Reset(search){
        setSearch(false)
        setUser(null)
    }

    if (search === false){
        return(
            <View style={styles.search}>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>Perfil Github</Text>
                    <Image style={styles.image} source={{uri: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'}}/>
                </View>
                <View style={styles.viewInput}>
                    <View style={styles.input}>
                        <TextInput 
                        style={styles.loginInput} 
                        placeholder="Digite um usuário" 
                        onChangeText={setUser}
                        value={user}/>
                    </View>
                    <TouchableOpacity onPress={Validate}>
                        <Ionicons style={styles.searchButton} name='search-circle' size={20} />
                        </TouchableOpacity>
                </View>
                
            </View>
        )
    }else{
        return(
            <View style={styles.container}>
                <View style={styles.MainInformations}>
                    <Avatar busca={user}/>
                    <Nome busca={user}/>
                </View>
                <View style={styles.MoreInformations}>
                    <Bio busca={user}/>
                    <Orgs busca={user}/>
                    <Repos busca={user}/>
                    <FollowersInfo busca={user}/>
                </View> 
                <View style={styles.reset}>
                    <TouchableOpacity style={styles.buttonReset} onPress={Reset}>
                        <Text>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default function Profile() {

    return(
        exibir()
    )
};