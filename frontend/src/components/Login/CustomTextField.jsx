import React from "react";
import { Grid, TextField } from "@mui/material";
import CustomTypo16px from "./CustomTypo16px";

function CustomTextField(props) {
  return (
    <Grid
      container
      direction="column"
      marginBottom="16px"
    >
      <Grid item textAlign="left">
        <CustomTypo16px text={props.label} />
      </Grid>
      <Grid item>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type={props.type}
          sx={{
            width: "100%",
            height: "56px",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default CustomTextField;
