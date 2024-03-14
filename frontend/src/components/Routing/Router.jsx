import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
  apply_route,
  article_route,
  chat_route,
  create_post_route,
  feed_route,
  login_route,
  notification_route,
  profile_find_route,
  profile_route,
  project_find_route,
  project_route,
  signup_route,
} from "./Routes";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Profile from "../Profile/Profile";
import Project from "../Project/Project";
import Apply from "../Apply/Apply";
import Feed from "../Feed/Feed";
import Article from "../Article/Article";
import Chat from "../Chat/Chat";
import CreatePost from "../CreatePost/CreatePost";
import Notification from "../Notification/Notification";
import ProfileFind from "../Profile/ProfileFind";
import ProjectFind from "../Project/ProjectFind";

function Router() {
  return (
    <Box>
      <Routes>
        <Route path={login_route} element={<Login />}></Route>
        <Route path={signup_route} element={<Signup />}></Route>
        <Route path={profile_route} element={<Profile />}></Route>
        <Route path={project_route} element={<Project />}></Route>
        <Route path={profile_find_route} element={<ProfileFind />}></Route>
        <Route path={project_find_route} element={<ProjectFind />}></Route>
        <Route path={feed_route} element={<Feed />}></Route>
        <Route path={article_route} element={<Article />}></Route>
        <Route path={chat_route} element={<Chat />}></Route>
        <Route path={create_post_route} element={<CreatePost />}></Route>
        <Route path={notification_route} element={<Notification />}></Route>
        <Route path={apply_route} element={<Apply />}></Route>
      </Routes>
    </Box>
  );
}

export default Router;
