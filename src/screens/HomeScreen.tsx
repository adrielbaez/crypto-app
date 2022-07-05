import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { CustomButton } from '../components/button/CustomButton';
import { COLORS } from '../constants';
export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Image
          style={styles.image}
          source={{ uri: 'https://i.imgur.com/9EEaSaS.png' }}
        />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Make your first investment today</Text>
        <CustomButton title="Get Started" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  image: {
    height: 250,
    width: 150,
  },
  title: {
    color: 'black',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  subtitle: {
    color: COLORS.subtitle,
    fontSize: 17,
    marginBottom: 24,
  },
});
