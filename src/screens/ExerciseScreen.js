import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ExerciseScreen({ route }) {
  const { exercise } = route.params;
  const navigation = useNavigation();

  const [code, setCode] = useState('');
  const [result, setResult] = useState('');

  const checkSolution = () => {
    const cleanCode = code.replace(/\s/g, '');
    const cleanSolution = exercise.solution.replace(/\s/g, '');

    if (cleanCode === cleanSolution) {
      setResult('✅ Correct! Great job! 🎉');
    } else {
      setResult('❌ Incorrect! Try again! 💪');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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

        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back to Exercises</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#34495E',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  codeInput: {
    width: '100%',
    borderColor: '#BDC3C7',
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
    marginBottom: 25,
    fontSize: 16,
    backgroundColor: '#fff',
    minHeight: 150,
    fontFamily: 'monospace',
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: '#95a5a6',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  result: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    textAlign: 'center',
    color: '#2C3E50',
  },
});
