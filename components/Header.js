import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;