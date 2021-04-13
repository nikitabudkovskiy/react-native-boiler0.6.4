import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native';
import { Onboadrding } from './src/modules/onboarding/view/Onboadrding'

const App = () => {

  return (
    // <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <Onboadrding />
      </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
