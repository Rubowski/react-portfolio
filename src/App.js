import { Box, ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ThisPortfolioSection from "./components/ThisPortfolioSection";
import ProjectsSection from "./components/ProjectsSection";
import BeyondProjectsSection from "./components/BeyondProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import ScrollToTopButton from "./components/ScrollToTopButton";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <Box as="main">
          <Header />
          <LandingSection />
          <ThisPortfolioSection />
          <ProjectsSection />
          <BeyondProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
          <ScrollToTopButton />
        </Box>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
