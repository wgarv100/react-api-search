import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";

const SavedExerciseCard = () => {
  const [exercises, setExercises] = useState([]);

  // updates page whenever a exercise is deleted
  useEffect(() => {
    const pullSavedExercises = async () => {
      // grabs collection of documents from server and saves them to a variable
      const colRef = collection(db, "savedExercises");
      const savedExercises = await getDocs(colRef);
      // sets state to mapped collection documents
      setExercises(
        savedExercises.docs.map((savedExercise) => ({
          ...savedExercise.data(),
          id: savedExercise.id,
        }))
      );
    };

    // pullSavedExercises();
  }, [exercises]);

  const deleteSavedExercise = async (exercise) => {
    // sets specific document id and then deletes
    const docRef = doc(db, "savedExercises", exercise.id);
    await deleteDoc(docRef);
  };

  return (
    <>
      {/* {exercises.map((exercise) => ( */}
      <Container maxWidth="xl">
        <Box>
          <Card>
            <CardMedia
              component="img"
              // alt={exercise.name}
              // image={exercise.gifUrl}
            />
            <CardContent sx={{ pb: 2, height: "75px" }}>
              <Typography variant="h5" sx={{ pb: 1 }}>
                {/* {exercise.name.toUpperCase()} */}
              </Typography>
              <Typography variant="body2">
                {/* {exercise.target.toUpperCase()} */}
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
      {/* ))} */}
    </>
  );
};

export default SavedExerciseCard;
