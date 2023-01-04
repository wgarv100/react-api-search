// clear all saved exercises
// clear individual saved exercises

import { Box } from "@mui/system";
import React from "react";
import SavedExercisesCard from "../components/SavedExercisesCard.jsx";

const SavedExercises = ({ exercises }) => {
  return (
    <Box>
      <SavedExercisesCard exercises={exercises} />
    </Box>
  );
};

export default SavedExercises;
