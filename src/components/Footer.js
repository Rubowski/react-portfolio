import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { gradientFooter } from "../constants/sectionGradients";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <Box
      as="footer"
      bgGradient={gradientFooter}
      borderTopWidth="1px"
      borderColor="whiteAlpha.50"
    >
      <Flex
        maxW="1280px"
        mx="auto"
        px={{ base: 4, md: 10 }}
        py={8}
        justify="center"
        align="center"
      >
        <Text color="whiteAlpha.600" fontSize="sm" textAlign="center">
          {t("footer.line", { year })}
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
