import { useEffect, useState } from "react";
import { View, Text  } from "react-native";
import GetBio from "../FetchBio";
import GetLogin from "../FetchLogin";

{/*função que busca o arroba (@) do usuário pesquisado */}

export default function GetFollowerLogin() {

    GetLogin()
    console.log(GetLogin())
    const [user , setUser] = useState('ronaldaraujo')
    const [login,setLogin] = useState(null);

    useEffect(() => {
        const api = 'https://api.github.com/users/' 
        const url = api.concat('', user)
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((data) => setLogin(data.login))
    }, []);


}