import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
  apply_route,
  home_route,
  login_route,
  profile_route,
  project_route,
  signup_route,
} from "./Routes";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Profile from "../Profile/Profile";
import Project from "../Project/Project";
import Apply from "../Apply/Apply";

function Router() {
  return (
    <Box>
      <Routes>
        <Route path={home_route} element={<Home />}></Route>
        <Route path={login_route} element={<Login />}></Route>
        <Route path={signup_route} element={<Signup />}></Route>
        <Route path={profile_route} element={<Profile />}></Route>
        <Route path={project_route} element={<Project />}></Route>
        <Route path={apply_route} element={<Apply />}></Route>
      </Routes>
    </Box>
  );
}

export default Router;
