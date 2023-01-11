import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

// bodyPart:"string"
// equipment:"string"
// gifUrl:"string"
// id:"string"
// name:"string"
// target:"string"

const ExerciseCard = ({ exercise }) => {
  const addExerciseToDB = async () => {
    const savedExercise = {
      name: exercise.name,
      target: exercise.target,
      gifUrl: exercise.gifUrl,
    };

    await fetch("http://localhost:3000/savedExercises", {
      method: "POST",
      body: JSON.stringify(savedExercise),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <Container maxWidth="xl">
      <Box>
        <Card>
          <CardMedia
            component="img"
            alt={exercise.name}
            image={exercise.gifUrl}
          />
          <CardContent sx={{ pb: 2, height: "75px" }}>
            <Typography variant="h5" sx={{ pb: 1 }}>
              {exercise.name.toUpperCase()}
            </Typography>
            <Typography variant="body2">
              {exercise.target.toUpperCase()}
            </Typography>
          </CardContent>
          <Box>
            <Box>
              <Button
                variant="contained"
                color="error"
                size="medium"
                sx={{ m: 2 }}
                onClick={addExerciseToDB}
              >
                Add
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default ExerciseCard;
