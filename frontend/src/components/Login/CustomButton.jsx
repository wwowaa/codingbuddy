import React from "react";
import { Button } from "@mui/material";

function CustomButton(props) {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "32px",
        width: "100%",
        height: "56px",
        backgroundColor: "#3D2EE3",
        marginTop: "16px",
        fontStyle: "Poppins",
        fontSize: "20px",
        fontWeight: "500",
        textTransform: "none",
      }}
    >
      {props.label}
    </Button>
  );
}

export default CustomButton;
