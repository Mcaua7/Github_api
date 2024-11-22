import { View, Text, TouchableOpacity } from "react-native";
import * as React from "react";
import styles from "./BioStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function Bio() {
  const login = useLocalSearchParams();
  const user = login.user;

  function Route() {
    router.push({ pathname: "/Pages/Bio", params: { user } });
  }

  return (
    <TouchableOpacity style={styles.button} onPress={Route}>
      <View style={styles.viewBio}>
        <View style={styles.viewIcon}>
          <Ionicons style={styles.icon} name="person-outline" size={23} />
        </View>

        <View style={styles.Info}>
          <Text style={styles.title}>Bio:</Text>
          <Text styel={styles.bio}>Um pouco sobre o usuário</Text>
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
