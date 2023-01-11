import "./App.css";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SavedExercisesPage from "./pages/SavedExercisesPage";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/SavedExercisesPage" element={<SavedExercisesPage />} />
      </Routes>
    </Box>
  );
};

export default App;
