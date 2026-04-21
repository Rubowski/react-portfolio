import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useLanguage } from "../context/LanguageContext";
import { useRef } from "react";

function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const { t } = useLanguage();
  const cancelRef = useRef();
  const isSuccess = type === "success";

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay bg="blackAlpha.700" backdropFilter="blur(4px)" />
      <AlertDialogContent
        bg={isSuccess ? "gray.800" : "gray.800"}
        borderWidth="1px"
        borderColor={isSuccess ? "brand.500" : "orange.400"}
        mx={4}
      >
        <AlertDialogHeader
          fontSize="lg"
          fontWeight="bold"
          color="white"
          pb={2}
        >
          {isSuccess ? t("alert.successTitle") : t("alert.errorTitle")}
        </AlertDialogHeader>
        <AlertDialogBody color="whiteAlpha.800">{message}</AlertDialogBody>
        <AlertDialogFooter>
          <Button
            ref={cancelRef}
            onClick={onClose}
            bg="whiteAlpha.200"
            color="white"
            _hover={{ bg: "whiteAlpha.300" }}
          >
            {t("alert.close")}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Alert;
