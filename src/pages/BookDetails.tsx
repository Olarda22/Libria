import { getWork } from "@/api/openLibraryApi";
import BookInfo from "@/components/BookInfo";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();


  return (
    <div>
      <h2>Детали книги</h2>
      {bookId && <BookInfo bookId={bookId}/>}
    </div>
  );
};

export default BookDetails;
