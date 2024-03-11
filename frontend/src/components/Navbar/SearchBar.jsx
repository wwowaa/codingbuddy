import React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  width: "100%",
  border: "1px solid black",
  borderRadius: "20px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function SearchBar() {
  return (
    <Search>
      <SearchIconWrapper sx={{ display: { xs: "flex", } }}>
        <SearchIcon
          sx={{
            color: "black",
            display: {xs: 'flex' }
          }}
        />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Пошук"
        inputProps={{ "aria-label": "search" }}
        sx={{ display: { xs: "none", sm: "none", md:"flex", lg: "flex" } }}
      />
    </Search>
  );
}

export default SearchBar;
