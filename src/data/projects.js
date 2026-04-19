/**
 * Portfolio projects shown in the "Featured Projects" section.
 *
 * - image: import a file from ../images/ or omit for a placeholder tile.
 * - github / demo: optional URLs; at least one is typical.
 */
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import photo5 from "../images/photo5.jpg";
import photo6 from "../images/photo6.jpg";
import photo7 from "../images/photo7.jpg";
import photo8 from "../images/photo8.jpg";

const projects = [
  {
    title: "Aesthet",
    description:
      "Aesthet is the world's premier online shopping destination for unique fashion items by Greece's most coveted contemporary designer brands. An e-commerce store built with Shopify, featuring many custom made sections and functionalities. This is a project still under development. You can view a live demo of the website, as it is currently, in the link below.",
    demo: "https://aesthetgr.myshopify.com/",
    image: photo6,
  },
  {
    title: "Lulula",
    description:
      "LuLuLa is a Greek family-owned business in the beauty and personal care sector, with the aim of offering carefully selected high-quality skincare and haircare products. An e-commerce store built with Shopify, featuring many custom made sections and functionalities. You can view the website live in the link below.",
    url: "https://lulula.gr/",
    image: photo5,
  },
  {
    title: "Polyprint",
    description:
      "Polyprint is a company that designs, develops, and assembles professional DTG and DTF printing systems, along with the consumables and support services required for daily production. An e-commerce store built with Shopify, featuring many custom made sections and functionalities. You can view the website live in the link below.",
    url: "https://polyprintdtf.com/",
    image: photo7,
  },
  {
    title: "RN Dental Project",
    description:
      "RN Dental is a local dental clinic in Athens, spanning over 35 years of operation. With a dedicated team of professionals, they offer a wide range of dental services to meet the needs of their patients. A live website built using WordPress and Elementor, featuring a unique design and layout. You can view the website live in the link below.",
    url: "https://rndental.gr/",
    image: photo8,
  },
  {
    title: "WordPress Website",
    description:
      "A locally hosted website built using WordPress, featuring content of FromSoftware but fully customized with a unique design and layout.",
    github: "https://github.com/Rubowski/fromsoft-portal",
    image: photo1,
  },
  {
    title: "WordPress E-commerce",
    description:
      "A custom e-commerce website, locally hosted and built with WordPress and WooCommerce. Inspired by the concept of Displate, it features a unique design and layout tailored from scratch and a fully functional e-commerce store.",
    github: "https://github.com/Rubowski/displate-e-shop",
    image: photo2,
  },
  {
    title: "Contact Book Web App",
    description:
      "A modern, animated, and responsive web-based contact book application. Effortlessly add, search, view, edit, and delete contacts with a beautiful, interactive UI and real-time AJAX updates. No page reloads required.",
    github: "https://github.com/Rubowski/contact-book",
    image: photo3,
  },
  {
    title: "Mystery of the Four Rooms (Puzzle Game - Web App)",
    description:
      "A web-based puzzle game where you solve riddles, collect magical items, and escape the mysterious rooms! This game is built with vanilla HTML, CSS, and JavaScript, and features interactive gameplay, sound effects, and a modern, responsive design.",
    github: "https://github.com/Rubowski/riddle-room",
    image: photo4,
  }
];

export default projects;
