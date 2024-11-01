import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Fetch from './Components/Fetch/Functions/FuntionsGet';
import Profile from './Components/Profile/Profile';

export default function App() {

  const [user , setUser] = useState('ronaldaraujo')

  return (
    <View style={styles.container}>
      
      <View>
        <Profile/>
        <Text>{Fetch.GetRepos(user)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(247, 248, 252)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
