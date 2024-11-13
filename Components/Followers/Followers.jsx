import { View, Text, FlatList, Image } from "react-native";
import Fetch from "../Fetch/Functions/FuntionsGet";
import styles from "./followersStyle";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function FollowersInfo(props) {
  return (
    <View style={styles.viewFollowers}>
      <View style={styles.viewIcon}>
        <Ionicons name="happy-outline" size={27} />
      </View>

      <View style={styles.Info}>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>Followers:</Text>
        </View>
        <View style={styles.viewList}>
          <FlatList
            data={Fetch.GetFollowersLogin(props.busca)}
            renderItem={({ item }) => (
              <View style={styles.viewFollower}>
                <Image
                  style={styles.followerAvatar}
                  source={{ uri: item.avatar }}
                ></Image>
                <Text style={styles.followerLogin}>{item.login}</Text>
              </View>
            )}
            numColumns={2}
          />
        </View>
      </View>
    </View>
  );
}
