import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

export default function CryptoHero({ onGetStarted }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jump start your crypto portfolio</Text>
      <Text style={styles.subtitle}>
        Take your investment portfolio to next level
      </Text>
      <CustomButton title="Get Started" onPress={onGetStarted} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    alignItems: 'flex-start',
    marginBottom: 40,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
    lineHeight: 38,
  },
  subtitle: {
    color: '#A0A0A0',
    fontSize: 14,
    marginBottom: 32,
    lineHeight: 20,
  },
});
