import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { id: 'js', title: '🚀 JavaScript', icon: 'logo-javascript' },
  { id: 'react', title: '⚛️ React Native', icon: 'logo-react' },
  { id: 'state', title: '🎯 State Management', icon: 'sync' },
  { id: 'python', title: '🐍 Python', icon: 'logo-python' },
  { id: 'node', title: '🔧 Node.js', icon: 'server' },
  { id: 'algorithms', title: '🧠 Algorithms', icon: 'code-slash' },
  { id: 'cybersecurity', title: '🔒 Cybersecurity', icon: 'shield-checkmark' },
  { id: 'ai', title: '🤖 AI & ML', icon: 'construct' },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const scaleAnim = new Animated.Value(1);

  const handlePress = (categoryId) => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start(() => {
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }).start();
      navigation.navigate('Tutorials', { categoryId });
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🚀Start Your Coding Adventure with CodeMaster!</Text>
      <Text style={styles.subheader}>📚 Select a topic:</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <Animated.View style={[styles.animatedView, { transform: [{ scale: scaleAnim }] }]}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => handlePress(item.id)}
            >
              <Ionicons name={item.icon} size={40} color="#ffffff" />
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2C',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E4E4E4',
    textAlign: 'center',
    marginBottom: 15,
  },
  subheader: {
    fontSize: 20,
    color: '#A6A6A6',
    textAlign: 'center',
    marginBottom: 20,
  },
  animatedView: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  item: {
    backgroundColor: '#29293D',
    padding: 25,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
    flex: 1,
    width: 150,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#E4E4E4',
    marginTop: 10,
    textAlign: 'center',
  },
});
