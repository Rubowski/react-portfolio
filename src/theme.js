import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: '"Outfit", system-ui, sans-serif',
    body: '"Source Sans 3", system-ui, sans-serif',
  },
  colors: {
    brand: {
      50: "#e6fffa",
      100: "#b2f5ea",
      200: "#81e6d9",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
    },
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: "gray.900",
        color: "gray.100",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 600,
        letterSpacing: "-0.02em",
      },
    },
    Link: {
      baseStyle: {
        _hover: { color: "brand.300" },
      },
    },
  },
});

export default theme;
