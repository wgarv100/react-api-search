import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import "../App.css";
import { Box } from "@mui/system";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";

const drawerWidth = 250;

const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const openDrawer = () => {
    setToggleDrawer(true);
  };

  const closeDrawer = () => {
    setToggleDrawer(false);
  };
  return (
    <Box>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar disableGutters className="navbar">
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
            onClick={openDrawer}
          >
            <MenuIcon sx={{ color: "white" }} fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        sx={{ width: drawerWidth }}
        PaperProps={{ sx: { width: drawerWidth } }}
        open={toggleDrawer}
        variant="temporary"
      >
        <IconButton onClick={closeDrawer}>
          <CloseIcon fontSize="large" />
        </IconButton>
        <List>
          <ListItem disablePadding>
            <ListItemButton href="/">
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton href="/savedexercises">
              <ListItemText primary="Saved Exercises" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
