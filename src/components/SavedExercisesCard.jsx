import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";

const SavedExercisesCard = ({ exercises }) => {
  // useState to set deleteExercise ID
  const [deleteExercise, setDeleteExercise] = useState();

  // useEffect to pull data each time page loads
  // dependancy to retrieve data once exercise is deleted
  useEffect(() => {
    const pullExercisesFromDB = async () => {
      // populate the card with the data
    };
  }, [deleteExercise]);

  const deleteExerciseFromDB = async () => {
    // grab the exercise.id from the specific exercise
    setDeleteExercise("firebase document id");
  };

  return (
    <Box sx={{ mt: "75px" }}>
      <Container maxWidth="xl">
        <Box>
          <Card>
            <CardMedia
              component="img"
              //   alt={exercise.name}
              //   image={exercise.gifUrl}
            />
            <CardContent sx={{ pb: 2, height: "75px" }}>
              <Typography variant="h5" sx={{ pb: 1 }}>
                {/* {exercise.name.toUpperCase()} */}
                BICEP CURL
              </Typography>
              <Typography variant="body2">
                {/* {exercise.target.toUpperCase()} */}
              </Typography>
              <Typography variant="body2">
                3000
                {/* {exercise.id} */}
              </Typography>
            </CardContent>
            <CardActionArea>
              <Button
                variant="outlined"
                color="error"
                size="medium"
                sx={{ mt: 2, mb: 2, ml: 1 }}
                onClick={deleteExerciseFromDB}
              >
                Delete
              </Button>
            </CardActionArea>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default SavedExercisesCard;
