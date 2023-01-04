import React, { useState } from "react";
import "../App.css";
import { Box } from "@mui/material";
import Search from "../components/Search";
import HeroImage from "../components/HeroImage";
import Exercises from "../components/Exercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroImage />
      <Search setExercises={setExercises} />
      {exercises.length ? (
        <Exercises key={exercises.id} exercises={exercises} />
      ) : null}
    </Box>
  );
};

export default Home;
