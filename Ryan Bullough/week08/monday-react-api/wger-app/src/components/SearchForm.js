import React, { useState } from "react";
import axios from "axios";
import _ from "underscore";

function SearchForm(props) {
  const [equipment, setEquipment] = useState(1);
  const [muscleGroup, setMuscleGroup] = useState([1, 11, 5]);

  const _handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://wger.de/api/v2/exercise/?&status=2&language=2&limit=999`
    );
    const results = response.data.results;
    const filteredResults = _(results).reduce((memo, current) => {
      if (
        _.intersection(current.muscles, muscleGroup).length > 0 &&
        current.equipment.includes(equipment)
      ) {
        memo.push(current);
      }
      return memo;
    }, []);
    props.onSubmit(filteredResults);
  };

  const _handleEquipment = (event) => {
    setEquipment(parseInt(event.target.value));
  };

  const _handleMuscleGroup = (event) => {
    setMuscleGroup(event.target.value.split(", ").map((num) => parseInt(num)));
  };

  return (
    <form onSubmit={_handleSubmit}>
      <select onChange={_handleMuscleGroup}>
        <option value="1, 11, 5">Arms</option>
        <option value="10, 8">Legs</option>
        <option value="4, 3">Chest</option>
      </select>

      <select onChange={_handleEquipment}>
        <option value="1">Barbell</option>
        <option value="3">Dumbbell</option>
        <option value="7">Bodyweight</option>
      </select>

      <input type="submit" value="Search"></input>
    </form>
  );
}

export default SearchForm;
