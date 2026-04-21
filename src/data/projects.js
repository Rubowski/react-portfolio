/**
 * Portfolio project data (non-text). Copy lives in `src/i18n/translations.js`
 * under `projects.items.<id>`.
 *
 * - featuredProjects: live or demo-ready work.
 * - archivedProjects: older work; GitHub / local only.
 */
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import photo5 from "../images/photo5.jpg";
import photo6 from "../images/photo6.jpg";
import photo7 from "../images/photo7.jpg";
import photo8 from "../images/photo8.jpg";

export const featuredProjects = [
  {
    id: "lulula",
    url: "https://lulula.gr/",
    image: photo5,
  },
  {
    id: "polyprint",
    url: "https://polyprintdtf.com/",
    image: photo7,
  },
  {
    id: "rnDental",
    url: "https://rndental.gr/",
    image: photo8,
  },
  {
    id: "aesthet",
    demo: "https://aesthetgr.myshopify.com/",
    image: photo6,
  },
];

export const archivedProjects = [
  {
    id: "wpFromsoft",
    github: "https://github.com/Rubowski/fromsoft-portal",
    image: photo1,
  },
  {
    id: "wpEshop",
    github: "https://github.com/Rubowski/displate-e-shop",
    image: photo2,
  },
  {
    id: "contactBook",
    github: "https://github.com/Rubowski/contact-book",
    image: photo3,
  },
  {
    id: "fourRooms",
    github: "https://github.com/Rubowski/riddle-room",
    image: photo4,
  },
];
