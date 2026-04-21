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
import { useLanguage } from "../context/LanguageContext";

const featureKeys = [
  "thisSite.feature1",
  "thisSite.feature2",
  "thisSite.feature3",
  "thisSite.feature4",
];

/**
 * Short “meta” band: this portfolio as its own shipped project.
 */
const ThisPortfolioSection = () => {
  const { t } = useLanguage();

  return (
    <FullScreenSection
      isDarkBackground
      alignItems="flex-start"
      spacing={8}
      innerMaxW={SECTION_INNER_MAX_W}
      innerPy={{ base: 14, md: 18 }}
      pb={{ base: 10, md: 14, lg: 16 }}
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
          {t("thisSite.kicker")}
        </Text>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          scrollMarginTop="5.5rem"
        >
          {t("thisSite.title")}
        </Heading>
        <Text
          color="whiteAlpha.700"
          fontSize={{ base: "md", md: "lg" }}
          maxW="3xl"
          lineHeight="tall"
        >
          {t("thisSite.intro")}
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
            {t("thisSite.boxTitle")}
          </Text>
          <VStack align="stretch" spacing={3}>
            {featureKeys.map((key) => (
              <Box
                key={key}
                display="flex"
                gap={3}
                alignItems="flex-start"
              >
                <Box color="brand.300" mt={1} flexShrink={0}>
                  <FontAwesomeIcon icon={faCheck} size="sm" />
                </Box>
                <Text fontSize="sm" color="whiteAlpha.800" lineHeight="tall">
                  {t(key)}
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
            {t("thisSite.visionTitle")}
          </Text>
          <Text fontSize={{ base: "md", md: "lg" }} lineHeight="tall" color="whiteAlpha.900">
            {t("thisSite.vision")}
          </Text>
        </Box>
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ThisPortfolioSection;
