/**
 * Options for the contact form “Type of enquiry” field.
 * `value` is submitted; `label` is what you see in email/Web3Forms.
 */
export const ENQUIRY_OPTIONS = [
  {
    value: "freelance",
    label: "Freelance or fixed-scope project",
  },
  {
    value: "contract_role",
    label: "Contract or ongoing engagement",
  },
  {
    value: "fulltime",
    label: "Full-time role (recruiter / hiring manager)",
  },
  {
    value: "shopify",
    label: "Shopify / e-commerce store",
  },
  {
    value: "wordpress",
    label: "WordPress site, theme, or plugin",
  },
  {
    value: "react_frontend",
    label: "React / frontend application",
  },
  {
    value: "consultation",
    label: "Consultation, audit, or code review",
  },
  {
    value: "other",
    label: "Something else",
  },
];

export const DEFAULT_ENQUIRY = ENQUIRY_OPTIONS[0].value;

export const enquiryValues = ENQUIRY_OPTIONS.map((o) => o.value);

export const enquiryLabelByValue = ENQUIRY_OPTIONS.reduce((acc, { value, label }) => {
  acc[value] = label;
  return acc;
}, {});
