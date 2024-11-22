import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import * as React from "react";
import styles from "./styles";
import Fetch from "../../Components/Fetch/Functions/FuntionsGet";
import { useLocalSearchParams, router } from "expo-router";

export default function Bio() {
  const login = useLocalSearchParams();

  function GoBack() {
    router.back();
  }

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          source={{ uri: Fetch.GetAvatar(login.user) }}
          style={styles.image}
        />
        <Text style={styles.name}>{Fetch.GetName(login.user)}</Text>
        <Text style={styles.login}>@{Fetch.GetLogin(login.user)}</Text>
      </View>

      <View style={styles.viewOrgs}>
        <Text style={styles.title}>Orgs:</Text>
        <FlatList
          data={Fetch.GetOrgs(login.user)}
          renderItem={({ item }) => <Text style={styles.orgs}>{item}</Text>}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={GoBack}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
