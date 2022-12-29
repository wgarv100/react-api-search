import React from "react";
import "../App.css";
import { Box } from "@mui/material";
import Search from "../components/Search";
import HeroImage from "../components/HeroImage";

const Home = () => {
  return (
    <Box>
      <HeroImage />
      <Search />
    </Box>
  );
};

export default Home;
