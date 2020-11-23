import React from "react";
import Exercise from "./Exercise";

const ExerciseList = (props) => {
  return props.selection.map((exercise) => (
    <Exercise key={exercise.id} {...exercise} />
  ));
};
export default ExerciseList;
