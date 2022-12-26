import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar disableGutters maxWidth="100%" className="navbar">
        <Typography
          variant="h4"
          noWrap
          color="white"
          href="/"
          sx={{ pt: 2, pr: 2, pb: 2, pl: 3, display: "flex", flexGrow: 1 }}
        >
          Sweat Plan
        </Typography>
        <IconButton
          size="large"
          color="white"
          sx={{ pt: 0, pr: 3, pb: 1, pl: 2 }}
        >
          <MenuIcon sx={{ color: "white" }} fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
