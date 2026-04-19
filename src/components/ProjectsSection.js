import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Grid, Heading, Text, VStack } from "@chakra-ui/react";
import Card from "./Card";
import projects from "../data/projects";
import { SECTION_INNER_MAX_W } from "../constants/layout";
import { gradientProjects } from "../constants/sectionGradients";

/**
 * Up to 5 columns on wide screens. Previously the section max width (~1280px)
 * plus a 300px min track made a 4th column impossible; inner is widened here.
 */
const ProjectsSection = () => {
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
          Featured projects
        </Heading>
        <Text
          color="whiteAlpha.700"
          fontSize={{ base: "md", md: "lg" }}
          maxW="3xl"
          lineHeight="tall"
        >
          Selected client work and personal builds — Shopify, WordPress, and
          full-stack experiments.
        </Text>
      </VStack>
      <Grid
        w="100%"
        gap={{ base: 6, md: 8 }}
        templateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          sm: "repeat(2, minmax(0, 1fr))",
          md: "repeat(3, minmax(0, 1fr))",
          lg: "repeat(4, minmax(0, 1fr))",
          xl: "repeat(4, minmax(0, 1fr))",
        }}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
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
