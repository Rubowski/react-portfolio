/**
 * UI copy — English (default) and Greek. Keys are dot paths via `t('section.key')`.
 * Interpolation: `t('foo', { name: 'x' })` replaces {{name}} in the string.
 */
const en = {
  meta: {
    title: "Odysseas Roumpeas · Frontend developer",
    description:
      "Odysseas Roumpeas — frontend developer portfolio. Shopify, WordPress, and modern web projects.",
  },
  header: {
    projects: "Projects",
    contact: "Contact",
    menu: "Menu",
    openMenu: "Open menu",
    switchLanguage: "Language",
    langEnglish: "EN",
    langGreek: "ΕΛ",
  },
  landing: {
    greeting: "Hello, I'm Odysseas",
    bio1: "Frontend developer",
    bio2: "I build fast, thoughtful interfaces for the web",
    scroll: "Scroll",
    focusShopify: "Shopify",
    focusWordPress: "WordPress",
    focusReact: "React",
    focusPerformance: "Performance",
  },
  thisSite: {
    kicker: "Meta",
    title: "This portfolio site",
    intro:
      "This page is also a project: a small React app I maintain myself—same care for layout, performance, and accessibility I bring to client work. It's the reference implementation of how I like to ship frontends.",
    boxTitle: "What's in the box",
    visionTitle: "Vision",
    vision:
      "I wanted this site to feel like the work it represents: clear structure, honest copy, and no friction between you and a conversation—on any screen size.",
    feature1:
      "React (Create React App) with Chakra UI and a custom theme",
    feature2:
      "Responsive layout, fluid project grid, and mobile-first navigation",
    feature3:
      "Contact form wired to a real inbox (no fake demo submit)",
    feature4: "Deployed as a static site on Vercel for fast loads worldwide",
  },
  projects: {
    featuredTitle: "Featured projects",
    featuredIntro:
      "Selected client work and demos — Shopify storefronts, WordPress, and work in progress you can open in the browser.",
    archivedTitle: "Earlier work & learning projects",
    archivedIntro:
      "Older and student-style pieces kept for context. Nothing here is deployed for public viewing — you would need to clone the repo and run it locally (or inspect the code on GitHub). Quality and polish vary; they are not representative of how I ship client work today.",
    items: {
      lulula: {
        title: "Lulula",
        description:
          "LuLuLa is a Greek family-owned business in the beauty and personal care sector, with the aim of offering carefully selected high-quality skincare and haircare products. An e-commerce store built with Shopify, featuring many custom made sections and functionalities. You can view the website live in the link below.",
      },
      polyprint: {
        title: "Polyprint",
        description:
          "Polyprint is a company that designs, develops, and assembles professional DTG and DTF printing systems, along with the consumables and support services required for daily production. An e-commerce store built with Shopify, featuring many custom made sections and functionalities. You can view the website live in the link below.",
      },
      rnDental: {
        title: "RN Dental Project",
        description:
          "RN Dental is a local dental clinic in Athens, spanning over 35 years of operation. With a dedicated team of professionals, they offer a wide range of dental services to meet the needs of their patients. A live website built using WordPress and Elementor, featuring a unique design and layout. You can view the website live in the link below.",
      },
      aesthet: {
        title: "Aesthet",
        description:
          "Aesthet is the world's premier online shopping destination for unique fashion items by Greece's most coveted contemporary designer brands. An e-commerce store built with Shopify, featuring many custom made sections and functionalities. This is a project still under development. You can view a live demo of the website, as it is currently, in the link below.",
      },
      wpFromsoft: {
        title: "WordPress Website",
        description:
          "A locally hosted website built using WordPress, featuring content of FromSoftware but fully customized with a unique design and layout.",
      },
      wpEshop: {
        title: "WordPress E-commerce",
        description:
          "A custom e-commerce website, locally hosted and built with WordPress and WooCommerce. Inspired by the concept of Displate, it features a unique design and layout tailored from scratch and a fully functional e-commerce store.",
      },
      contactBook: {
        title: "Contact Book Web App",
        description:
          "A modern, animated, and responsive web-based contact book application. Effortlessly add, search, view, edit, and delete contacts with a beautiful, interactive UI and real-time AJAX updates. No page reloads required.",
      },
      fourRooms: {
        title: "Mystery of the Four Rooms (Puzzle Game - Web App)",
        description:
          "A web-based puzzle game where you solve riddles, collect magical items, and escape the mysterious rooms! This game is built with vanilla HTML, CSS, and JavaScript, and features interactive gameplay, sound effects, and a modern, responsive design.",
      },
    },
  },
  card: {
    liveDemo: "Live demo",
    website: "Website",
    github: "GitHub",
    imagePlaceholder: "Add an image in src/data/projects.js",
  },
  beyond: {
    title: "Beyond what's on this page",
    intro:
      "The featured work above is a curated slice of what I can show. I've shipped other things that don't appear there for ordinary reasons—access, ownership, or simply because they're a different kind of project.",
    moreShopifyTitle: "More Shopify commerce work",
    moreShopifyBody:
      "Two additional stores I've worked on aren't listed above—they're still privately owned by companies, so they can't be shared as public portfolio pieces.",
    gameDevTitle: "Game dev experiments",
    gameDevBody:
      "Small side projects in Godot and Unreal Engine. They're minor and outside the focus of this site, but I'm glad to mention them in conversation if it ever matters.",
  },
  contact: {
    title: "Let's work together",
    subtitle:
      "Send a note about your project, timeline, and budget. I usually reply within a few days.",
    messageBlurbTitle: "Message",
    messageBlurbBody: "All fields are required unless noted.",
    name: "Name",
    email: "Email",
    enquiryType: "Type of enquiry",
    message: "Message",
    send: "Send message",
    sending: "Sending",
    responseTitle: "Response time",
    responseBody:
      "Typically within 2–4 business days. Urgent timelines? Mention it in your message.",
    directContact: "DIRECT CONTACT",
    tipsTitle: "Include in your message",
    tip1:
      "What you're building or fixing (store, site, feature)",
    tip2: "Rough timeline or go-live date",
    tip3:
      "Budget range or type of engagement (project, retainer, etc.)",
    tip4:
      "Platform or stack if you know it (e.g. Shopify, WordPress, etc.)",
    tip5:
      "Whether design and copy are ready, or it needs to be created from scratch",
    enquiryOptions: {
      freelance: "Freelance or fixed-scope project",
      contract_role: "Contract or ongoing engagement",
      fulltime: "Full-time role (recruiter / hiring manager)",
      shopify: "Shopify / e-commerce store",
      wordpress: "WordPress site, theme, or plugin",
      react_frontend: "React / frontend application",
      consultation: "Consultation, audit, or code review",
      other: "Something else",
    },
    validation: {
      required: "Required",
      email: "Invalid email address",
      enquiryType: "Please pick a valid enquiry type",
      commentMin: "Must be at least 25 characters",
    },
    submitSuccess: "Thanks {{name}}, your message was sent.",
    errorSendFailed: "Could not send your message. Please try again.",
    errorGeneric: "Something went wrong, please try again later.",
    errorNotConfigured:
      "Contact form is not configured. Add REACT_APP_WEB3FORMS_ACCESS_KEY to .env.local (local) and to Vercel Environment Variables (production). Get a key at https://web3forms.com",
  },
  alert: {
    successTitle: "Message sent",
    errorTitle: "Something went wrong",
    close: "Close",
  },
  footer: {
    line: "Odysseas Roumpeas · © {{year}}",
  },
  scrollTop: {
    label: "Scroll to top",
  },
  social: {
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
};

const el = {
  meta: {
    title: "Οδυσσέας Ρουμπέας · Προγραμματιστής frontend",
    description:
      "Οδυσσέας Ρουμπέας — portfolio προγραμματιστή frontend. Shopify, WordPress και σύγχρονα web projects.",
  },
  header: {
    projects: "Έργα",
    contact: "Επικοινωνία",
    menu: "Μενού",
    openMenu: "Άνοιγμα μενού",
    switchLanguage: "Γλώσσα",
    langEnglish: "EN",
    langGreek: "ΕΛ",
  },
  landing: {
    greeting: "Γεια σας, είμαι ο Οδυσσέας",
    bio1: "Front-end developer",
    bio2: "Φτιάχνω γρήγορα, προσεγμένα web interfaces",
    scroll: "Scroll",
    focusShopify: "Shopify",
    focusWordPress: "WordPress",
    focusReact: "React",
    focusPerformance: "Απόδοση",
  },
  thisSite: {
    kicker: "Meta",
    title: "Αυτό το portfolio site",
    intro:
      "Κι αυτή η σελίδα είναι ένα project: μια μικρή εφαρμογή React που συντηρώ ο ίδιος — με την ίδια προσοχή σε δομή, απόδοση και προσβασιμότητα που δίνω και σε projects πελατών. Είναι το σημείο αναφοράς για τον τρόπο με τον οποίο μου αρέσει να δουλεύω σε frontend.",
    boxTitle: "Τι περιέχει",
    visionTitle: "Όραμα",
    vision:
      "Ήθελα το site να δίνει την αίσθηση της δουλειάς που παρουσιάζει: καθαρή δομή, ειλικρινές κείμενο και καμία περιττή τριβή ανάμεσα σε εσάς και μια κουβέντα — σε οποιαδήποτε οθόνη.",
    feature1:
      "React (Create React App) με Chakra UI και προσαρμοσμένο theme",
    feature2:
      "Responsive διάταξη, ευέλικτο project grid και mobile-first πλοήγηση",
    feature3:
      "Φόρμα επικοινωνίας συνδεδεμένη με πραγματικό inbox (όχι ψεύτικο demo submit)",
    feature4:
      "Φιλοξενία ως static site στο Vercel, για γρήγορο loading παντού στον κόσμο",
  },
  projects: {
    featuredTitle: "Επιλεγμένα έργα",
    featuredIntro:
      "Επιλεγμένη δουλειά για πελάτες και demos — Shopify καταστήματα, WordPress και projects σε εξέλιξη που μπορείτε να δείτε απευθείας στον browser.",
    archivedTitle: "Παλαιότερα και εκπαιδευτικά projects",
    archivedIntro:
      "Παλαιότερες και μαθητικού τύπου δουλειές, που τις κρατώ εδώ για λόγους αναφοράς. Τίποτα από αυτά δεν είναι online ως δημόσιος ιστότοπος — θα χρειαστεί να κάνετε clone το repo και να το τρέξετε τοπικά (ή να δείτε τον κώδικα στο GitHub). Η ποιότητα και η φροντίδα στη λεπτομέρεια ποικίλλουν και δεν αντικατοπτρίζουν τον τρόπο με τον οποίο δουλεύω σήμερα για πελάτες.",
    items: {
      lulula: {
        title: "Lulula",
        description:
          "Η LuLuLa είναι μια ελληνική οικογενειακή επιχείρηση στον χώρο της ομορφιάς και της προσωπικής φροντίδας, με στόχο προσεκτικά επιλεγμένα, υψηλής ποιότητας προϊόντα περιποίησης δέρματος και μαλλιών. Ηλεκτρονικό κατάστημα σε Shopify, με πολλά custom sections και λειτουργίες. Μπορείτε να δείτε το site ζωντανά στον παρακάτω σύνδεσμο.",
      },
      polyprint: {
        title: "Polyprint",
        description:
          "Η Polyprint σχεδιάζει, αναπτύσσει και συναρμολογεί επαγγελματικά συστήματα εκτύπωσης DTG και DTF, μαζί με τα αναλώσιμα και τις υπηρεσίες υποστήριξης που απαιτούνται για την καθημερινή παραγωγή. Ηλεκτρονικό κατάστημα σε Shopify, με πολλά custom sections και λειτουργίες. Μπορείτε να δείτε το site ζωντανά στον παρακάτω σύνδεσμο.",
      },
      rnDental: {
        title: "RN Dental",
        description:
          "Το RN Dental είναι μια τοπική οδοντιατρική κλινική στην Αθήνα, με πάνω από 35 χρόνια λειτουργίας. Μια αφοσιωμένη ομάδα επαγγελματιών καλύπτει ένα ευρύ φάσμα οδοντιατρικών υπηρεσιών. Ζωντανό site φτιαγμένο σε WordPress και Elementor, με δικό του σχεδιασμό και διάταξη. Μπορείτε να το δείτε live στον παρακάτω σύνδεσμο.",
      },
      aesthet: {
        title: "Aesthet",
        description:
          "Το Aesthet είναι ο κορυφαίος online προορισμός για μοναδικά fashion items από τους πιο περιζήτητους σύγχρονους Έλληνες σχεδιαστές. Ηλεκτρονικό κατάστημα σε Shopify, με πολλά custom sections και λειτουργίες. Το project είναι ακόμη υπό ανάπτυξη· μπορείτε να δείτε ένα live demo του site, όπως είναι αυτή τη στιγμή, στον παρακάτω σύνδεσμο.",
      },
      wpFromsoft: {
        title: "WordPress Website",
        description:
          "Τοπικά φιλοξενούμενο site φτιαγμένο σε WordPress, με περιεχόμενο αφιερωμένο στη FromSoftware αλλά πλήρως custom σε σχεδιασμό και διάταξη.",
      },
      wpEshop: {
        title: "WordPress E-commerce",
        description:
          "Custom e-commerce site, τοπικά φιλοξενούμενο, σε WordPress και WooCommerce. Εμπνευσμένο από την ιδέα του Displate, με μοναδικό σχεδιασμό από την αρχή και πλήρως λειτουργικό eshop.",
      },
      contactBook: {
        title: "Web εφαρμογή Βιβλίο Επαφών",
        description:
          "Μια σύγχρονη, responsive web εφαρμογή επαφών με κινούμενα γραφικά. Προσθέστε, αναζητήστε, δείτε, επεξεργαστείτε και διαγράψτε επαφές μέσα από ένα προσεγμένο, διαδραστικό UI, με ενημερώσεις AJAX σε πραγματικό χρόνο — χωρίς reloads.",
      },
      fourRooms: {
        title: "Mystery of the Four Rooms (web παιχνίδι γρίφων)",
        description:
          "Ένα web-based παιχνίδι γρίφων: λύνετε αινίγματα, συλλέγετε αντικείμενα και προσπαθείτε να ξεφύγετε από τα μυστηριώδη δωμάτια. Χτισμένο με vanilla HTML, CSS και JavaScript, με διαδραστικό gameplay, ηχητικά εφέ και σύγχρονο responsive σχεδιασμό.",
      },
    },
  },
  card: {
    liveDemo: "Live demo",
    website: "Ιστότοπος",
    github: "GitHub",
    imagePlaceholder: "Προσθέστε εικόνα στο src/data/projects.js",
  },
  beyond: {
    title: "Πέρα από όσα βλέπετε εδώ",
    intro:
      "Τα επιλεγμένα έργα παραπάνω είναι ένα επιμελημένο δείγμα από όσα μπορώ να δείξω δημόσια. Έχω δουλέψει και σε άλλα projects που δεν εμφανίζονται εδώ για τους γνωστούς λόγους — πρόσβαση, ιδιοκτησία, ή απλώς επειδή είναι διαφορετικού τύπου δουλειά.",
    moreShopifyTitle: "Και άλλη δουλειά σε Shopify",
    moreShopifyBody:
      "Δύο επιπλέον καταστήματα στα οποία έχω δουλέψει δεν αναφέρονται παραπάνω — ανήκουν σε εταιρείες και δεν μπορούν να μοιραστούν δημόσια ως κομμάτια portfolio.",
    gameDevTitle: "Πειράματα σε game development",
    gameDevBody:
      "Μικρά side projects σε Godot και Unreal Engine. Είναι περιφερειακά και εκτός του βασικού θέματος αυτού του site, αλλά χαίρομαι να αναφερθώ σε αυτά σε μια κουβέντα αν ποτέ χρειαστεί.",
  },
  contact: {
    title: "Ας συνεργαστούμε",
    subtitle:
      "Στείλτε μου μια κουβέντα για το project, το χρονοδιάγραμμα και τον προϋπολογισμό σας. Συνήθως απαντώ μέσα σε λίγες μέρες.",
    messageBlurbTitle: "Μήνυμα",
    messageBlurbBody: "Όλα τα πεδία είναι υποχρεωτικά, εκτός αν σημειώνεται διαφορετικά.",
    name: "Όνομα",
    email: "Email",
    enquiryType: "Τύπος αιτήματος",
    message: "Μήνυμα",
    send: "Αποστολή",
    sending: "Αποστολή…",
    responseTitle: "Χρόνος απάντησης",
    responseBody:
      "Συνήθως εντός 2–4 εργάσιμων ημερών. Αν το χρονοδιάγραμμα είναι επείγον, αναφέρετέ το στο μήνυμά σας.",
    directContact: "ΑΜΕΣΗ ΕΠΙΚΟΙΝΩΝΙΑ",
    tipsTitle: "Καλό είναι να αναφέρετε",
    tip1:
      "Τι φτιάχνετε ή διορθώνετε (κατάστημα, site, feature)",
    tip2: "Μια πρόχειρη εκτίμηση χρονοδιαγράμματος ή ημερομηνία go-live",
    tip3:
      "Ενδεικτικό budget ή τύπο συνεργασίας (project, retainer κ.λπ.)",
    tip4:
      "Πλατφόρμα ή stack, αν το γνωρίζετε (π.χ. Shopify, WordPress)",
    tip5:
      "Αν το design και τα κείμενα είναι έτοιμα ή χρειάζεται να φτιαχτούν από την αρχή",
    enquiryOptions: {
      freelance: "Freelance ή project ορισμένου scope",
      contract_role: "Σύμβαση ή συνεχής συνεργασία",
      fulltime: "Πλήρης απασχόληση (recruiter / hiring manager)",
      shopify: "Shopify / e-commerce κατάστημα",
      wordpress: "WordPress site, theme ή plugin",
      react_frontend: "React / frontend εφαρμογή",
      consultation: "Συμβουλευτική, audit ή code review",
      other: "Κάτι άλλο",
    },
    validation: {
      required: "Υποχρεωτικό",
      email: "Μη έγκυρη διεύθυνση email",
      enquiryType: "Επιλέξτε έγκυρο τύπο αιτήματος",
      commentMin: "Τουλάχιστον 25 χαρακτήρες",
    },
    submitSuccess: "Ευχαριστώ {{name}} — το μήνυμά σας στάλθηκε.",
    errorSendFailed: "Το μήνυμα δεν στάλθηκε. Παρακαλώ δοκιμάστε ξανά.",
    errorGeneric: "Κάτι πήγε στραβά. Δοκιμάστε ξανά σε λίγο.",
    errorNotConfigured:
      "Η φόρμα επικοινωνίας δεν είναι ρυθμισμένη. Προσθέστε REACT_APP_WEB3FORMS_ACCESS_KEY στο .env.local (τοπικά) και στα Environment Variables του Vercel (production). Λάβετε κλειδί στο https://web3forms.com",
  },
  alert: {
    successTitle: "Το μήνυμα στάλθηκε",
    errorTitle: "Κάτι πήγε στραβά",
    close: "Κλείσιμο",
  },
  footer: {
    line: "Οδυσσέας Ρουμπέας · © {{year}}",
  },
  scrollTop: {
    label: "Επιστροφή στην κορυφή",
  },
  social: {
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
};

export const translations = { en, el };

export const LOCALES = /** @type {const} */ (["en", "el"]);
