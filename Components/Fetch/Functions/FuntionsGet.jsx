import { useState, useEffect } from 'react';


const Fetch = {

    GetLogin: function(user) {

        const [login,setLogin] = useState(null);

        useEffect(() => {
            const api = 'https://api.github.com/users/' 
            const url = api.concat('', user)
            const token = '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'
            fetch(url, {headers: {
                Authorization: `token ${token}`
              }})
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
            const token = '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'
            fetch(url, {headers: {
                Authorization: `token ${token}`
              }})
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
            const token = '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'

            fetch(url, {headers: {
                Authorization: `token ${token}`
              }})
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
            const token = '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'

            console.log(url)
            fetch(url, {headers: {
                Authorization: `token ${token}`
              }})
                .then((response) => response.json())
                .then((data) => setBio(data.bio))
        }, []);

        return bio
    },
    
    GetRepos: function(user) {
        const [repos, setRepos] = useState([])

         useEffect(() => {
            const api = 'https://api.github.com/users/' 
            const userUrl = api.concat('',user)
            const url = userUrl.concat('/repos')
            const token = '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'

            console.log(url)
            
            fetch(url, {headers: {
                Authorization: `token ${token}`
              }})
              .then((response) => response.json())
              .then((data) => setRepos(data.repos))
            console.log(repos)

        })
    }
}

export default Fetch