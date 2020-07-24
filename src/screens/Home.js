import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Home = ({ componentId }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>React Native Boilerplate</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
  },
});

export default Home;
