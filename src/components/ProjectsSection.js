import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import Card from "./Card";
import {
  archivedProjects,
  featuredProjects,
} from "../data/projects";
import { SECTION_INNER_MAX_W } from "../constants/layout";
import { gradientProjects } from "../constants/sectionGradients";
import { useLanguage } from "../context/LanguageContext";

const projectGridProps = {
  w: "100%",
  gap: { base: 6, md: 8 },
  templateColumns: {
    base: "repeat(1, minmax(0, 1fr))",
    sm: "repeat(2, minmax(0, 1fr))",
    md: "repeat(3, minmax(0, 1fr))",
    lg: "repeat(4, minmax(0, 1fr))",
    xl: "repeat(4, minmax(0, 1fr))",
  },
};

/**
 * Up to 5 columns on wide screens. Previously the section max width (~1280px)
 * plus a 300px min track made a 4th column impossible; inner is widened here.
 */
const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <FullScreenSection
      isDarkBackground
      alignItems="flex-start"
      spacing={10}
      innerMaxW={SECTION_INNER_MAX_W}
      bgGradient={gradientProjects}
    >
      <VStack align="start" spacing={3} w="100%">
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          id="projects-section"
          scrollMarginTop="5.5rem"
        >
          {t("projects.featuredTitle")}
        </Heading>
        <Text
          color="whiteAlpha.700"
          fontSize={{ base: "md", md: "lg" }}
          maxW="3xl"
          lineHeight="tall"
        >
          {t("projects.featuredIntro")}
        </Text>
      </VStack>
      <Grid {...projectGridProps}>
        {featuredProjects.map((project) => (
          <Card
            key={project.id}
            title={t(`projects.items.${project.id}.title`)}
            description={t(`projects.items.${project.id}.description`)}
            imageSrc={project.image}
            github={project.github}
            demo={project.demo}
            url={project.url}
          />
        ))}
      </Grid>

      <Box
        as="hr"
        w="100%"
        border="none"
        borderTopWidth="1px"
        borderTopColor="whiteAlpha.200"
        my={{ base: 2, md: 4 }}
      />

      <VStack align="start" spacing={3} w="100%">
        <Heading
          as="h2"
          fontSize={{ base: "xl", md: "2xl" }}
          id="archived-projects-section"
          scrollMarginTop="5.5rem"
        >
          {t("projects.archivedTitle")}
        </Heading>
        <Text
          color="whiteAlpha.700"
          fontSize={{ base: "sm", md: "md" }}
          maxW="3xl"
          lineHeight="tall"
        >
          {t("projects.archivedIntro")}
        </Text>
      </VStack>
      <Grid {...projectGridProps}>
        {archivedProjects.map((project) => (
          <Card
            key={project.id}
            title={t(`projects.items.${project.id}.title`)}
            description={t(`projects.items.${project.id}.description`)}
            imageSrc={project.image}
            github={project.github}
            demo={project.demo}
            url={project.url}
          />
        ))}
      </Grid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
