import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "./ProfileStyles";
import Fetch from "../Fetch/Functions/FuntionsGet";


export default function Profile() {

    const [user , setUser] = useState('Mcaua7')
    console.log(user)


    return(
        <View style={styles.profile}>
            <TextInput style={styles.profileInput} placeholder="Digite um usuário" ></TextInput>
            <TouchableOpacity style={styles.searchButton} >
                <Ionicons name='search' size={23} />
            </TouchableOpacity>
            <Text>@{Fetch.GetLogin(user)}</Text>
            <Text>{Fetch.GetName(user)}</Text>
            <Image style={{height: 300, width: 300}} source={{uri: Fetch.GetAvatar(user)}}></Image>
        </View>
    )
}