import { View, TouchableOpacity, Text } from "react-native";
import * as React from "react";
import { router } from "expo-router";
import styles from "./styles";
import Avatar from "../../Components/Avatar/Avatar";
import Nome from "../../Components/Nome/Nome";
import Bio from "../../Components/Bio/Bio";
import Orgs from "../../Components/Orgs/Orgs";
import Repos from "../../Components/Repos/Repos";
import FollowersInfo from "../../Components/Followers/Followers";

export default function Profile() {
  function Reset() {
    router.back();
  }
  return (
    <View style={styles.container}>
      <View style={styles.MainInformations}>
        <Avatar />
        <Nome />
      </View>
      <View style={styles.MoreInformations}>
        <Bio />
        <Orgs />
        <Repos />
        <FollowersInfo />
      </View>
      <View style={styles.reset}>
        <TouchableOpacity style={styles.buttonReset} onPress={Reset}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
