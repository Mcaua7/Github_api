import { View, Text } from "react-native";
import Fetch from "../Fetch/Functions/FuntionsGet";
import styles from "./BioStyles";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Bio(props) {

    return(
        <View style={styles.viewBio}>
            <View style={styles.viewIcon}>
                <Ionicons style={styles.icon} name="person-outline" size={23}/>
            </View>
            
            <View style={styles.Info}>
                <Text style={styles.title}>Bio:</Text>
                <Text styel={styles.bio}>{Fetch.GetBio(props.busca)}</Text>
            </View>
            
        </View>
    )
    
};