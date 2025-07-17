import { Container } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => (
    <>
        <Header />
        <Container maxWidth="lg">{children}</Container>
        <Footer />
    </>
);

export default MainLayout;
