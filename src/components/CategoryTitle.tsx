import { Box, Typography } from "@mui/material";

const CategoryTitle = (props: any) => {
    return (
        <Box  p={2} textAlign="left">
            <Typography variant="h6">{props.title}</Typography>
        </Box>
    )
}
export default CategoryTitle;