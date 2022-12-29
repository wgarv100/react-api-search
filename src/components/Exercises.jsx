import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises }) => {
  return (
    <Box>
      <Typography variant="h4" color="black">
        Results
      </Typography>
      {exercises?.map((exercise, id) => (
        <ExerciseCard key={id} exercise={exercise} />
      ))}
    </Box>
  );
};

export default Exercises;
