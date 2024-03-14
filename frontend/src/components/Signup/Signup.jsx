import React from "react";
import { Box, Grid } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import CustomTypo16px from "../Login/CustomTypo16px";
import CustomLink16px from "../Login/CustomLink16px";
import CustomButton from "../Login/CustomButton";
import CustomTextField from "../Login/CustomTextField";
import { login_route } from "../Routing/Routes";
import FormHeader from "../Login/FormHeader";

function Signup() {
  return (
    <Box
      sx={{
        background: "#e3bc2e", // "linear-gradient(circle 90deg, #e3bc2e, #e3bc2e 0%)", ???
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Navbar />
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
        <FormHeader title="Реєстрація" />
        <Grid
          container
          justifyContent="center"
          marginTop="8px"
          marginBottom="32px"
        >
          <Grid item marginRight="10px">
            <CustomTypo16px text="Уже є акаунт?" />
          </Grid>
          <Grid item>
            <CustomLink16px text="Увійти" link={login_route} />
          </Grid>
        </Grid>
        <CustomTextField label="Ім'я" />
        <CustomTextField label="Електронна адреса" />
        <CustomTextField label="Дата народження" type="date" />
        <CustomTextField label="Пароль" type="password" />
        <CustomTextField label="Підтвердіть пароль" type="password" />
        <CustomButton label="Зареєструватись" />
      </Box>
    </Box>
  );
}

export default Signup;
