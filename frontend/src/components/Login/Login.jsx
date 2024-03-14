import React from "react";
import { Grid, Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import CustomTextField from "./CustomTextField";
import CustomTypo16px from "./CustomTypo16px";
import CustomLink16px from "./CustomLink16px";
import CustomButton from "./CustomButton";
import { signup_route } from "../Routing/Routes";
import FormHeader from "./FormHeader";

function Login() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          background: "#e3bc2e", // "linear-gradient(circle 90deg, #e3bc2e, #e3bc2e 0%)", ???
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "92vh",
        }}
      >
        <Box
          width={{ xs: "70%", sm: "50%", md: "40%", lg: "30%" }}
          padding="5%"
          sx={{
            backgroundColor: "white",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            marginTop: "5vh",
            marginBottom: "5vh",
            borderRadius: "24px",
          }}
        >
          <FormHeader title="Вхід" />
          <Grid
            container
            justifyContent="center"
            marginTop="8px"
            marginBottom="32px"
          >
            <Grid item marginRight="10px">
              <CustomTypo16px text="Вперше на Coding Buddy?" />
            </Grid>
            <Grid item>
              <CustomLink16px text="Зареєструватись" link={signup_route} />
            </Grid>
          </Grid>
          <CustomTextField label="Електронна адреса" />
          <CustomTextField label="Пароль" type="password" />
          <CustomLink16px text="Забули пароль?" align="left" />
          <CustomButton label="Увійти" />
        </Box>
      </Box>
    </>
  );
}

export default Login;
