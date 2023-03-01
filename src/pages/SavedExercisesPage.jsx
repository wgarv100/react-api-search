import { Box } from "@mui/system";
import React, { useState } from "react";
import SavedExercises from "../components/SavedExercises";

export const ToggleDeleteContext = React.createContext();

const SavedExercisesPage = () => {
  const [toggleDelete, setToggleDelete] = useState(false);

  return (
    <Box sx={{ mt: "75px" }}>
      <ToggleDeleteContext.Provider value={[toggleDelete, setToggleDelete]}>
        <SavedExercises />
      </ToggleDeleteContext.Provider>
    </Box>
  );
};

export default SavedExercisesPage;
