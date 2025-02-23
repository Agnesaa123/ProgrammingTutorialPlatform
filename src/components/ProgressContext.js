import React, { createContext, useContext, useState } from 'react';

// Krijo kontekstin për progresin
const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState({
    scores: {}, // Përshtat për të mbajtur rezultatet e kuizeve
    completedExercises: [], // Përshtat për ushtrimet e përfunduara
  });

  const updateProgress = (quizId, score, completedExercise) => {
    setProgress((prevProgress) => {
      let updatedScores = { ...prevProgress.scores };
      updatedScores[quizId] = score;

      let updatedExercises = [...prevProgress.completedExercises];
      if (completedExercise && !updatedExercises.includes(completedExercise)) {
        updatedExercises.push(completedExercise);
      }

      return {
        scores: updatedScores,
        completedExercises: updatedExercises,
      };
    });
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};
