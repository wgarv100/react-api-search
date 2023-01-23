import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";

const SavedExerciseCard = () => {
  const [exercises, setExercises] = useState([]);
  const [toggleDelete, setToggleDelete] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/savedExercises")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setExercises(data);
      });
  }, [toggleDelete]);

  const deleteSavedExercise = async (exercise) => {
    await fetch(`http://localhost:3001/savedexercises/${exercise.id}`, {
      method: "DELETE",
    });
    setToggleDelete(!toggleDelete);
  };

  return (
    <Container maxWidth="xl">
      {exercises.map((exercise) => (
        <Card key={exercise.id}>
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
            sx={{ mt: 2, mb: 2, ml: 1 }}
            onClick={() => deleteSavedExercise(exercise)}
          >
            Delete
          </Button>
        </Card>
      ))}
    </Container>
  );
};

export default SavedExerciseCard;
