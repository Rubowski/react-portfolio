import { useState } from "react";
import { enquiryLabelByValue } from "../constants/contactEnquiry";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    const accessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;
    setResponse(null);
    setLoading(true);
    try {
      if (!accessKey) {
        throw new Error(
          "Contact form is not configured. Add REACT_APP_WEB3FORMS_ACCESS_KEY to .env.local (local) and to Vercel Environment Variables (production). Get a key at https://web3forms.com"
        );
      }
      const enquiry = enquiryLabelByValue[data.type] ?? data.type;
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
          json.message || "Could not send your message. Please try again."
        );
      }
      setResponse({
        type: "success",
        message: `Thanks ${data.firstName}, your message was sent.`,
      });
    } catch (error) {
      setResponse({
        type: "error",
        message:
          error.message ||
          "Something went wrong, please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
