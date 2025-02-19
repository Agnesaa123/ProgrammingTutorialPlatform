import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

// Importet e quiz-eve dhe ushtrimeve
import { javascriptQuizzes } from '../data/quizzes';
import { javascriptExercises } from '../data/exercises';

export default function TutorialDetailScreen({ route, navigation }) {
  const { tutorial,quizId,exerciseId } = route.params;
  
  const quiz = javascriptQuizzes.find(q => q.id === quizId);
  const exercise = javascriptExercises.find(e => e.id === exerciseId);

  const htmlContent = `
    <html>
      <head>
        <style>
          body { font-family: sans-serif; padding: 20px; }
          h1 { color: #2c3e50; }
          pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
          }
        </style>
      </head>
      <body>
        <h1>${tutorial?.title || 'Default Tutorial Title'}</h1>
        <p>This is an example tutorial detail.</p>
        <pre>
function greet() {
  console.log("Hello, World!");
}
        </pre>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{tutorial?.title || 'Tutorial Detail'}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Quiz', { quiz: quiz })}
      >
        <Text style={styles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Exercise', { exercise: exercise, exerciseList: exercises })}
      >
        <Text style={styles.buttonText}>Practice Exercise</Text>
      </TouchableOpacity>
      <WebView originWhitelist={['*']} source={{ html: htmlContent }} style={styles.webview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e3f2fd', // Light blue background
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#0d47a1', // Dark blue color
  },
  button: {
    backgroundColor: '#1565c0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },
  webview: {
    flex: 1,
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
});