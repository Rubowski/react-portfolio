/**
 * Section backgrounds — same dark palette, shared boundary colors.
 *
 * Each gradient starts with the *incoming* color held from 0% → ~8–10% so the
 * top of the band reads as a continuation of the section above (no instant
 * hue shift at the seam). Adjust LEAD_IN if you want a longer “blend-in”.
 */
const LEAD_IN = "10%";

/** Hero → “This portfolio” (floor #0f172a) */
export const gradientLanding =
  `linear(to-br, #080a10 0%, #080a10 ${LEAD_IN}, #111827 28%, #1a1632 52%, #121a2e 78%, #0f172a 100%)`;

/** Matches landing floor; → projects (#0d1f24) */
export const gradientThisPortfolio =
  `linear(to-b, #0f172a ${LEAD_IN}, #0e161f 24%, #0c1222 48%, #0d1a1e 70%, #0d1f24 100%)`;

/** → beyond */
export const gradientProjects =
  `linear(to-b, #0d1f24 ${LEAD_IN}, #0c1918 34%, #0f172a 58%, #0d1f24 100%)`;

/** → contact (#0f172a) */
export const gradientBeyond =
  `linear(to-b, #0d1f24 ${LEAD_IN}, #0c1818 40%, #0a1628 72%, #0f172a 100%)`;

/** → footer (#111827) */
export const gradientContact =
  `linear(to-br, #0f172a ${LEAD_IN}, #15122c 28%, #1a1035 52%, #121a28 76%, #111827 100%)`;

export const gradientFooter =
  `linear(to-b, #111827 ${LEAD_IN}, #0c0e14 52%, #060709 100%)`;
