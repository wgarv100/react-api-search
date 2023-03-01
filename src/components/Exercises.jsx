import { Grid, Typography, Container, Pagination, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect, useContext } from "react";
import ExerciseCard from "./ExerciseCard";
import { SavedExercisesContext } from "../App.js";

const Exercises = ({ exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 24;
  const [fetchedData, setFetchedData] = useState([]);

  const [selectedExercise] = useContext(SavedExercisesContext);

  // fetches saved exercises
  useEffect(() => {
    fetch("http://localhost:3001/savedexercises")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchedData(data);
      });
    console.log("saved exercises fetched");
  }, [selectedExercise]);

  // maps over fetchedData and saves to a variable
  const savedFetchedName = fetchedData.map((fetched) => fetched.name);

  // checks if selected exercise exists in database when Add button is clicked
  useEffect(() => {
    const postExercise = () => {
      if (savedFetchedName.includes(selectedExercise.name)) {
        console.log("already added exercise");
      } else if (selectedExercise.name === undefined) {
        console.log("empty state");
      } else {
        console.log("adding new exercise");
        fetch("http://localhost:3001/savedExercises", {
          method: "POST",
          body: JSON.stringify(selectedExercise),
          headers: { "Content-Type": "application/json" },
        });
      }
    };
    postExercise();
  }, [selectedExercise]);

  // pagination
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
        Search Results
      </Typography>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          {currentExercises?.map((exercise, id) => (
            <Grid item xs={12} md={4} key={exercise.id}>
              <ExerciseCard
                key={id}
                exercise={exercise}
                savedFetchedName={savedFetchedName}
              />
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
