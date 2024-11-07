
import { StyleSheet, View} from 'react-native';
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
    backgroundColor: 'rgb(247, 248, 252)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
