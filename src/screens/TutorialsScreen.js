import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export const tutorials = [
  { id: 'tutorial-js-basics', title: 'JavaScript Basics', category: 'JavaScript', quizId: 'js1' },
  { id: 'tutorial-es6-features', title: 'ES6 Features', category: 'JavaScript', quizId: 'es6-1' },
  { id: 'tutorial-react-components', title: 'React Components', category: 'React', quizId: 'react-1' },
  { id: 'tutorial-react-state-props', title: 'State & Props in React', category: 'React', quizId: 'react-2' },
];

export default function TutorialsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Tutorials</Text>

      <FlatList
        data={tutorials}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('TutorialDetail', { tutorial: item })}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{item.category}</Text>
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
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2, // efekt i lehtë hijeje në Android
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  category: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});