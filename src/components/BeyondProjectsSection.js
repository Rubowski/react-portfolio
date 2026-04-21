import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { SECTION_INNER_MAX_W } from "../constants/layout";
import { gradientBeyond } from "../constants/sectionGradients";
import { useLanguage } from "../context/LanguageContext";

const noteBlocks = [
  { id: "moreShopify", icon: faBriefcase },
  { id: "gameDev", icon: faGamepad },
];

const BeyondProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <FullScreenSection
      isDarkBackground
      alignItems="flex-start"
      spacing={6}
      innerMaxW={SECTION_INNER_MAX_W}
      innerPy={{ base: 12, md: 16 }}
      bgGradient={gradientBeyond}
      id="more-experience-section"
    >
      <VStack align="start" spacing={2} w="100%">
        <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }}>
          {t("beyond.title")}
        </Heading>
        <Text
          color="whiteAlpha.700"
          fontSize={{ base: "sm", md: "md" }}
          maxW="4xl"
          lineHeight="tall"
        >
          {t("beyond.intro")}
        </Text>
      </VStack>

      <VStack align="stretch" spacing={4} w="100%">
        {noteBlocks.map((item) => (
          <Box
            key={item.id}
            display="flex"
            gap={4}
            alignItems="flex-start"
            p={{ base: 4, md: 5 }}
            rounded="lg"
            bg="blackAlpha.300"
            borderWidth="1px"
            borderColor="whiteAlpha.100"
          >
            <Box color="brand.300" fontSize="lg" flexShrink={0} mt={0.5}>
              <FontAwesomeIcon icon={item.icon} />
            </Box>
            <Box>
              <Text fontWeight="700" fontSize="sm" mb={2} color="white">
                {t(`beyond.${item.id}Title`)}
              </Text>
              <Text fontSize="sm" color="whiteAlpha.700" lineHeight="tall">
                {t(`beyond.${item.id}Body`)}
              </Text>
            </Box>
          </Box>
        ))}
      </VStack>
    </FullScreenSection>
  );
};

export default BeyondProjectsSection;
