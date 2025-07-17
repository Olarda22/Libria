import React, { useEffect, useState } from "react";
import { Card, CardMedia, CardContent, Typography, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import type { Book, Work } from "../types/book";
import { useBookDetails } from "@/features/bookCard/ hooks";


const BookInfo: React.FC<{ bookId: string }> = ({ bookId }) => {

  const { results, loading, error, getBookDetails } = useBookDetails()
  const [book, setBook] = useState<Work | null>()

  useEffect(() => {
    
      setBook(results)
  

  }, [results])


  useEffect(() => {
    if (bookId) {
      getBookDetails(bookId)
    }
  }, [bookId])
  console.log(book,'book')
  return (
    <Card>
      <CardContent>
        {book && <>
          <Typography variant="subtitle1" component="div" noWrap>
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {book.author_name}
          </Typography>
        </>}

      </CardContent>

    </Card>
  );
};

export default BookInfo;
