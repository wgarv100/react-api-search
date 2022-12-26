import { Button, Stack, TextField, Box } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <Box>
      <Stack direction="row">
        <TextField
          className="search-bar"
          variant="outlined"
          color="error"
          placeholder="Search for a workout..."
          autoComplete="false"
          fullWidth
        />
        <Button variant="contained" color="error">
          Search
        </Button>
      </Stack>
    </Box>
  );
};

export default SearchBar;
