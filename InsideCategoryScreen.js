import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const InsideCategoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inside Category Screen</Text>
      <Button
        title="Show Image"
        onPress={() => navigation.navigate('ShowImage')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default InsideCategoryScreen;
