import { View, Text, TouchableOpacity } from "react-native";
import * as React from "react";
import styles from "./ReposStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function Repos() {
  const login = useLocalSearchParams();
  const user = login.user;

  function Route() {
    router.push({ pathname: "/Pages/Repos", params: { user } });
  }

  return (
    <TouchableOpacity style={styles.button} onPress={Route}>
      <View style={styles.viewRepos}>
        <View style={styles.viewIcon}>
          <Ionicons name="file-tray-full-outline" size={27} />
        </View>

        <View style={styles.Info}>
          <Text style={styles.title}>Repos:</Text>
          <Text>Lista de repositórios</Text>
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
