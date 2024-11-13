import { View, Text, FlatList } from "react-native";
import Fetch from "../Fetch/Functions/FuntionsGet";
import styles from "./ReposStyle";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Repos(props) {
  return (
    <View style={styles.viewRepos}>
      <View style={styles.viewIcon}>
        <Ionicons name="file-tray-full-outline" size={27} />
      </View>
      <View style={styles.Info}>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>Repos:</Text>
        </View>

        <View style={styles.viewList}>
          <FlatList
            data={Fetch.GetRepos(props.busca)}
            renderItem={({ item }) => (
              <View>
                <Text>{item} </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
