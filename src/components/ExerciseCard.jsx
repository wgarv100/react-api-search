import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const ExerciseCard = ({ exercise }) => {
  const [selectedExercise, setSelectedExercise] = useState([]);
  const [selectedExerciseName, setSelectedExerciseName] = useState();
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/savedexercises")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchedData(data);
        return fetchedData;
      });
  }, [fetchedData]);

  const addExerciseToDB = async () => {
    const savedFetchedName = fetchedData.map((fetched) => fetched.name);

    setSelectedExercise([]);
    setSelectedExercise({
      apiId: exercise.id,
      name: exercise.name,
      target: exercise.target,
      gifUrl: exercise.gifUrl,
    });

    setSelectedExerciseName(exercise.name);

    if (savedFetchedName.includes(selectedExerciseName)) {
      console.log("already added exercise");
    } else {
      console.log("adding new exercise");
      await fetch("http://localhost:3001/savedExercises", {
        method: "POST",
        body: JSON.stringify(selectedExercise),
        headers: { "Content-Type": "application/json" },
      });
    }
  };

  return (
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
          <Box>
            <Box>
              <Button
                variant="contained"
                color="error"
                size="medium"
                sx={{ m: 2 }}
                onClick={() => addExerciseToDB()}
              >
                Add
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default ExerciseCard;
