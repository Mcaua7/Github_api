import { useState, useEffect } from 'react';


const Fetch = {

    GetLogin: function(user) {

        const [login,setLogin] = useState(null);

        useEffect(() => {
            const api = 'https://api.github.com/users/' 
            const url = api.concat('', user)
            fetch(url)
                .then((response) => response.json())
                .then((data) => setLogin(data.login))
        }, []);
        return login
    },

    GetName: function (user) {
        const [name,setName] = useState(null);

        useEffect(() => {
            const api = 'https://api.github.com/users/' 
            const url = api.concat('', user)
            fetch(url)
                .then((response) => response.json())
                .then((data) => setName(data.name))
        }, []);

        return name
    },

    GetAvatar: function(user) {
        const [avatar,setAvatar] = useState(null);

        useEffect(() => {
            const api = 'https://api.github.com/users/' 
            const url = api.concat('', user)
            fetch(url)
                .then((response) => response.json())
                .then((data) => setAvatar(data.avatar_url)) 
        }, []);

        return avatar
    },
    
    GetBio: function(user) {
        const [bio, setBio] = useState(null);

        useEffect(() => {
            const api = 'https://api.github.com/users/' 
            const url = api.concat('', user)
            console.log(url)
            fetch(url)
                .then((response) => response.json())
                .then((data) => setBio(data.bio))
        }, []);

        return bio
    },

    GetOrgs: function(user) {
        const [orgsUrl, setOrgsUrl] = useState(null)

        useEffect(() => {
            const api = 'https://api.github.com/users/' 
            const url = api.concat('', user)
            fetch(url)
                .then((response) => response.json)
                .then((data) => setOrgsUrl(data.organizations_url))
        })
        console.log(orgsUrl)
    },
    
}

export default Fetch