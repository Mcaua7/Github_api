import { View, Text, FlatList } from "react-native";
import Fetch from "../Fetch/Functions/FuntionsGet";
import styles from "./ReposStyle";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Repos(props) {
    console.log("repos says",Fetch.GetRepos(props.busca))

    return(

        <View style={styles.viewRepos}>
            <View style={styles.viewIcon}>
                <Ionicons name="file-tray-full-outline" size={27}/>
            </View>
            <View style={styles.Info}>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>Repos:</Text>
                </View>

                <FlatList 
                    data={Fetch.GetRepos(props.busca)} 
                    renderItem={({item}) => <View><Text>{item}, </Text></View>}
                    numColumns={3}
                />

            </View>
        </View>
    )
    
};