import React, { useEffect } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    IconButton,
    Badge,
    Box,
    Container,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { SearchInput } from "../features/bookSearch/SearchInput";
import { useBookSearch } from "../features/bookSearch/ hooks";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { setResults } from "../features/bookSearch/searchSlice";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(2),
    width: "100%",
    // maxWidth: 400,
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
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
}));

const Header = ({ favoritesCount = 0, cartCount = 0 }) => {
    const { results, loading, handleSearch } = useBookSearch();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (results.length > 0) {
            dispatch(setResults(results));
            navigate('/search');
        }
    }, [results])

    return (
        <AppBar position="static">
            <Container maxWidth="lg" sx={{
                margin: "auto",
                // maxWidth: 800,
                width: "100%"
            }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Link to="/">
                    <Box
                        component="img"
                        sx={{
                            height: 80,
                            // width: 350,
                            maxHeight: { xs: 80, md: 40 },
                            // maxWidth: 
                        }}
                        alt="Logo"
                        src="/logo.png"
                    />
                    </Link>
                    <SearchInput onSearch={handleSearch} />
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <IconButton component={Link} to="/favorites" color="inherit">
                            <Badge badgeContent={favoritesCount} color="error">
                                <FavoriteIcon />
                            </Badge>
                        </IconButton>
                        <IconButton component={Link} to="/cart" color="inherit">
                            <Badge badgeContent={cartCount} color="error">
                                <ShoppingBagIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
