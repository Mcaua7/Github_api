import { View, Text, FlatList } from "react-native";
import Fetch from "../Fetch/Functions/FuntionsGet";
import styles from "./OrgsStyle";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Orgs(props) {
    console.log("orgs says",Fetch.GetOrgs(props.busca))

    return(

        <View style={styles.viewOrgs}>
            <View style={styles.viewIcon}>
                <Ionicons style={styles.icon} name="headset-outline" size={23}/>
            </View>

            <View style={styles.Info}>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>Orgs:</Text>
                </View>
                
                <FlatList 
                    data={Fetch.GetOrgs(props.busca)} 
                    renderItem={({item}) => <Text>{item}</Text>}
                   horizontal
                /> 
            </View>

        </View>
    )
    
};