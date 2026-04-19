import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { SECTION_INNER_MAX_W } from "../constants/layout";
import { gradientBeyond } from "../constants/sectionGradients";

/**
 * Work that doesn’t appear in the main grid—NDA, employer-owned, or off-scope.
 * Edit `notes` below; keep lines short so this stays a footnote, not a wall of caveats.
 */
const notes = [
  {
    icon: faBriefcase,
    title: "More Shopify commerce work",
    body:
      "Two additional stores I’ve worked on aren’t listed above—they’re still privately owned by companies, so they can’t be shared as public portfolio pieces.",
  },
  {
    icon: faGamepad,
    title: "Game dev experiments",
    body:
      "Small side projects in Godot and Unreal Engine. They’re minor and outside the focus of this site, but I’m glad to mention them in conversation if it ever matters.",
  },
];

const BeyondProjectsSection = () => {
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
          Beyond what’s on this page
        </Heading>
        <Text
          color="whiteAlpha.700"
          fontSize={{ base: "sm", md: "md" }}
          maxW="4xl"
          lineHeight="tall"
        >
          The grid above is a curated slice of work. I’ve shipped other things
          that don’t appear there for ordinary reasons—access, ownership, or
          simply because they’re a different kind of project.
        </Text>
      </VStack>

      <VStack align="stretch" spacing={4} w="100%">
        {notes.map((item) => (
          <Box
            key={item.title}
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
                {item.title}
              </Text>
              <Text fontSize="sm" color="whiteAlpha.700" lineHeight="tall">
                {item.body}
              </Text>
            </Box>
          </Box>
        ))}
      </VStack>
    </FullScreenSection>
  );
};

export default BeyondProjectsSection;
