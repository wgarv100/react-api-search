import "./App.css";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SavedExercisesPage from "./pages/SavedExercisesPage";

export const SavedExercisesContext = React.createContext();

const App = () => {
  const [selectedExercise, setSelectedExercise] = useState([]);

  return (
    <SavedExercisesContext.Provider
      value={[selectedExercise, setSelectedExercise]}
    >
      <Box>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/SavedExercisesPage" element={<SavedExercisesPage />} />
        </Routes>
      </Box>
    </SavedExercisesContext.Provider>
  );
};

export default App;
