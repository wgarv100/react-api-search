import React, { useState } from "react";
import "../App.css";
import { Box, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import HomeHeroImage from "../assets/images/HomeHeroImage.png";
import { Container } from "@mui/system";

const Home = () => {
  return (
    <>
      <Box
        className="home-hero-image"
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Container maxWidth="sm" sx={{ pt: "45vh" }}>
          <SearchBar />
        </Container>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <img width="100%" src={HomeHeroImage} />
        <Container maxWidth="sm" sx={{ p: 0 }}>
          <SearchBar />
        </Container>
        <Typography variant="p"></Typography>
      </Box>
    </>
  );
};

export default Home;
