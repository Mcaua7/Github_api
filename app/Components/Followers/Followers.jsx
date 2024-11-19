import { View, Text, TouchableOpacity } from "react-native";
import * as React from "react";
import styles from "./followersStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function FollowersInfo() {
  const login = useLocalSearchParams();
  const user = login.user;

  function Route() {
    router.push({ pathname: "/Pages/Followers", params: { user } });
  }

  return (
    <TouchableOpacity style={styles.button} onPress={Route}>
      <View style={styles.viewFollowers}>
        <View style={styles.viewIcon}>
          <Ionicons name="happy-outline" size={27} />
        </View>

        <View style={styles.Info}>
          <Text style={styles.title}>Followers:</Text>
          <Text style={styles.followerLogin}>Lista de seguidores</Text>
        </View>

        <View style={styles.arrowIcon}>
          <Ionicons
            style={styles.icon}
            name="chevron-forward-outline"
            size={23}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
