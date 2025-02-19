// /src/components/ProgressContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 1) Krijo Kontekstin
const ProgressContext = createContext();

// 2) Krijo Komponentin Provider
export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState({
    completedQuizzes: {}, // p.sh., { "js1": true, "js2": true }
    completedTutorials: [], // p.sh., ["Introduction to RN", "JavaScript Basics"]
    scores: {}, // p.sh., { "js1": 4, "js2": 3 }
  });

  // Ngarko progresin nga AsyncStorage kur komponenti ngrihet
  useEffect(() => {
    loadProgress();
  }, []);

  // Funksioni për të ngarkuar progresin nga AsyncStorage
  const loadProgress = async () => {
    try {
      const savedProgress = await AsyncStorage.getItem('@progress');
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error('Dështoi ngarkimi i progresit:', error);
    }
  };

  // Funksioni për të ruajtur progresin në AsyncStorage
  const saveProgress = async (newProgress) => {
    try {
      await AsyncStorage.setItem('@progress', JSON.stringify(newProgress));
      setProgress(newProgress);
    } catch (error) {
      console.error('Dështoi ruajtja e progresit:', error);
    }
  };

  // Llogarit progresin total
  const calculateProgress = () => {
    const totalQuizzes = Object.keys(progress.completedQuizzes).length;
    const totalTutorials = progress.completedTutorials.length;

    const completedQuizzes = Object.values(progress.completedQuizzes).filter((completed) => completed).length;
    const completedTutorials = progress.completedTutorials.length;

    const quizProgress = totalQuizzes === 0 ? 0 : (completedQuizzes / totalQuizzes) * 50; // 50% për quiz
    const tutorialProgress = totalTutorials === 0 ? 0 : (completedTutorials / totalTutorials) * 50; // 50% për tutoriale

    return quizProgress + tutorialProgress; // Përqindja totale
  };

  // Kthe Provider-in me vlerat (progress, saveProgress, calculateProgress)
  return (
    <ProgressContext.Provider value={{ progress, saveProgress, calculateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

// 3) Krijo një hook për përdorim më të lehtë të kontekstit
export function useProgress() {
  return useContext(ProgressContext);
}
