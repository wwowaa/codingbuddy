import React from "react";
import { Typography, Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Box>
        <Typography variant="h3">Home</Typography>
      </Box>
    </>
  );
}

export default Home;
