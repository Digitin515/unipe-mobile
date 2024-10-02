import React from 'react';
import type {PropsWithChildren} from 'react';
import { View, SafeAreaView, Text, Button, StyleSheet, useColorScheme, Image } from 'react-native';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function SplashScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText: styles.blackText}>Welcome to</Text>
        <Image source={{
          uri: 'https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }} style={styles.cardImage}></Image>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  whiteText: {
    color: '#fff'
  },
  blackText: {
    color: '#000',
    fontSize: 32
  },
  titleText: {
    fontSize: 40
  },
  cardImage: {
    width: 100,
    height: 100
  }
})

export default SplashScreen;