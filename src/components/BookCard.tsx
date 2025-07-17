import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import type { Book, Work } from "../types/book";


const BookCard: React.FC<{ book: Work }> = ({ book }) => {

  const coverUrl = book.coverId 
    ? `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`
    : "https://via.placeholder.com/150";

  
  return (
    <Card sx={{ maxWidth: 150 }}>
      <CardActionArea component={Link} to={`/book/${book.key.replace("/works/", "")}`}>
        <CardMedia component="img" height="200" image={coverUrl} alt={book.title} />
        <CardContent>
          <Typography variant="subtitle1" component="div" noWrap>
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {book.author_name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BookCard;
