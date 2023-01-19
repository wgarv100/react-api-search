import { Button, IconButton, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const NoSavedExercises = () => {
  return (
    <Box sx={{ pt: 3 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ justifyContent: "center", display: "flex" }}
        >
          No Saved Exercises
        </Typography>
        <Box sx={{ justifyContent: "center", display: "flex", pt: 3 }}>
          <IconButton href="/">
            <Button variant="contained" color="error">
              Retrun Home
            </Button>
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default NoSavedExercises;
