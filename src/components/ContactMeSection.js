import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Heading,
  Input,
  Link,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faClock,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import { SECTION_INNER_MAX_W } from "../constants/layout";
import {
  DEFAULT_ENQUIRY,
  ENQUIRY_OPTIONS,
  enquiryValues,
} from "../constants/contactEnquiry";
import { gradientContact } from "../constants/sectionGradients";

const fieldStyles = {
  bg: "whiteAlpha.100",
  borderColor: "whiteAlpha.300",
  color: "white",
  _hover: { borderColor: "whiteAlpha.400" },
  _placeholder: { color: "whiteAlpha.500" },
};

const messageTips = [
  "What you're building or fixing (store, site, feature)",
  "Rough timeline or go-live date",
  "Budget range or type of engagement (project, retainer, etc.)",
  "Platform or stack if you know it (e.g. Shopify, WordPress, etc.)",
  "Whether design and copy are ready, or it needs to be created from scratch"
];

const asideLinks = [
  {
    label: "Email",
    text: "odi.roumpeas@gmail.com",
    href: "mailto:odi.roumpeas@gmail.com",
    icon: faEnvelope,
    external: false,
  },
  {
    label: "GitHub",
    text: "Rubowski",
    href: "https://github.com/Rubowski",
    icon: faGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    text: "Odysseas Roumpeas",
    href: "https://www.linkedin.com/in/odysseas-roumpeas-807272296/",
    icon: faLinkedin,
    external: true,
  },
];

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: DEFAULT_ENQUIRY,
      comment: "",
    },
    onSubmit: (values) => submit(values),
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().oneOf(
        enquiryValues,
        "Please pick a valid enquiry type"
      ),
      comment: Yup.string()
        .required("Required")
        .min(25, "Must be at least 25 characters"),
    }),
  });

  const resetFormRef = useRef(formik.resetForm);
  resetFormRef.current = formik.resetForm;

  useEffect(() => {
    if (response?.type === "success") {
      onOpen("success", response.message);
      resetFormRef.current();
    } else if (response?.type === "error") {
      onOpen("error", response.message);
    }
  }, [response, onOpen]);

  return (
    <FullScreenSection
      isDarkBackground
      alignItems="stretch"
      spacing={0}
      innerMaxW={SECTION_INNER_MAX_W}
      bgGradient={gradientContact}
    >
      <VStack spacing={{ base: 10, lg: 12 }} w="100%" align="stretch">
        <VStack spacing={4} textAlign="center" w="100%" px={{ base: 0, sm: 2 }}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            id="contactme-section"
            scrollMarginTop="5.5rem"
          >
            Let&apos;s work together
          </Heading>
          <Text
            color="whiteAlpha.700"
            fontSize={{ base: "md", md: "lg" }}
            maxW="2xl"
            mx="auto"
            lineHeight="tall"
          >
            Send a note about your project, timeline, and budget. I usually
            reply within a few days.
          </Text>
        </VStack>

        <Grid
          templateColumns={{
            base: "1fr",
            lg: "minmax(0, 1.15fr) minmax(0, 1fr)",
          }}
          gap={{ base: 8, lg: 12, xl: 14 }}
          w="100%"
          alignItems="stretch"
        >
          <Box
            w="100%"
            p={{ base: 5, md: 8 }}
            rounded="xl"
            bg="blackAlpha.400"
            borderWidth="1px"
            borderColor="whiteAlpha.200"
            backdropFilter="blur(12px)"
          >
            <InfoBlurb
              icon={faPaperPlane}
              title="Message"
              body="All fields are required unless noted."
              mb={6}
              compact
            />
            <form onSubmit={formik.handleSubmit} noValidate>
              <VStack spacing={5}>
                <FormControl
                  isInvalid={formik.touched.firstName && formik.errors.firstName}
                >
                  <FormLabel htmlFor="firstName">Name</FormLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    {...formik.getFieldProps("firstName")}
                    sx={fieldStyles}
                  />
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.email && formik.errors.email}
                >
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    {...formik.getFieldProps("email")}
                    sx={fieldStyles}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                  <Select
                    id="type"
                    name="type"
                    {...formik.getFieldProps("type")}
                    sx={{
                      ...fieldStyles,
                      "& option": { background: "#1a202c", color: "white" },
                    }}
                  >
                    {ENQUIRY_OPTIONS.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl
                  isInvalid={formik.touched.comment && formik.errors.comment}
                >
                  <FormLabel htmlFor="comment">Message</FormLabel>
                  <Textarea
                    id="comment"
                    name="comment"
                    rows={6}
                    resize="vertical"
                    {...formik.getFieldProps("comment")}
                    sx={fieldStyles}
                  />
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>
                <Button
                  type="submit"
                  size="lg"
                  w="full"
                  isLoading={isLoading}
                  loadingText="Sending"
                  bg="brand.500"
                  color="gray.900"
                  _hover={{ bg: "brand.400" }}
                  _active={{ bg: "brand.600" }}
                >
                  Send message
                </Button>
              </VStack>
            </form>
          </Box>

          <Flex
            direction="column"
            w="100%"
            h={{ lg: "100%" }}
            minH="0"
            align={{ base: "center", lg: "stretch" }}
            maxW={{ base: "400px", lg: "none" }}
            mx={{ base: "auto", lg: 0 }}
          >
            <VStack spacing={5} w="100%" align="stretch">
              <Box
                w="100%"
                p={5}
                rounded="xl"
                bg="whiteAlpha.50"
                borderWidth="1px"
                borderColor="whiteAlpha.200"
              >
                <InfoBlurb
                  icon={faClock}
                  title="Response time"
                  body="Typically within 2–4 business days. Urgent timelines? Mention it in your message."
                />
              </Box>
              <VStack align="stretch" spacing={3} w="100%">
                <Text
                  fontSize="xs"
                  fontWeight="700"
                  letterSpacing="0.12em"
                  color="whiteAlpha.500"
                  textAlign={{ base: "center", lg: "left" }}
                >
                  DIRECT CONTACT
                </Text>
                {asideLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    {...(item.external
                      ? { isExternal: true, rel: "noopener noreferrer" }
                      : {})}
                    display="flex"
                    alignItems="center"
                    gap={4}
                    p={4}
                    rounded="lg"
                    bg="blackAlpha.300"
                    borderWidth="1px"
                    borderColor="whiteAlpha.100"
                    color="white"
                    transition="border-color 0.2s, background 0.2s"
                    _hover={{
                      borderColor: "brand.400",
                      bg: "whiteAlpha.100",
                      textDecoration: "none",
                    }}
                  >
                    <Box
                      as="span"
                      color="brand.300"
                      fontSize="lg"
                      w="1.25rem"
                      textAlign="center"
                    >
                      <FontAwesomeIcon icon={item.icon} />
                    </Box>
                    <Box minW={0}>
                      <Text fontSize="xs" color="whiteAlpha.500" fontWeight="600">
                        {item.label}
                      </Text>
                      <Text fontWeight="600" noOfLines={1}>
                        {item.text}
                      </Text>
                    </Box>
                  </Link>
                ))}
              </VStack>
            </VStack>

            <Box
              w="100%"
              mt={{ base: 5, lg: "auto" }}
              pt={{ base: 0, lg: 2 }}
              p={5}
              rounded="xl"
              bg="whiteAlpha.50"
              borderWidth="1px"
              borderColor="whiteAlpha.200"
            >
              <Box display="flex" gap={4} alignItems="flex-start">
                <Box color="brand.300" fontSize="lg" flexShrink={0} mt={0.5}>
                  <FontAwesomeIcon icon={faClipboardList} />
                </Box>
                <Box>
                  <Text fontWeight="700" fontSize="sm" mb={3} color="white">
                    Include in your message
                  </Text>
                  <VStack align="stretch" spacing={3}>
                    {messageTips.map((line) => (
                      <Text
                        key={line}
                        fontSize="sm"
                        color="whiteAlpha.700"
                        lineHeight="tall"
                        pl={3}
                        borderLeftWidth="2px"
                        borderLeftColor="brand.400"
                      >
                        {line}
                      </Text>
                    ))}
                  </VStack>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Grid>
      </VStack>
    </FullScreenSection>
  );
};

function InfoBlurb({ icon, title, body, mb = 0, compact }) {
  return (
    <Box
      display="flex"
      gap={4}
      alignItems="flex-start"
      mb={mb}
    >
      <Box
        mt={compact ? 0 : 0.5}
        color="brand.300"
        fontSize={compact ? "md" : "lg"}
        flexShrink={0}
      >
        <FontAwesomeIcon icon={icon} />
      </Box>
      <Box>
        <Text fontWeight="700" fontSize={compact ? "sm" : "md"} mb={compact ? 1 : 2}>
          {title}
        </Text>
        <Text
          fontSize="sm"
          color="whiteAlpha.700"
          lineHeight="tall"
        >
          {body}
        </Text>
      </Box>
    </Box>
  );
}

export default ContactMeSection;
