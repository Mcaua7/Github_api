/* eslint-disable react/prop-types */
import { View, Text } from "react-native";
import * as React from "react";
import Fetch from "../Fetch/Functions/FuntionsGet";
import styles from "./NomeStyle";
import { useLocalSearchParams } from "expo-router";

// Aqui vou importar o nome e o login (@) do usuário

export default function Nome() {
  const login = useLocalSearchParams();
  return (
    <View style={styles.name}>
      <Text style={styles.nameText}>{Fetch.GetName(login.user)}</Text>
      <Text style={styles.loginText}>@{Fetch.GetLogin(login.user)}</Text>
    </View>
  );
}
