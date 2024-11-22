import { View, Text, Image, TouchableOpacity } from "react-native";
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

      <View style={styles.viewBio}>
        <Text style={styles.title}>Bio:</Text>
        <Text style={styles.bio}>{Fetch.GetBio(login.user)}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={GoBack}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
