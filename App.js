import { NavigationContainer } from '@react-navigation/native'; 
import MainNavigator from './src/navigation/MainNavigator';
import { ProgressProvider } from './src/components/ProgressContext';

// Kontrollo nëse importet janë të sakta
console.log("MainNavigator:", MainNavigator);
console.log("ProgressProvider:", ProgressProvider);

export default function App() {
  return (
    <ProgressProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ProgressProvider>
  );
}