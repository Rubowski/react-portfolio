import React, { useState, useEffect } from "react";
import { IconButton, Fade } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fade in={isVisible}>
      <IconButton
        icon={<FontAwesomeIcon icon={faArrowUp} size="2x" />}
        onClick={scrollToTop}
        position="fixed"
        bottom="32px"
        right="32px"
        zIndex={1500}
        colorScheme="black"
        aria-label="Scroll to top"
        borderRadius="full"
        boxShadow="lg"
        size="md"
      />
    </Fade>
  );
};

export default ScrollToTopButton; 