import "./App.css";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SavedExercises from "./pages/SavedExercises";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/SavedExercises" element={<SavedExercises />} />
      </Routes>
    </Box>
  );
};

export default App;
