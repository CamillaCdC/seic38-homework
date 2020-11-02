import React, { useState } from "react";
import SearchForm from "./SearchForm";
import ExerciseList from "./ExerciseList";

function App() {
  const [exercises, setExercises] = useState([]);

  const addExercises = (exercise) => {
    setExercises(exercise);
  };

  return (
    <div className="App">
      <h1>Exercise Browser</h1>
      <SearchForm onSubmit={addExercises} />
      <ExerciseList selection={exercises} />
    </div>
  );
}

export default App;
