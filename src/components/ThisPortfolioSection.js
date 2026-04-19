import React from "react";
import FullScreenSection from "./FullScreenSection";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { SECTION_INNER_MAX_W } from "../constants/layout";
import { gradientThisPortfolio } from "../constants/sectionGradients";

const features = [
  "React (Create React App) with Chakra UI and a custom theme",
  "Responsive layout, fluid project grid, and mobile-first navigation",
  "Contact form wired to a real inbox (no fake demo submit)",
  "Deployed as a static site on Vercel for fast loads worldwide",
];

const vision =
  "I wanted this site to feel like the work it represents: clear structure, honest copy, and no friction between you and a conversation—on any screen size.";

/**
 * Short “meta” band: this portfolio as its own shipped project.
 * Copy is easy to tweak in `features` and `vision` above.
 */
const ThisPortfolioSection = () => {
  return (
    <FullScreenSection
      isDarkBackground
      alignItems="flex-start"
      spacing={8}
      innerMaxW={SECTION_INNER_MAX_W}
      innerPy={{ base: 14, md: 18 }}
      bgGradient={gradientThisPortfolio}
      id="this-site-section"
    >
      <VStack align="start" spacing={2} w="100%">
        <Text
          fontSize="xs"
          fontWeight="700"
          letterSpacing="0.14em"
          color="brand.300"
          textTransform="uppercase"
        >
          Meta
        </Text>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          scrollMarginTop="5.5rem"
        >
          This portfolio site
        </Heading>
        <Text
          color="whiteAlpha.700"
          fontSize={{ base: "md", md: "lg" }}
          maxW="3xl"
          lineHeight="tall"
        >
          This page is also a project: a small React app I maintain myself—
          same care for layout, performance, and accessibility I bring to
          client work. It&apos;s the reference implementation of how I like to
          ship frontends.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 10 }} w="100%">
        <Box>
          <Text
            fontSize="sm"
            fontWeight="700"
            letterSpacing="0.08em"
            color="whiteAlpha.500"
            mb={4}
            textTransform="uppercase"
          >
            What&apos;s in the box
          </Text>
          <VStack align="stretch" spacing={3}>
            {features.map((line) => (
              <Box
                key={line}
                display="flex"
                gap={3}
                alignItems="flex-start"
              >
                <Box color="brand.300" mt={1} flexShrink={0}>
                  <FontAwesomeIcon icon={faCheck} size="sm" />
                </Box>
                <Text fontSize="sm" color="whiteAlpha.800" lineHeight="tall">
                  {line}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box
          p={{ base: 5, md: 6 }}
          rounded="xl"
          bg="whiteAlpha.50"
          borderWidth="1px"
          borderColor="whiteAlpha.200"
          borderLeftWidth="4px"
          borderLeftColor="brand.400"
        >
          <Text
            fontSize="sm"
            fontWeight="700"
            letterSpacing="0.08em"
            color="whiteAlpha.500"
            mb={3}
            textTransform="uppercase"
          >
            Vision
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }} lineHeight="tall" color="whiteAlpha.900">
            {vision}
          </Text>
        </Box>
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ThisPortfolioSection;
