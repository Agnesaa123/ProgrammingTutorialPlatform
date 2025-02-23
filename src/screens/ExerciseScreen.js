import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { javascriptExercises } from '../data/exercises';
import { useProgress } from '../components/ProgressContext';

export default function ExerciseScreen({ route, navigation }) {
  const { exerciseId, category } = route.params || {};
  const { updateProgress } = useProgress();

  const exercise = javascriptExercises.find(e => e.id === exerciseId && e.category === category);

  const [code, setCode] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!exercise) {
      navigation.goBack();
    } else {
      setLoading(false);
    }
  }, [exercise, navigation]);

  const checkSolution = () => {
    const cleanCode = code.replace(/\s+/g, '');
    const cleanSolution = exercise.solution.replace(/\s+/g, '');
    const isCorrect = cleanCode === cleanSolution;
    setResult(isCorrect ? '✅ Correct, great job! 🎉' : '❌ Try again! 💪');

    if (isCorrect) {
      updateProgress(null, null, exercise.title); // Regjistro ushtrimin si të përfunduar
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading...</Text>
      </View>
    );
  }

  if (!exercise) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.title}</Text>
      <Text style={styles.description}>{exercise.description}</Text>

      <TextInput
        style={styles.codeInput}
        multiline
        placeholder="Write your code here..."
        value={code}
        onChangeText={setCode}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TouchableOpacity style={styles.button} onPress={checkSolution}>
        <Text style={styles.buttonText}>Check Solution</Text>
      </TouchableOpacity>

      {result ? <Text style={styles.result}>{result}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1E1E1E',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#B0BEC5',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#B0B0B0',
    marginBottom: 20,
    textAlign: 'center',
  },
  codeInput: {
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#E0E0E0',
    backgroundColor: '#2C2C2C',
    height: 150,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  result: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
});
