import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Odysseas!";
const bio1 = "A frontend developer";
const bio2 = "and this is my portfolio";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar
        size="2xl"
        name="Odysseas"
        src="https://cdn.dribbble.com/userupload/21017243/file/original-28f1d48ac3ef1339bedf36c69035335e.gif"
      />
      <Heading as="h1" size="lg">
        {greeting}
      </Heading>
      <Heading as="h2" size="lg">
        {bio1}
      </Heading>
      <Heading as="h2" size="lg">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
