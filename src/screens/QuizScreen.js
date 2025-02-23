import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { javascriptQuizzes } from '../data/quizzes';
import { useProgress } from '../components/ProgressContext';

export default function QuizScreen({ route, navigation }) {
  const { quizId } = route.params || {};
  const { updateProgress } = useProgress();

  console.log("Received Quiz ID:", quizId);

  const quiz = javascriptQuizzes.find(q => q.id === quizId) || javascriptQuizzes[0];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (index) => {
    if (!showResults) {
      const newSelected = [...selectedAnswers, index];
      setSelectedAnswers(newSelected);

      const isCorrect = quiz.questions[currentQuestion].correctAnswers.includes(index);
      if (isCorrect) setScore(score + 1);

      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
        // Ruajmë progresin pas përfundimit të kuizit
        updateProgress(quiz.id, score, null);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{quiz.title}</Text>

      {showResults ? (
        <View style={styles.results}>
          <Text style={styles.score}>Score: {score}/{quiz.questions.length}</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Back to Tutorials</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.questionContainer}>
          <Text style={styles.questionNumber}>
            Question {currentQuestion + 1}/{quiz.questions.length}
          </Text>
          <Text style={styles.questionText}>
            {quiz.questions[currentQuestion].question}
          </Text>

          {quiz.questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleAnswer(index)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  questionContainer: {
    flex: 1,
  },
  questionNumber: {
    fontSize: 16,
    color: '#B0BEC5',
    marginBottom: 10,
    textAlign: 'center',
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
    color: '#E0E0E0',
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#333333',
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#444444',
    elevation: 5,
  },
  optionText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  results: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    fontSize: 28,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
    width: '80%',
    elevation: 8,
  },
  buttonText: {
    color: '#121212',
    fontSize: 18,
    textAlign: 'center',
  },
});
