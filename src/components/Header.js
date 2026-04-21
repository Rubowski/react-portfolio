import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  Box,
  Button,
  ButtonGroup,
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
import { useLanguage } from "../context/LanguageContext";

const socialKeys = [
  { icon: faEnvelope, url: "mailto:odi.roumpeas@gmail.com", labelKey: "social.email" },
  { icon: faGithub, url: "https://github.com/Rubowski", labelKey: "social.github" },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/odysseas-roumpeas-807272296/",
    labelKey: "social.linkedin",
  },
];

const scrollToSection = (anchor) => (event) => {
  event.preventDefault();
  const id = `${anchor}-section`;
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Header = () => {
  const { locale, setLocale, t } = useLanguage();
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

  const LanguageToggle = ({ compact } = {}) => (
    <ButtonGroup
      size="sm"
      isAttached
      variant="outline"
      borderColor="whiteAlpha.400"
      aria-label={t("header.switchLanguage")}
      {...(compact ? { w: "100%" } : {})}
    >
      <Button
        flex={compact ? 1 : undefined}
        aria-pressed={locale === "en"}
        fontWeight={locale === "en" ? "700" : "500"}
        bg={locale === "en" ? "whiteAlpha.200" : "transparent"}
        color="whiteAlpha.900"
        _hover={{ bg: "whiteAlpha.250" }}
        onClick={() => setLocale("en")}
      >
        {t("header.langEnglish")}
      </Button>
      <Button
        flex={compact ? 1 : undefined}
        aria-pressed={locale === "el"}
        fontWeight={locale === "el" ? "700" : "500"}
        bg={locale === "el" ? "whiteAlpha.200" : "transparent"}
        color="whiteAlpha.900"
        _hover={{ bg: "whiteAlpha.250" }}
        onClick={() => setLocale("el")}
      >
        {t("header.langGreek")}
      </Button>
    </ButtonGroup>
  );

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
        {t("header.projects")}
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
        {t("header.contact")}
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
          {socialKeys.map((social) => (
            <Link
              key={social.url}
              href={social.url}
              aria-label={t(social.labelKey)}
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
          <LanguageToggle />
          <NavLinks />
        </HStack>

        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label={t("header.openMenu")}
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
            {t("header.menu")}
          </DrawerHeader>
          <DrawerBody pt={6}>
            <Flex direction="column" gap={6} align="stretch">
              <NavLinks onNavigate={onClose} />
              <LanguageToggle compact />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
