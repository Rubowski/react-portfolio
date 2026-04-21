import { useState } from "react";
import { ENQUIRY_OPTIONS } from "../constants/contactEnquiry";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

/**
 * @param { (path: string, vars?: Record<string, string | number>) => string } t
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data, t) => {
    const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
    setResponse(null);
    setLoading(true);
    try {
      if (!accessKey) {
        throw new Error(t("contact.errorNotConfigured"));
      }
      const opt = ENQUIRY_OPTIONS.find((o) => o.value === data.type);
      const enquiry = opt ? t(opt.labelKey) : data.type;
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio contact: ${enquiry}`,
          name: data.firstName,
          email: data.email,
          message: `Enquiry type: ${enquiry}\n\n${data.comment}`,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === false) {
        throw new Error(
          json.message || t("contact.errorSendFailed")
        );
      }
      setResponse({
        type: "success",
        message: t("contact.submitSuccess", { name: data.firstName }),
      });
    } catch (error) {
      setResponse({
        type: "error",
        message:
          error.message ||
          t("contact.errorGeneric"),
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
