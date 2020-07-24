import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Icon name="ios-settings" size={100} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    margin: 16,
    textAlign: 'center',
  },
});

export default Settings;
