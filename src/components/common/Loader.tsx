import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CircularProgress size={50} color="primary" />
      <Typography variant="body1" mt={2}>
        Loading, please wait...
      </Typography>
    </Box>
  );
};

export default Loader;

