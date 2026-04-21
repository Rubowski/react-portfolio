/**
 * Contact form “Type of enquiry” values. Labels come from i18n (`labelKey`).
 */
export const ENQUIRY_OPTIONS = [
  {
    value: "freelance",
    labelKey: "contact.enquiryOptions.freelance",
  },
  {
    value: "contract_role",
    labelKey: "contact.enquiryOptions.contract_role",
  },
  {
    value: "fulltime",
    labelKey: "contact.enquiryOptions.fulltime",
  },
  {
    value: "shopify",
    labelKey: "contact.enquiryOptions.shopify",
  },
  {
    value: "wordpress",
    labelKey: "contact.enquiryOptions.wordpress",
  },
  {
    value: "react_frontend",
    labelKey: "contact.enquiryOptions.react_frontend",
  },
  {
    value: "consultation",
    labelKey: "contact.enquiryOptions.consultation",
  },
  {
    value: "other",
    labelKey: "contact.enquiryOptions.other",
  },
];

export const DEFAULT_ENQUIRY = ENQUIRY_OPTIONS[0].value;

export const enquiryValues = ENQUIRY_OPTIONS.map((o) => o.value);
