import CategoryTitle from '@/components/CategoryTitle'
import { Box, CircularProgress, Container } from '@mui/material'
import { lazy, Suspense, useEffect, useState } from 'react'

interface Props {
}

export default function DailyTrends() {
    const DailyTrendsContent = lazy(() => import('@/features/dailyTrends/DailyTrendsContent'))
    return (
        <Box component="section" sx={{ p: 2, border: '1px dashed grey', display: 'flex', width: '100%' }}>
            <CategoryTitle title="DailyTrends" />
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 12, height: '500px' }}>
                <Suspense fallback={<CircularProgress />}>
                    <DailyTrendsContent />
                </Suspense>
            </Box>
        </Box>

    )
}
// export default DailyTrends
