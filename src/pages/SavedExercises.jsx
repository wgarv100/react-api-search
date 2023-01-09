import { Box } from "@mui/system";
import React from "react";
import SavedExercisesCard from "../components/SavedExercisesCard.jsx";

const SavedExercises = ({ exercises }) => {
  return (
    <Box sx={{ mt: "75px" }}>
      <SavedExercisesCard exercises={exercises} />
    </Box>
  );
};

export default SavedExercises;
