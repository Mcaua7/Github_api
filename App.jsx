import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Fetch from './Components/Fetch/Functions/FuntionsGet';
import Profile from './Components/Profile/Profile';

export default function App() {

  return (
    <View style={styles.container}>
      
      <View>
        <Profile/> 
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
