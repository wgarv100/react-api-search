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
import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";

// bodyPart:"string"
// equipment:"string"
// gifUrl:"string"
// id:"string"
// name:"string"
// target:"string"

const ExerciseCard = ({ exercise }) => {
  const addExerciseToDB = async () => {
    // saves the selected exercise object to the database
    await addDoc(collection(db, "savedExercises"), {
      id: exercise.id,
      name: exercise.name,
      gifUrl: exercise.gifUrl,
      target: exercise.target,
    });
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
            {/* <CardActionArea> */}
            <Box>
              <Button
                variant="contained"
                color="error"
                size="medium"
                sx={{ m: 2 }}
                onClick={addExerciseToDB}
              >
                Add
              </Button>
            </Box>
            {/* </CardActionArea> */}
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default ExerciseCard;
