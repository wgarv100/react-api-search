import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";

const SavedExerciseCard = ({ exercise }) => {
  // const deleteSavedExercise = async (exercise) => {
  //   // sets specific document id and then deletes
  //   const docRef = doc(db, "savedExercises", exercise.id);
  //   await deleteDoc(docRef);
  // };

  return (
    <>
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
            <Button
              variant="outlined"
              color="error"
              size="medium"
              sx={{ mt: 2, mb: 2, ml: 1 }}
              // passes the specific exercise object data
              // onClick={() => deleteSavedExercise(exercise)}
            >
              Delete
            </Button>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default SavedExerciseCard;
