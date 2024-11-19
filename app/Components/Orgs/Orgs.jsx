import { View, Text, TouchableOpacity } from "react-native";
import * as React from "react";
import styles from "./OrgsStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function Orgs() {
  const login = useLocalSearchParams();
  const user = login.user;

  function Route() {
    router.push({ pathname: "/Pages/Orgs", params: { user } });
  }
  return (
    <TouchableOpacity style={styles.button} onPress={Route}>
      <View style={styles.viewOrgs}>
        <View style={styles.viewIcon}>
          <Ionicons style={styles.icon} name="headset-outline" size={23} />
        </View>

        <View style={styles.Info}>
          <View style={styles.viewTitle}>
            <Text style={styles.title}>Orgs:</Text>
            <Text>Organizações que usuário faz parte</Text>
          </View>
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
