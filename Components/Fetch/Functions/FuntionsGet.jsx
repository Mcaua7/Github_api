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
        console.log("avatar", avatar)
        
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

        if(bio === null){
            setBio("Esse usuário não possui bio")
        }

        return bio
    },

    GetOrgs: function(user) {
        const [orgUrl, setOrgsUrl] = useState([])
        const [noOrgs, setNoOrgs] = useState()

        useEffect(() => {
            const api = 'https://api.github.com/users/' 
            const userUrl = api.concat('',user)
            const url = userUrl.concat('/orgs')
            const token = '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'

            console.log(url)

            const FetchOrgs = async() => {
                const response = await fetch(url, {headers: {
                    Authorization: `token ${token}`
                  }})
                const getOrgsUrl = await response.json()
                
                setOrgsUrl(getOrgsUrl.map(item => item.url))
                
            }
            
            FetchOrgs()

        }, [])

        if(!orgUrl.length){
            setNoOrgs("Este usuário não poussui organizações")
            setOrgsUrl(["Este usuário não poussui organizações"])
            return orgUrl
        }else{
            console.log('url org', orgUrl)
            return orgUrl
        }
        
    },
    
    GetRepos: function(user) {
        const [repos, setRepos] = useState([])

        useEffect(() => {
            const api = 'https://api.github.com/users/' 
            const userUrl = api.concat('',user)
            const url = userUrl.concat('/repos')
            const token = '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'

            console.log(url)

            const FetchRepos = async() => {
                const response = await fetch(url, {headers: {
                    Authorization: `token ${token}`
                  }})
                const getRepos = await response.json()

                setRepos(getRepos.map(item => item.name))
            }

            FetchRepos()
            console.log('Lista de repositórios', repos)
           
        }, [])

        if( !repos.length){
            setRepos("Este usuário não poussui repositórios")
        }

        return repos
    },

    GetFollowersLogin: function(user){
        const [followersLogin, setFollowerLogin] = useState([])

        useEffect(() => {
            const api = 'https://api.github.com/users/' 
            const userUrl = api.concat('',user)
            const url = userUrl.concat('/followers')
            const token = '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'

            console.log(url)

            const FetchFollowersLogin = async() => {
                const response = await fetch(url, {headers: {
                    Authorization: `token ${token}`
                  }})
                const getFollowersLogin = await response.json()

                setFollowerLogin(getFollowersLogin.map(item => ({login: item.login, avatar: item.avatar_url})))
                console.log(followersLogin)
            };

            FetchFollowersLogin() 
        }, [])
        if(!followersLogin.length){
            setFollowerLogin("Este usuário não poussui seguidores")
        }
        return followersLogin
    },

}

export default Fetch