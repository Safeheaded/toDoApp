/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <View style={styles.mainView}>
        <Text style={styles.text}>
          Your app is working. To configure edit App.tsx
        </Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "black"
  }
});

export default App;