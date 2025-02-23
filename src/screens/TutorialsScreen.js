import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native';

export const tutorials = [
  { id: 'tutorial-js-basics', title: 'JavaScript Basics', category: 'JavaScript', quizId: 'js1', exerciseId: 'ex1' },
  { id: 'tutorial-es6-features', title: 'ES6 Features', category: 'JavaScript', quizId: 'es6-1', exerciseId: 'ex2' },
  { id: 'tutorial-react-components', title: 'React Components', category: 'React', quizId: 'react-1', exerciseId: 'ex3' },
  { id: 'tutorial-react-state-props', title: 'State & Props in React', category: 'React', quizId: 'react-2', exerciseId: 'ex4' },
  { id: 'tutorial-algorithms', title: 'Algorithms', category: 'Computer Science', quizId: 'algorithms-1', exerciseId: 'ex5' }, // Tutorial për Algoritme
  { id: 'tutorial-python-basics', title: 'Python Basics', category: 'Python', quizId: 'python-1', exerciseId: 'ex6' }, // Tutorial për Python
];

export default function TutorialsScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();

    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.header, { opacity: fadeAnim }]}>Available Tutorials</Animated.Text>

      <FlatList
        data={tutorials}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('TutorialDetail', { 
              tutorial: item,
              quizId: item.quizId,
              exerciseId: item.exerciseId
            })}
          >
            <Animated.View style={[styles.innerItem, { transform: [{ scale: scaleAnim }] }]}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.category}>{item.category}</Text>
            </Animated.View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212', // Sfond i errët
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF', // Ngjyrë e bardhë për titullin
    marginBottom: 25,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#1E1E1E', // Sfond i errët për kartat
    borderRadius: 15,
    marginBottom: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    overflow: 'hidden',
  },
  innerItem: {
    padding: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF', // Ngjyrë e bardhë për titujt
  },
  category: {
    fontSize: 14,
    color: '#B0BEC5', // Ngjyrë gri e butë për kategorinë
    marginTop: 5,
  },
});
