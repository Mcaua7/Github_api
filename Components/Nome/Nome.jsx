import { View, Text } from "react-native";
import Fetch from "../Fetch/Functions/FuntionsGet";
import styles from "./NomeStyle";

// Aqui vou importar o nome e o login (@) do usuário

export default function Nome(props) {

    return(
        <View style={styles.name}>
            <Text style={styles.nameText}>{Fetch.GetName(props.busca)}</Text>
            <Text style={styles.loginText}>@{Fetch.GetLogin(props.busca)}</Text>
        </View>
    )
    
};