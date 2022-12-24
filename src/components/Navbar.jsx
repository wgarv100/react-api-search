import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const Navbar = () => {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar disableGutters maxWidth="100%">
        <Typography
          variant="h4"
          noWrap
          color="black"
          href="/"
          sx={{ pt: 1, pr: 2, pb: 1, pl: 2, display: "flex", flexGrow: 1 }}
        >
          Sweat Plan
        </Typography>
        <IconButton
          size="large"
          color="inherit"
          sx={{ pt: 0, pr: 2, pb: 1, pl: 2 }}
        >
          <MenuIcon sx={{ color: "black" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
