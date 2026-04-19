import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { SECTION_INNER_MAX_W } from "../constants/layout";

const socials = [
  { icon: faEnvelope, url: "mailto:odi.roumpeas@gmail.com", label: "Email" },
  { icon: faGithub, url: "https://github.com/Rubowski", label: "GitHub" },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/odysseas-roumpeas-807272296/",
    label: "LinkedIn",
  },
];

const scrollToSection = (anchor) => (event) => {
  event.preventDefault();
  const id = `${anchor}-section`;
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Header = () => {
  const headerRef = useRef(null);
  const prevScrollY = useRef(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (headerRef.current) {
        headerRef.current.style.transform =
          currentScrollY > prevScrollY.current && currentScrollY > 80
            ? "translateY(-100%)"
            : "translateY(0)";
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = ({ onNavigate } = {}) => (
    <HStack spacing={{ base: 5, md: 5, lg: 5 }}>
      <Link
        href="#projects-section"
        onClick={(e) => {
          scrollToSection("projects")(e);
          onNavigate?.();
        }}
        fontWeight="500"
        fontSize="sm"
        color="whiteAlpha.900"
        _hover={{ color: "brand.300" }}
      >
        Projects
      </Link>
      <Link
        href="#contactme-section"
        onClick={(e) => {
          scrollToSection("contactme")(e);
          onNavigate?.();
        }}
        fontWeight="500"
        fontSize="sm"
        color="whiteAlpha.900"
        _hover={{ color: "brand.300" }}
      >
        Contact
      </Link>
    </HStack>
  );

  return (
    <Box
      ref={headerRef}
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      transform="translateY(0)"
      transitionProperty="transform"
      transitionDuration=".25s"
      transitionTimingFunction="ease-out"
      bg="blackAlpha.700"
      backdropFilter="blur(12px)"
      borderBottomWidth="1px"
      borderColor="whiteAlpha.200"
    >
      <Flex
        w="100%"
        maxW={SECTION_INNER_MAX_W}
        mx="auto"
        px={{ base: 4, sm: 6, md: 10, lg: 12 }}
        py={3}
        align="center"
        justify="space-between"
        gap={{ base: 4, md: 6 }}
      >
        <HStack spacing={{ base: 5, sm: 5, md: 5, lg: 5 }}>
          {socials.map((social) => (
            <Link
              key={social.url}
              href={social.url}
              aria-label={social.label}
              {...(social.url.startsWith("mailto:")
                ? {}
                : { target: "_blank", rel: "noopener noreferrer" })}
              color="whiteAlpha.900"
              _hover={{ color: "brand.300" }}
            >
              <Box as="span" fontSize={{ base: "xl", md: "2xl" }} lineHeight={1}>
                <FontAwesomeIcon icon={social.icon} />
              </Box>
            </Link>
          ))}
        </HStack>

        <HStack spacing={3} display={{ base: "none", md: "flex" }}>
          <NavLinks />
        </HStack>

        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          variant="ghost"
          color="whiteAlpha.900"
          icon={<FontAwesomeIcon icon={faBars} />}
          onClick={onOpen}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg="gray.900" borderLeftWidth="1px" borderColor="whiteAlpha.200">
          <DrawerCloseButton color="whiteAlpha.800" />
          <DrawerHeader color="white" borderBottomWidth="1px" borderColor="whiteAlpha.100">
            Menu
          </DrawerHeader>
          <DrawerBody pt={6}>
            <Flex direction="column" gap={6} align="flex-start">
              <NavLinks onNavigate={onClose} />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
