import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

// bodyPart:"string"
// equipment:"string"
// gifUrl:"string"
// id:"string"
// name:"string"
// target:"string"

const ExerciseCard = ({ exercise }) => {
  return (
    <Container maxWidth="xl">
      <Box>
        <img src={exercise.gifUrl} alt={exercise.name} />
        <Typography variant="h5">{exercise.name}</Typography>
        <Typography variant="p">{exercise.target}</Typography>
      </Box>
    </Container>
  );
};

export default ExerciseCard;
