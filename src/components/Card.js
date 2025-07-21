import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, github }) => {
  return (
    <VStack
      spacing={4}
      align="start"
      backgroundColor="black"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
      transition="0.3s ease-in-out"
      width="100%"
      maxW="sm"
    >
      <Image src={imageSrc} alt={title} objectFit="cover" width="100%" />
      <VStack align="start" spacing={2} px={4} pb={4}>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <strong>View on GitHub</strong> <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        )}
      </VStack>
    </VStack>
  );
};

export default Card;
