import { Grid, Typography, Container, Pagination, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 24;

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
        Results
      </Typography>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          {currentExercises?.map((exercise, id) => (
            <Grid item xs={12} md={4} key={exercise.id}>
              <ExerciseCard key={id} exercise={exercise} />
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

export default Exercises;
