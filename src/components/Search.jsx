import { Button, Stack, TextField, Box } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

import { options, fetchData } from "../utilities/fetchData";

const Search = ({ setExercises }) => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        options
      );
      const searchedExercises = exerciseData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Container maxWidth="xl">
          <Stack direction="row">
            <TextField
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              className="search-bar"
              variant="outlined"
              color="error"
              placeholder="Search for a workout..."
              autoComplete="false"
              fullWidth
            />
            <Button onClick={handleSearch} variant="contained" color="error">
              Search
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Search;
