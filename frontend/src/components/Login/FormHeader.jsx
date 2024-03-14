import React from "react";
import { Typography } from "@mui/material";

function FormHeader(props) {
  return (
    <Typography
      variant="h3"
      sx={{
        fontStyle: "Poppins",
        fontSize: "40px",
        fontWeight: "500",
        color: "#333333",
      }}
    >
      {props.title}
    </Typography>
  );
}

export default FormHeader;
