import "./App.css";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Box>
  );
};

export default App;
