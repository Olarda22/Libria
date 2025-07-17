import { Box, TextField, IconButton, InputBase, ButtonBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'

import { styled, alpha } from "@mui/material/styles";
interface Props {
    onSearch: (query: string) => void
}
const SearchContainer = styled("div")(({ theme }) => ({
    width: "100%",
    maxWidth: 600,
    display: "flex",
    flexDirection: 'row'
}));

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderTopLeftRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(2),
    width: "100%",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
}));

const StyledIconButtonSearch = styled(ButtonBase)(({ theme }) => ({
    backgroundColor: '#EFE3C8',
    borderBottomRightRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
    color: '#4A2B29'
}));


export const SearchInput = ({ onSearch }: Props) => {
    const [query, setQuery] = useState('')

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query)
        }
    }

    return (
        <SearchContainer>
            <Search>
                <StyledInputBase placeholder="Поиск..." value={query}
                    onChange={(e) => setQuery(e.target.value)} />
            </Search>
            <StyledIconButtonSearch onClick={handleSearch}>
                <SearchIcon sx={{ padding: '8px' }} />
            </StyledIconButtonSearch>
        </SearchContainer>

    )
}
