import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "WordPress Website",
    description:
      "A locally hosted website built using WordPress, featuring content of FromSoftware but fully customized with a unique design and layout.",
    github: "https://github.com/Rubowski/fromsoft-portal",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "WordPress E-commerce",
    description:
      "A custom e-commerce website, locally hosted and built with WordPress and WooCommerce. Inspired by the concept of Displate, it features a unique design and layout tailored from scratch and a fully functional e-commerce store.",
    github: "https://github.com/Rubowski/displate-e-shop",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Contact Book Web App",
    description:
      "A modern, animated, and responsive web-based contact book application. Effortlessly add, search, view, edit, and delete contacts with a beautiful, interactive UI and real-time AJAX updates. No page reloads required.",
    github: "https://github.com/Rubowski/contact-book",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Mystery of the Four Rooms (Puzzle Game - Web App)",
    description:
      "A web-based puzzle game where you solve riddles, collect magical items, and escape the mysterious rooms! This game is built with vanilla HTML, CSS, and JavaScript, and features interactive gameplay, sound effects, and a modern, responsive design.",
    github: "https://github.com/Rubowski/riddle-room",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            github={project.github}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
