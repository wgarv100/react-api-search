import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { SavedExercisesContext } from "../App.js";

const ExerciseCard = ({ exercise }) => {
  const [selectedExercise, setSelectedExercise] = useContext(
    SavedExercisesContext
  );

  const saveExerciseToDatabase = () => {
    setSelectedExercise({
      apiId: exercise.id,
      name: exercise.name,
      target: exercise.target,
      gifUrl: exercise.gifUrl,
    });
    return selectedExercise;
  };

  return (
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
              onClick={() => saveExerciseToDatabase()}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ExerciseCard;
