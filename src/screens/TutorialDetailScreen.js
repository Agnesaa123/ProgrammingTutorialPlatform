import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { javascriptQuizzes } from '../data/quizzes';
import { javascriptExercises } from '../data/exercises';

export default function TutorialDetailScreen({ route, navigation }) {
  const { tutorial, quizId, exerciseId, category } = route.params || {};
  const quiz = javascriptQuizzes.find(q => q.id === quizId);
  
  const exercise = javascriptExercises.find(e => e.id === exerciseId);

  const htmlContent = `
    <html>
      <head>
        <style>
          body { font-family: 'Arial', sans-serif; padding: 20px; background-color: #121212; color: #E0E0E0; }
          h1 { color: #FFFFFF; font-size: 32px; font-weight: bold; }
          p { font-size: 16px; color: #B0BEC5; line-height: 1.6; }
          pre {
            background: #1E1E1E;
            padding: 15px;
            border-radius: 8px;
            overflow-x: auto;
            color: #E0E0E0;
            font-size: 14px;
            border: 1px solid #333333;
          }
        </style>
      </head>
      <body>
        <h1>${tutorial?.title || 'Default Tutorial Title'}</h1>
        <p>${tutorial?.description || 'This is an example tutorial detail.'}</p>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{tutorial?.title || 'Tutorial Detail'}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#1E88E5' }]}
          onPress={() => {
            if (quiz) {
              navigation.navigate('Quiz', { quizId: quiz.id });
            } else {
              console.warn("Quiz not found");
            }
          }}
        >
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#43A047' }]}
          onPress={() => {
            if (exercise) {
              navigation.navigate('Exercise', { exerciseId: exercise.id, category: exercise.category });
            } else {
              console.warn("Exercise not found");
            }
          }}
        >
          <Text style={styles.buttonText}>Try Exercise</Text>
        </TouchableOpacity>
      </View>

      <WebView originWhitelist={['*']} source={{ html: htmlContent }} style={styles.webview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',  // E bardhë
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  webview: {
    flex: 1,
  },
});
