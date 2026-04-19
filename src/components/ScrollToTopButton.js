import React, { useState, useEffect } from "react";
import { IconButton, Fade } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fade in={isVisible}>
      <IconButton
        icon={<FontAwesomeIcon icon={faArrowUp} />}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        position="fixed"
        bottom={{ base: "20px", md: "32px" }}
        right={{ base: "20px", md: "32px" }}
        zIndex={1500}
        aria-label="Scroll to top"
        borderRadius="full"
        boxShadow="lg"
        size="md"
        bg="brand.500"
        color="gray.900"
        _hover={{ bg: "brand.400" }}
        _active={{ bg: "brand.600" }}
      />
    </Fade>
  );
};

export default ScrollToTopButton;
