import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ShowImageScreen = () => {
    const imageUrl = 'https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png';
  return (
    <View style={styles.container}>
      <Image
        source={require({ uri: `${imageUrl}`})}
        style={{
            width: 51,
            height: 51,
            resizeMode: 'contain',
          }}
        
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
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

export default ShowImageScreen;
