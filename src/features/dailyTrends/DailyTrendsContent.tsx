import { useEffect, useState } from 'react'

import { useDailyTrendBooks } from './ hooks';
import type { Work } from '../../types/book';
import BookCard from '@/components/BookCard';
import Carousel from 'react-material-ui-carousel';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


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
        <>
            <Carousel
                autoPlay={false}
                animation='slide'
                navButtonsAlwaysVisible={true}
            // indicators={false}
            // NextIcon={<NavigateNextIcon />}
            // PrevIcon={<NavigateBeforeIcon />}
            >
                {books.map((book) => (
                    <BookCard key={book.key} book={book} />
                ))}
            </Carousel>
        </>

    )
}
