import React from "react";
import {
  Avatar,
  Box,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import FullScreenSection from "./FullScreenSection";
import { gradientLanding } from "../constants/sectionGradients";
import { useLanguage } from "../context/LanguageContext";

const LandingSection = () => {
  const { t } = useLanguage();
  const focusKeys = [
    "landing.focusShopify",
    "landing.focusWordPress",
    "landing.focusReact",
    "landing.focusPerformance",
  ];

  return (
    <FullScreenSection
      alignItems="stretch"
      isDarkBackground
      minH={{ base: "100dvh", md: "100vh" }}
      innerPy={0}
      innerPx={{ base: 4, sm: 6, md: 10, lg: 12 }}
      spacing={0}
      bgGradient={gradientLanding}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="relative"
        zIndex={1}
        w="100%"
        maxW="1280px"
        mx="auto"
        minH={{ base: "100dvh", md: "100vh" }}
        display="flex"
        flexDirection="column"
        px={0}
        sx={{
          "@keyframes fadeUp": {
            from: { opacity: 0, transform: "translateY(12px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
          "@keyframes chevronBob": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(5px)" },
          },
        }}
      >
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          minH={0}
          pt={{ base: 24, md: 28 }}
          pb={4}
          position="relative"
          zIndex={1}
        >
          <VStack spacing={6} textAlign="center" maxW="2xl" mx="auto">
            <Avatar
              size="2xl"
              name="Odysseas"
              src="https://cdn.dribbble.com/userupload/21017243/file/original-28f1d48ac3ef1339bedf36c69035335e.gif"
              borderWidth="3px"
              borderColor="brand.400"
              boxShadow="0 0 0 4px rgba(45, 212, 191, 0.15)"
            />
            <Heading
              as="h1"
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              lineHeight="shorter"
              animation="fadeUp 0.6s ease-out both"
            >
              {t("landing.greeting")}
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="brand.200"
              fontWeight="500"
              animation="fadeUp 0.6s ease-out 0.08s both"
            >
              {t("landing.bio1")}
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="whiteAlpha.800"
              maxW="lg"
              mx="auto"
              lineHeight="tall"
              animation="fadeUp 0.6s ease-out 0.16s both"
            >
              {t("landing.bio2")}
            </Text>

            <HStack
              justify="center"
              flexWrap="wrap"
              gap={2}
              pt={2}
              animation="fadeUp 0.6s ease-out 0.24s both"
            >
              {focusKeys.map((key) => (
                <Box
                  key={key}
                  px={3}
                  py={1}
                  rounded="full"
                  fontSize="xs"
                  fontWeight="600"
                  letterSpacing="0.04em"
                  textTransform="uppercase"
                  color="whiteAlpha.900"
                  borderWidth="1px"
                  borderColor="whiteAlpha.200"
                  bg="whiteAlpha.50"
                >
                  {t(key)}
                </Box>
              ))}
            </HStack>
          </VStack>
        </Box>

        <Box
          flexShrink={0}
          position="relative"
          zIndex={1}
          pb={{ base: 6, md: 8 }}
          pt={2}
          textAlign="center"
          color="whiteAlpha.500"
          fontSize="xs"
          fontWeight="600"
          letterSpacing="0.14em"
          textTransform="uppercase"
          sx={{ animation: "fadeUp 0.7s ease-out 0.35s both" }}
          aria-hidden
        >
          <Text mb={2}>{t("landing.scroll")}</Text>
          <Box
            as="span"
            display="inline-block"
            sx={{
              animation: "chevronBob 2.2s ease-in-out 1s infinite",
            }}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </Box>
        </Box>
      </Box>
    </FullScreenSection>
  );
};

export default LandingSection;
