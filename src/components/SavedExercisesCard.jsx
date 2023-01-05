import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

const SavedExercisesCard = () => {
  const [exercises, setExercises] = useState([]);

  // updates the page whenever a exercise is deleted
  useEffect(() => {
    // making a connection to the collection
    const colRef = collection(db, "savedExercises");
    const pullSavedExercises = async () => {
      // pulling and saving collection data
      const savedExercises = await getDocs(colRef);
      // setting state to mapped collection of exercises
      setExercises(
        savedExercises.docs.map((savedExercise) => ({
          ...savedExercise.data(),
        }))
      );
    };

    pullSavedExercises();
  }, []);

  return (
    <>
      {exercises.map((exercise) => (
        <Container maxWidth="lg">
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={12} xl={4}>
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
                  <CardActionArea>
                    <Button
                      variant="outlined"
                      color="error"
                      size="medium"
                      sx={{ mt: 2, mb: 2, ml: 1 }}
                    >
                      Delete
                    </Button>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      ))}
    </>
  );
};

export default SavedExercisesCard;
