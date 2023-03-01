import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

const SavedExerciseCard = ({ exercise }) => {
  const [toggleDelete, setToggleDelete] = useState(false);

  const deleteSavedExercise = async (exercise) => {
    await fetch(`http://localhost:3001/savedexercises/${exercise.id}`, {
      method: "DELETE",
    });
    setToggleDelete(!toggleDelete);
  };

  return (
    <Container maxWidth="xl">
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
        <Button
          variant="outlined"
          color="error"
          size="medium"
          sx={{ m: 2 }}
          onClick={() => deleteSavedExercise(exercise)}
        >
          Delete
        </Button>
      </Card>
    </Container>
  );
};

export default SavedExerciseCard;
