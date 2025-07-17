import { Box, Button, Container, Typography } from "@mui/material";
import { lazy, Suspense } from 'react'
import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";
import { CircularProgress } from '@mui/material'
import DailyTrends from "@/features/dailyTrends/DailyTrends";

const Home = () => {
    // const SearchPage = lazy(() => import('@/features/dailyTrends/DailyTrends'))

    return (
        <MainLayout>

            <Box
                component="main"
                flexGrow={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                height='100vh'
            >
                <DailyTrends />
                {/* <Suspense fallback={>}>
                        <DailyTrends />

                    </Suspense> */}
                {/* <Suspense fallback={
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 12, height: '500px' }}>
                        <CircularProgress />
                    </Box>
                 
                }>   <SearchPage />
                </Suspense> */}

                {/* <Container>
                    <Typography variant="h4" align="center">
                        Центрированный контент
                    </Typography>
                </Container> */}
            </Box>
        </MainLayout>

    );
};

export default Home;
