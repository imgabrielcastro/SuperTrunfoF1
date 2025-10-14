import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';

interface Driver {
  id: number;
  name: string;
  description: string;
  image: string;
  team: string;
  country: string;
  stars: number;
}

interface DriverCardProps {
  driver: Driver;
}

export default function DriverCard({ driver }: DriverCardProps) {
  return (
      <View style={styles.card}>
        <Image source={{ uri: driver.image }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.name}>{driver.name}</Text>
          <Text style={styles.team}>{driver.team}</Text>
          <Text style={styles.country}>{driver.country}</Text>
          <Text style={styles.description}>{driver.description}</Text>
          <Text style={styles.stars}>{'⭐'.repeat(driver.stars)}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 5,
    width: SCREEN_WIDTH * 0.8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: SCREEN_WIDTH * 0.85,
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  team: {
    fontSize: 18,
    color: '#666',
    marginBottom: 4,
  },
  country: {
    fontSize: 16,
    color: '#888',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    lineHeight: 20,
  },
  stars: {
    fontSize: 18,
  },
});
