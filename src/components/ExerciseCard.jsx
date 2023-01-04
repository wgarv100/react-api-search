import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

// bodyPart:"string"
// equipment:"string"
// gifUrl:"string"
// id:"string"
// name:"string"
// target:"string"

const ExerciseCard = ({ exercise }) => {
  const [addExercise, setAddExercise] = useState([]);

  const addExerciseToDB = async () => {
    setAddExercise([
      exercise.id,
      exercise.name,
      exercise.gifUrl,
      exercise.target,
    ]);
    // use addExercise to send data to the server
  };
  // clear addExercise state

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
            <Typography variant="body2">{exercise.id}</Typography>
          </CardContent>
          <CardActionArea>
            <Button
              variant="contained"
              color="error"
              size="medium"
              sx={{ m: 2 }}
              onClick={addExerciseToDB}
            >
              Add
            </Button>
          </CardActionArea>
        </Card>
      </Box>
    </Container>
  );
};

export default ExerciseCard;
