import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Full-width section with centered inner column and responsive padding.
 * Pass Chakra props (bgGradient, backgroundColor, etc.) for the outer band.
 */
const FullScreenSection = ({
  children,
  isDarkBackground,
  spacing = 8,
  minH,
  justifyContent,
  alignItems,
  innerPx,
  innerPy,
  /** Max width of inner column (default ~1280px). Widen for dense grids. */
  innerMaxW = "1280px",
  ...outerProps
}) => {
  const textColor = isDarkBackground ? "white" : "gray.800";

  return (
    <VStack
      w="100%"
      align="stretch"
      spacing={0}
      color={textColor}
      {...outerProps}
    >
      <VStack
        w="100%"
        maxW={innerMaxW}
        mx="auto"
        px={innerPx ?? { base: 4, sm: 6, md: 10, lg: 12 }}
        py={innerPy ?? { base: 12, md: 18, lg: 22 }}
        spacing={spacing}
        minH={minH}
        justifyContent={justifyContent}
        alignItems={alignItems}
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
