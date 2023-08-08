import { Box, Container } from "@chakra-ui/react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Box pl={"25%"} pt={"11vh"}>
        <Container maxW={"container.lg"} pb={5}>
          {children}
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Main;
