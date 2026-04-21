import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const linkStyles = {
  display: "inline-flex",
  alignItems: "center",
  gap: 2,
  fontSize: "sm",
  fontWeight: "600",
  color: "brand.300",
  _hover: { color: "brand.200" },
};

const Card = ({ title, description, imageSrc, github, demo, url }) => {
  const { t } = useLanguage();

  return (
    <VStack
      align="stretch"
      spacing={0}
      borderRadius="xl"
      overflow="hidden"
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      bg="whiteAlpha.50"
      backdropFilter="blur(8px)"
      transition="transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
        borderColor: "brand.400",
      }}
      h="100%"
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          objectFit="cover"
          w="100%"
          h={{ base: "200px", sm: "220px" }}
          loading="lazy"
        />
      ) : (
        <Box
          h={{ base: "200px", sm: "220px" }}
          bg="whiteAlpha.100"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="whiteAlpha.500"
          fontSize="sm"
          px={4}
          textAlign="center"
        >
          {t("card.imagePlaceholder")}
        </Box>
      )}
      <VStack align="stretch" spacing={4} p={{ base: 5, md: 6 }} flex="1">
        <Heading size="md" lineHeight="snug">
          {title}
        </Heading>
        <Text
          color="whiteAlpha.800"
          fontSize="sm"
          lineHeight="tall"
          flex="1"
        >
          {description}
        </Text>
        {(demo || github || url) && (
          <Flex gap={{ base: 3, md: 6 }} flexWrap="wrap">
            {demo && (
              <Link href={demo} isExternal sx={linkStyles}>
                {t("card.liveDemo")}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </Link>
            )}
            {url && (
              <Link href={url} isExternal sx={linkStyles}>
                {t("card.website")}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </Link>
            )}
            {github && (
              <Link href={github} isExternal sx={linkStyles}>
                {t("card.github")}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </Link>
            )}
          </Flex>
        )}
      </VStack>
    </VStack>
  );
};

export default Card;
