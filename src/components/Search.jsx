import { Button, Stack, TextField, Box, Typography } from "@mui/material";
import React, { useState } from "react";

import { options, fetchData } from "../utilities/fetchData";
import Exercises from "./Exercises";

const Search = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  // const exercises = [
  //   { name: "hammer curl", target: "bicep", id: 1 },
  //   { name: "leg curl", target: "leg", id: 2 },
  // ];

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
      <Box>
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
      </Box>
      <Exercises exercises={exercises} />
    </>
  );
};

export default Search;
