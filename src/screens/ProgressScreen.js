import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useProgress } from '../components/ProgressContext';

export default function ProgressScreen() {
  const { progress } = useProgress();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📊 Your Progress</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🏆 Quiz Scores</Text>
        {Object.keys(progress.scores || {}).length ? (
          <FlatList
            data={Object.entries(progress.scores)}
            keyExtractor={([quizId]) => quizId}
            renderItem={({ item: [quizId, score] }) => (
              <Text style={styles.item}>
                🏅 {quizId}: <Text style={styles.score}>{score} points</Text>
              </Text>
            )}
          />
        ) : (
          <Text style={styles.noData}>No quiz scores yet.</Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📌 Completed Exercises</Text>
        {progress.completedExercises?.length ? (
          <FlatList
            data={progress.completedExercises}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <Text style={styles.item}>🎯 {item}</Text>}
          />
        ) : (
          <Text style={styles.noData}>No exercises completed yet.</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0D0D0D',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#B0BEC5',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#1A1A1A',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#29B6F6',
    marginBottom: 10,
  },
  item: {
    fontSize: 18,
    marginBottom: 5,
    color: '#FFEB3B',
  },
  score: {
    fontWeight: 'bold',
    color: '#76FF03',
  },
  noData: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#B0BEC5',
    textAlign: 'center',
  },
});
