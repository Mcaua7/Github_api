
import { StyleSheet, View } from 'react-native';
import * as React from 'react';
import Search from './Pages/Search';

export default function App() {

  return (
    <View style={styles.container}>
      <View>
        <Search/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(247, 248, 252)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
