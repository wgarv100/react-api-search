import { Grid, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises }) => {
  return (
    <Box>
      <Typography variant="h4" color="black" sx={{ p: 3 }}>
        Results
      </Typography>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          {exercises?.map((exercise, id) => (
            <Grid item xs={12} md={4}>
              <ExerciseCard key={id} exercise={exercise} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Exercises;
