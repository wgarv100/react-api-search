import { Button, Grid, Pagination, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import SavedExerciseCard from "./SavedExerciseCard";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";

const SavedExercises = () => {
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 24;

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
  }, []);

  const lastIndex = currentPage * exercisesPerPage;
  const firstIndex = lastIndex - exercisesPerPage;
  const currentExercises = exercises.slice(firstIndex, lastIndex);

  const handlePagination = (event, value) => {
    setCurrentPage(value);
  };

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box>
      <Typography variant="h4" color="black" sx={{ p: 3 }}>
        Saved Exercises
      </Typography>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          {currentExercises?.map((exercise, id) => (
            <Grid item xs={12} md={4} key={exercise.id}>
              <SavedExerciseCard key={id} exercise={exercise} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
        <Pagination
          count={Math.ceil(exercises.length / exercisesPerPage)}
          color="error"
          onChange={handlePagination}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
        <Button variant="contained" color="error" onClick={handleScroll}>
          Back to Top
        </Button>
      </Box>
    </Box>
  );
};

export default SavedExercises;
