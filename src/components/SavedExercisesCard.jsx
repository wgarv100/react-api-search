import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

const SavedExercisesCard = () => {
  const [dbDatas, setDbDatas] = useState([]);

  // making a connection to the collection
  const colRef = collection(db, "savedExercises");

  const pullSavedExercises = async () => {
    // pulling and saving collection data
    const savedExercises = await getDocs(colRef);
    // setting state to mapped collection of exercises
    setDbDatas(
      savedExercises.docs.map((savedExercise) => ({
        ...savedExercise.data(),
      }))
    );
  };

  return (
    <Box sx={{ mt: "75px" }}>
      <Container maxWidth="xl">
        <Box>
          <Card>
            <CardMedia component="img" />
            <CardContent sx={{ pb: 2, height: "75px" }}>
              <Typography variant="h5" sx={{ pb: 1 }}>
                Bicep Curls
              </Typography>
              <Typography variant="body2">Arms</Typography>
              <Typography variant="body2">3000</Typography>
            </CardContent>
            <CardActionArea>
              <Button
                variant="outlined"
                color="error"
                size="medium"
                sx={{ mt: 2, mb: 2, ml: 1 }}
                onClick={pullSavedExercises}
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
