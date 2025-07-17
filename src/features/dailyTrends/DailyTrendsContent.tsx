import { Box, TextField, IconButton, InputBase, ButtonBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useEffect, useState } from 'react'

import { styled, alpha } from "@mui/material/styles";
import { useDailyTrendBooks } from './ hooks';
import type { Work } from '../../types/book';
import BookCard from '@/components/BookCard';
interface Props {
    // onGetTrends: () => void
}

export default function DailyTrendsContent() {
    const { results, loading, getDailyTrendBooks } = useDailyTrendBooks();
    const [books, setBooks] = useState<Work[]>([])

    useEffect(() => {
        getDailyTrendBooks()
    }, [])

    useEffect(() => {
        setBooks(results)
    }, [results])


    
    return (
        <div>
            {books.map((book) => (
                <BookCard key={book.key} book={book} />
            ))}

        </div>

    )
}
// export default DailyTrends
