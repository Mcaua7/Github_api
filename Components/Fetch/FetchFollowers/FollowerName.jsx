import { useEffect, useState } from "react";
import { View, Text  } from "react-native";

{/*função que busca o nome do usuário pesquisado */}

export default function GetName() {

    const [user , setUser] = useState('ronaldaraujo')
    const [name,setName] = useState(null);

    useEffect(() => {
        const api = 'https://api.github.com/users/' 
        const url = api.concat('', user)
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((data) => setName(data.name))
    }, []);

    return(
        <View/>
    )
  
}