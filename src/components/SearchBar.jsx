import { Button, Stack, TextField, Typography, Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const SearchBar = () => {
  return (
    <Box maxHeight="95vh">
      <Container maxWidth="sm" sx={{ p: 1 }} disableGutters>
        <Box marginTop="50%">
          <Stack direction="row">
            <TextField
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
      </Container>
    </Box>
  );
};

export default SearchBar;
