import { View, Text, TouchableOpacity, Image, TextInput, Alert, } from "react-native";
import * as React from "react";
import { useState } from "react";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

export default function Search() {
  const [user, setUser] = useState();

  function Validate() {
    if (user){
      router.push({pathname: "/Pages/Profile", params: {user}})
    }
    else{
      return(
        Alert.alert('ATENÇÃO:', 'Digite um login do usuário')
      )
    }
  }
  return (
    <View style={styles.search}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Perfil Github</Text>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          }}
        />
      </View>
      <View style={styles.viewInput}>
        <View style={styles.input}>
          <TextInput
            style={styles.loginInput}
            placeholder="Digite um usuário"
            onChangeText={setUser}
            value={user}
          />
        </View>

        <TouchableOpacity onPress={Validate}>
          <Ionicons
            style={styles.searchButton}
            name="search-circle"
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
