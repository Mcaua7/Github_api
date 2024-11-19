import { View, Image } from "react-native";
import * as React from 'react';
import styles from "./AvatarStyles";
import Fetch from "../Fetch/Functions/FuntionsGet";
import { useLocalSearchParams } from "expo-router";

export default function Avatar() {
  const login = useLocalSearchParams()
  return (
    <View style={styles.ImageView}>
      <Image
        style={styles.Image}
        source={{ uri: Fetch.GetAvatar(login.user) }}
      />
    </View>
  );
}
