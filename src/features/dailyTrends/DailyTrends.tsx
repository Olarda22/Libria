import { Box, TextField, IconButton, InputBase, ButtonBase, CircularProgress } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { lazy, Suspense, useEffect, useState } from 'react'

import { styled, alpha } from "@mui/material/styles";
import { useDailyTrendBooks } from './ hooks';
import type { Work } from '../../types/book';
import BookCard from '@/components/BookCard';
// import DailyTrendsContent from './DailyTrendsContent';
interface Props {
    // onGetTrends: () => void
}

export default function DailyTrends() {
    // const { results, loading, getDailyTrendBooks } = useDailyTrendBooks();
    // const [books, setBooks] = useState<Work[]>([])
    const DailyTrendsContent = lazy(() => import('@/features/dailyTrends/DailyTrendsContent'))


    // useEffect(() => {
    //     getDailyTrendBooks()

    //     console.log('useEffect', 'getDailyTrendBooks')
    // }, [])

    // useEffect(() => {
    //     console.log(results.length, 'results.length')
    //     if (results.length > 0) {
    //         setBooks(results)
    //     }

    // }, [results])


    return (
        <div>
            <Suspense fallback={
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 12, height: '500px' }}>
                    <CircularProgress />
                </Box>

            }>
                <DailyTrendsContent />
            </Suspense>
        </div>

    )
}
// export default DailyTrends
