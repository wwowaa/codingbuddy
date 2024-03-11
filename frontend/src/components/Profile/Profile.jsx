import React from "react";
import { Typography, Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";

function Profile() {
  return (
    <>
      <Navbar />
      <Box>
        <Typography variant="h3">Profile</Typography>
      </Box>
    </>
  );
}

export default Profile;
