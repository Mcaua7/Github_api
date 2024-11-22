import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import * as React from "react";
import styles from "./styles";
import Fetch from "../../Components/Fetch/Functions/FuntionsGet";
import { useLocalSearchParams, router } from "expo-router";

export default function Followers() {
  const login = useLocalSearchParams();

  function GoBack() {
    router.back();
  };

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

      <View style={styles.containerFollower}>
        <Text style={styles.title}>Seguidores:</Text>
        <FlatList
          data={Fetch.GetFollowersLogin(login.user)}
          renderItem={({ item }) => (
            <View style={styles.viewFollower}>
              <Image
                style={styles.followerAvatar}
                source={{ uri: item.avatar }}
              ></Image>
              <Text style={styles.followerLogin}>{item.login}</Text>
            </View>
          )}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={GoBack}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
