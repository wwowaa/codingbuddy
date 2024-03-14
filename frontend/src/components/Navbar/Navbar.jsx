import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SearchBar from "./SearchBar";
import { Link, useLocation } from "react-router-dom";
import {
  chat_route,
  login_route,
  notification_route,
  profile_route,
  project_route,
  signup_route,
} from "../Routing/Routes";

const pages = [
  {
    label: "Сповіщення",
    icon: <NotificationsNoneIcon />,
    link: notification_route,
  },
  {
    label: "Проєкти",
    icon: <ListOutlinedIcon />,
    link: project_route,
  },
  {
    label: "Повідомлення",
    icon: <ChatBubbleOutlineOutlinedIcon />,
    link: chat_route,
  },
  {
    label: "Профіль",
    icon: <PermIdentityOutlinedIcon />,
    link: profile_route,
  },
];

function Navbar() {
  const isWideScreen = useMediaQuery("(min-width:1000px)");
  const location = useLocation();
  const isLoginSignupOpen = location.pathname === login_route || location.pathname === signup_route;


  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container alignItems="center">
            <Grid item xl={2} lg={2} md={2.5} sm={4}>
              <Link to={login_route} style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    display: { xs: "none", sm: "flex" },
                    fontFamily: "Inika",
                    fontWeight: 700,
                    fontSize: { sm: "26px" },
                    letterSpacing: "2%",
                    color: "#3D2EE3",
                    textDecoration: "none",
                  }}
                >
                  Coding buddy
                </Typography>
              </Link>
            </Grid>
            <Grid item xl={8} lg={8} md={7} sm={6} xs={9}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {pages.map((page) => (
                  !isLoginSignupOpen && ( // hide some menu items (notifications, chat...) for a login and signup pages 
                  <Link to={page.link} style={{ textDecoration: "none" }}>
                    <Button
                      startIcon={page.icon}
                      key={page.label}
                      sx={{
                        mx: { xl: 3, lg: 2, md: 1, sm: 1, xs: 0 },
                        color: "black",
                        textTransform: "none",
                        fontStyle: "Poppins",
                        fontSize: "20px",
                        fontWeight: "400",
                        display: { xs: "flex", md: "flex" },
                      }}
                    >
                      {isWideScreen ? page.label : null}
                    </Button>
                  </Link>)
                ))}
              </Box>
            </Grid>
            <Grid item xl={2} lg={2} md={2.5} sm={1} xs={3}>
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <SearchBar />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
