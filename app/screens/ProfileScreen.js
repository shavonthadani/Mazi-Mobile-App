import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.statContainer}>
        <View style={[styles.statItem, { flex: 1 }]}>
          <FontAwesome name="bolt" size={30} color="#F5D742" />
          <Text style={styles.statValue}>15%</Text>
        </View>
        <View style={[styles.statItem, { flex: 1 }]}>
          <FontAwesome name="leaf" size={30} color="#70C582" />
          <Text style={styles.statValue}>10 kg CO2</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Logout')}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#061636',
    padding: 20,
    width: '90%',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  statValue: {
    marginLeft: 10,
    fontSize: 20,
    color: 'white',
  },
  button: {
    backgroundColor: '#70C582',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
