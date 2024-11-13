import { View, Image } from "react-native";
import styles from "./AvatarStyles";
import Fetch from "../Fetch/Functions/FuntionsGet";

export default function Avatar(props) {
  return (
    <View style={styles.ImageView}>
      <Image
        style={styles.Image}
        source={{ uri: Fetch.GetAvatar(props.busca) }}
      />
    </View>
  );
}
