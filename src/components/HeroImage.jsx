import { Box, Container } from "@mui/material";
import React from "react";
import HomeHeroImage from "../assets/images/HomeHeroImage.png";

const HeroImage = () => {
  return (
    <Box>
      <Box
        className="home-hero-image"
        sx={{ display: { xs: "none", md: "block" } }}
      ></Box>
      <Box sx={{ mt: "75px", display: { xs: "block", md: "none" } }}>
        <img width="100%" src={HomeHeroImage} />
        <Container maxWidth="sm" sx={{ p: 0 }}></Container>
      </Box>
    </Box>
  );
};

export default HeroImage;
