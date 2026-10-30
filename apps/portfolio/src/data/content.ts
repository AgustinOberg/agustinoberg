// Every fact on the site lives here, in English (primary) and Spanish.
// Sources, checked on 2026-10-29:
// - Google Play listings (downloads, ratings, reviews, category).
// - App Store listing for TraiNow (id6756187372).
// - The Musu repo (README, app.json, landing): not published yet, in store review.
// - LinkedIn: linkedin.com/in/oberg-agustin (roles, dates, stacks, clients, SQUIRE user count).
// - Agustín, in chat: Givers (US) and Galeno have large user bases; email, X handle and photo.
// - Musu screens: the app's own store screenshots inputs (comidita repo, apps/screenshots/public/screenshots/apple/iphone).
// - Galeno: Google Play listing com.galeno.android (500K+ downloads).
// - Givers: givers.com and Fast Company (2023): "about 10,000 family caregivers using the platform".
// Anything not confirmed is a visible [TODO]. Never invent numbers.

export type Lang = "en" | "es";
type L = Record<Lang, string>;

export const links = {
  email: "agustin.oberg@gmail.com",
  linkedin: "https://www.linkedin.com/in/oberg-agustin/",
  x: "https://x.com/agus_tsx",
  playDeveloper: "https://play.google.com/store/apps/developer?id=Agust%C3%ADn+Oberg",
  design: "https://agustinoberg-design.pages.dev/", // later https://design.agustinoberg.com
};

/* ---------- products I worked on, for companies and clients ---------- */

export interface Client {
  name: string;
  line: L;
  role: L;
  when: L;
  place: L;
  stat: { value: string; label: L };
}

export const clients: Client[] = [
  {
    name: "SQUIRE",
    line: {
      en: "Mobile apps for the services industry. Frontend architecture, a migration from scratch, performance and testing.",
      es: "Apps mobile para la industria de servicios. Arquitectura frontend, una migración desde cero, performance y testing.",
    },
    role: { en: "Senior React Native engineer", es: "Senior React Native engineer" },
    when: { en: "2026 – now", es: "2026 – hoy" },
    place: { en: "Team of ~20", es: "Equipo de ~20" },
    stat: { value: "30K+", label: { en: "active users", es: "usuarios activos" } },
  },
  {
    name: "Givers",
    line: {
      en: "Enrolls, supports and pays family caregivers through US state programs. I was the developer behind it: I built the product end to end, Google Cloud setup included.",
      es: "Inscribe, acompaña y les paga a cuidadores familiares a través de programas estatales de Estados Unidos. Fui el desarrollador detrás: construí el producto de punta a punta, incluida la configuración de Google Cloud.",
    },
    role: { en: "Full-stack developer", es: "Desarrollador full stack" },
    when: { en: "~2 years", es: "~2 años" },
    place: { en: "United States", es: "Estados Unidos" },
    stat: { value: "~10K", label: { en: "family caregivers (2023)", es: "cuidadores familiares (2023)" } },
  },
  {
    name: "Galeno",
    line: {
      en: "Health insurance in Argentina. Web and mobile with React, Next.js, React Native and Node, and the Azure setup behind them.",
      es: "Medicina prepaga en Argentina. Web y mobile con React, Next.js, React Native y Node, y la configuración de Azure detrás.",
    },
    role: { en: "Full-stack developer · Epidata", es: "Desarrollador full stack · Epidata" },
    when: { en: "2020 – 2022", es: "2020 – 2022" },
    place: { en: "Argentina", es: "Argentina" },
    stat: { value: "500K+", label: { en: "downloads on Google Play", es: "descargas en Google Play" } },
  },
];

/* ---------- my own apps ---------- */

export type Atmosphere = "forest" | "ember" | "tide" | "rouge" | "iris" | "flame" | null;

export interface Project {
  id: string;
  name: string; // as the app writes it in its store listing
  atmosphere: Atmosphere;
  icon?: string;
  category: L;
  line: L;
  // The hero number of the project: what people came to see.
  stat?: { value: string; label: L };
  facts: L[];
  platforms: string[];
  stack?: L;
  store?: { label: string; href: string }[];
  status?: L; // shown with a live dot instead of a stat
  // 2–3 real screens telling a flow, shown in the uniform series. Never mockups of invented UI.
  // [TODO: raw screenshots for Mi Huerta, TraiNow and LockBox, so every project shows its screens]
  screens?: { src: Record<Lang, string>; alt: L }[];
}

const play = (id: string) => `https://play.google.com/store/apps/details?id=${id}`;
const playIcon = (key: string) => `https://play-lh.googleusercontent.com/${key}=s512-rw`;

export const projects: Project[] = [
  {
    id: "mihuerta",
    name: "Mi Huerta",
    atmosphere: "forest",
    icon: playIcon("HpSAhMJ03uA-BQx9kFQi-D4tfPTJ_F972eCtMVQpURwFbG1RYXpbIqiJ5WdfY6lVb5ia8g-jfN1LKISD6vHs"),
    category: { en: "Lifestyle", es: "Estilo de vida" },
    line: {
      en: "A garden companion: a growing plant library and a smart garden that pairs plants that grow well together.",
      es: "Un compañero para tu huerta: una base de plantas que no para de crecer y una huerta inteligente que asocia las plantas que se llevan bien.",
    },
    stat: { value: "10K+", label: { en: "downloads", es: "descargas" } },
    facts: [{ en: "4.8★ · 72 reviews", es: "4.8★ · 72 reseñas" }],
    platforms: ["Android"],
    store: [{ label: "Google Play", href: play("com.miHuerta.agustin.aguilera") }],
  },
  {
    id: "trainow",
    name: "TraiNow",
    atmosphere: "ember",
    icon: playIcon("HHKzdBMl6N0iJtA_y3RG6gnCw314izY0xUDMkJV0JZRtDzlcJ38UgCkOi3A2YeFNCIeHwy6Hpnix4RY2uJYlRw"),
    category: { en: "Health & fitness", es: "Salud y fitness" },
    line: {
      en: "Training as a system, not a guess. Plan routines, log every set and see real progress.",
      es: "El entrenamiento como un sistema, no una improvisación. Planificá rutinas, registrá cada serie y mirá tu progreso real.",
    },
    stat: { value: "5.0★", label: { en: "on both stores", es: "en las dos tiendas" } },
    facts: [
      { en: "10 reviews on Google Play · 5 on the App Store", es: "10 reseñas en Google Play · 5 en el App Store" },
      { en: "Released 2026", es: "Lanzada en 2026" },
    ],
    platforms: ["iOS", "Android"],
    store: [
      { label: "App Store", href: "https://apps.apple.com/app/id6756187372" },
      { label: "Google Play", href: play("com.trainow.mobile") },
    ],
  },
  {
    id: "musu",
    name: "Musu",
    atmosphere: "rouge",
    icon: "/apps/musu.png",
    category: { en: "Food & AI", es: "Comida y AI" },
    line: {
      en: "Snap a label, know if it's for you. An AI food scanner that reads ingredient lists, nutrition labels and barcodes, and checks them against your diet and allergies.",
      es: "Sacale una foto a la etiqueta y sabé si es para vos. Un escáner de comida con AI que lee ingredientes, tablas nutricionales y códigos de barras, y los compara con tu dieta y tus alergias.",
    },
    facts: [],
    platforms: ["iOS", "Android"],
    stack: { en: "Expo · API on EAS Hosting · Next.js · Vercel", es: "Expo · API en EAS Hosting · Next.js · Vercel" },
    status: { en: "In review", es: "En revisión" },
    screens: [
      { src: { en: "/apps/musu/en-01.jpg", es: "/apps/musu/es-01.jpg" }, alt: { en: "Musu result in red: not for you, it contains milk and gluten", es: "Resultado de Musu en rojo: contiene cacahuetes" } },
      { src: { en: "/apps/musu/en-02.jpg", es: "/apps/musu/es-02.jpg" }, alt: { en: "Musu result in yellow: check first, borderline carbs for keto", es: "Resultado de Musu en amarillo: revisar antes, puede contener gluten" } },
      { src: { en: "/apps/musu/en-03.jpg", es: "/apps/musu/es-03.jpg" }, alt: { en: "Musu result in green: good to go, it fits your filter", es: "Resultado de Musu en verde: encaja con tu filtro" } },
    ],
  },
  {
    id: "lockbox",
    name: "LockBox",
    atmosphere: "tide",
    icon: playIcon("yFnedREOZAjjFidCdyIJfJMIqAbxzpVWiqBIq9_H4sw67a0fYrw_PcWj6w_LUCfM1ToMfwBDx92dp8nHGTMS"),
    category: { en: "Tools", es: "Herramientas" },
    line: {
      en: "Your passwords in one place, encrypted. Built from scratch: code, design, metrics, store policies and launch.",
      es: "Tus contraseñas en un solo lugar, cifradas. Hecha desde cero: código, diseño, métricas, políticas y lanzamiento.",
    },
    stat: { value: "5K+", label: { en: "downloads", es: "descargas" } },
    facts: [{ en: "4.9★ · 39 reviews", es: "4.9★ · 39 reseñas" }],
    platforms: ["Android"],
    store: [{ label: "Google Play", href: play("com.agustinoberg.lockbox") }],
  },
  {
    id: "tavi",
    name: "Tavi",
    atmosphere: null,
    category: { en: "Travel", es: "Viajes" },
    line: {
      en: "A travel app. Still early and mostly undefined, but it's what I'm building right now.",
      es: "Una app de viajes. Todavía hay poco definido, pero es lo que está en el horno ahora.",
    },
    facts: [],
    platforms: [],
    status: { en: "Coming soon", es: "Próximamente" },
  },
];

/* ---------- experience (LinkedIn) ---------- */

export const experience: { org: string; role: L; when: L; note: L }[] = [
  {
    org: "SQUIRE",
    role: { en: "Senior React Native engineer", es: "Senior React Native engineer" },
    when: { en: "Jan 2026 – now", es: "ene 2026 – hoy" },
    note: {
      en: "Mobile apps used by 30,000+ active users. Frontend architecture, a migration from scratch, performance, unit and integration testing, and AI tooling for a team of about 20.",
      es: "Apps mobile que usan más de 30.000 usuarios activos. Arquitectura frontend, una migración desde cero, performance, testing unitario y de integración, y herramientas de AI para un equipo de unas 20 personas.",
    },
  },
  {
    org: "Codea IT",
    role: { en: "Full-stack developer", es: "Desarrollador full stack" },
    when: { en: "Jan 2022 – Jan 2026", es: "ene 2022 – ene 2026" },
    note: {
      en: "Web and mobile projects from concept to launch for 8 clients in the US and Argentina: React, Next.js, React Native, Node, PostgreSQL, MongoDB and DynamoDB, on AWS with Docker and serverless. I picked the stack and led the teams.",
      es: "Proyectos web y mobile de la idea al lanzamiento para 8 clientes de Estados Unidos y Argentina: React, Next.js, React Native, Node, PostgreSQL, MongoDB y DynamoDB, en AWS con Docker y serverless. Elegía el stack y lideraba los equipos.",
    },
  },
  {
    org: "Epidata",
    role: { en: "Full-stack developer", es: "Desarrollador full stack" },
    when: { en: "Oct 2020 – Jan 2022", es: "oct 2020 – ene 2022" },
    note: {
      en: "Web and mobile for Galeno and Atrium Innovations: React with Redux, Next.js, React Native and Node, with MariaDB and MongoDB, on Azure with Docker and Kubernetes.",
      es: "Web y mobile para Galeno y Atrium Innovations: React con Redux, Next.js, React Native y Node, con MariaDB y MongoDB, en Azure con Docker y Kubernetes.",
    },
  },
  {
    org: "Freelance",
    role: { en: "Full-stack web and mobile developer", es: "Desarrollador full stack web y mobile" },
    when: { en: "Apr 2020 – now", es: "abr 2020 – hoy" },
    note: {
      en: "Web apps, mobile apps and their backends: React, React Native, Next.js, Node, TypeScript, MongoDB and PostgreSQL.",
      es: "Apps web, apps mobile y sus backends: React, React Native, Next.js, Node, TypeScript, MongoDB y PostgreSQL.",
    },
  },
];

/* ---------- interface copy ---------- */

export const copy = {
  en: {
    title: "Agustín Oberg · Full-stack engineer",
    description: "Full-stack engineer in Buenos Aires. Mobile, web, backend and infra for products like SQUIRE (30K+ active users), plus my own apps with 15K+ downloads.",
    name: "Agustín Oberg",
    skip: "Skip to content",
    nav: { work: "Work", apps: "Apps", about: "About", contact: "Contact", cta: "Get in touch" },
    theme: { group: "Theme", auto: "System theme", light: "Light theme", dark: "Dark theme" },
    hero: {
      h1: "I build products people actually use.",
      h2: "Mobile, web, backend and infra, for teams and for my own apps.",
      primary: "See my work",
      secondary: "Get in touch",
      note: "designed, built and shipped by me",
      appsLabel: "My apps",
      meta: [
        ["Now", "Senior React Native engineer · SQUIRE"],
        ["Based in", "Buenos Aires, Argentina"],
        ["Building since", "2020"],
      ],
    },
    numbers: {
      label: "In numbers",
      items: [
        ["30K+", "active users on the SQUIRE apps I work on"],
        ["15K+", "downloads on my own apps, on Google Play"],
        ["4.8★", "or higher on every app I published, from 121 reviews"],
        ["6 yrs", "building web, mobile and backend products"],
      ],
    },
    clients: {
      label: "Work",
      h1: "Products with real users behind them.",
      h2: "For companies and clients in the US and Argentina.",
    },
    work: {
      label: "My apps",
      h1: "Apps I designed, built and shipped myself.",
      h2: "The app, the backend and the launch, end to end.",
      on: "on",
      all: "All my apps on Google Play",
    },
    manifesto: {
      label: "How I work",
      lines: [
        "People don't read interfaces. They feel them.",
        "The detail is the product: 200 ms, a 6 px blur, a button that shrinks when you tap it.",
        "Motion explains where things come from and where they go.",
        "Light and dark from day one.",
        "When a screen feels empty, I add something real, never more chrome.",
      ],
      more: "Explore my design language",
      designH1: "Want to know more about how I design?",
      designH2: "My design language is public: the decisions, the motion and the tokens behind everything I build.",
    },
    about: {
      label: "About",
      h1: "I'm Agustín.",
      h2: "I build products end to end.",
      photo: "Agustín Oberg",
      body: [
        "I'm a full-stack engineer in Buenos Aires, today a senior React Native engineer at SQUIRE. Since 2020 I've built web apps, mobile apps, APIs and the infra under them, for companies like Galeno and Givers and clients in the US and Argentina.",
        "On the side, I make my own apps from the idea to the store: the design, the app, the backend and the launch. More than 15,000 people have downloaded them.",
        "I care about the small stuff. That's where a product starts to feel right.",
      ],
      servicesLabel: "What I do",
      services: [
        ["Mobile apps", "React Native, Expo, TypeScript"],
        ["Web apps and sites", "React, Next.js, TypeScript"],
        ["Backend and APIs", "Node, PostgreSQL, MongoDB, MariaDB, DynamoDB"],
        ["Cloud and infra", "AWS, Google Cloud, Azure, Docker, Kubernetes, serverless"],
        ["Product design and motion", "Flows, systems, micro-interactions"],
        ["Leading projects", "Stack choices, code review, Scrum and Kanban"],
      ],
      expLabel: "Experience",
    },
    contact: {
      label: "Contact",
      h1: "Have a product in mind?",
      h2: "Tell me what you're building.",
      primary: "Email me",
      secondary: "Message me on LinkedIn",
    },
    footer: {
      sitemap: "Sitemap",
      social: "Social",
      more: "More",
      design: "Design language",
      legal: "© 2026 Agustín Oberg. App names and icons belong to their apps.",
    },
    langLabel: "Language",
  },
  es: {
    title: "Agustín Oberg · Full-stack engineer",
    description: "Full-stack engineer en Buenos Aires. Mobile, web, backend e infra para productos como SQUIRE (30K+ usuarios activos), y mis propias apps con más de 15K descargas.",
    name: "Agustín Oberg",
    skip: "Ir al contenido",
    nav: { work: "Trabajo", apps: "Apps", about: "Sobre mí", contact: "Contacto", cta: "Escribime" },
    theme: { group: "Tema", auto: "Tema del sistema", light: "Tema claro", dark: "Tema oscuro" },
    hero: {
      h1: "Hago productos que la gente usa de verdad.",
      h2: "Mobile, web, backend e infra, para equipos y para mis propias apps.",
      primary: "Ver mi trabajo",
      secondary: "Escribime",
      note: "diseñadas, hechas y lanzadas por mí",
      appsLabel: "Mis apps",
      meta: [
        ["Hoy", "Senior React Native engineer · SQUIRE"],
        ["Desde", "Buenos Aires, Argentina"],
        ["Construyendo desde", "2020"],
      ],
    },
    numbers: {
      label: "En números",
      items: [
        ["30K+", "usuarios activos en las apps de SQUIRE en las que trabajo"],
        ["15K+", "descargas en mis propias apps, en Google Play"],
        ["4.8★", "o más en cada app que publiqué, sobre 121 reseñas"],
        ["6 años", "construyendo productos web, mobile y backend"],
      ],
    },
    clients: {
      label: "Trabajo",
      h1: "Productos con usuarios reales detrás.",
      h2: "Para empresas y clientes de Estados Unidos y Argentina.",
    },
    work: {
      label: "Mis apps",
      h1: "Apps que diseñé, desarrollé y lancé yo.",
      h2: "La app, el backend y el lanzamiento, de punta a punta.",
      on: "en",
      all: "Todas mis apps en Google Play",
    },
    manifesto: {
      label: "Cómo trabajo",
      lines: [
        "La gente no lee las interfaces. Las siente.",
        "El detalle es el producto: 200 ms, un blur de 6 px, un botón que se achica cuando lo tocás.",
        "El movimiento explica de dónde viene algo y a dónde va.",
        "Claro y oscuro desde el día uno.",
        "Si una pantalla se siente vacía, le sumo algo real, nunca más adornos.",
      ],
      more: "Ver mi lenguaje de diseño",
      designH1: "¿Querés conocer más sobre mi manera de diseñar?",
      designH2: "Mi lenguaje de diseño es público: las decisiones, el motion y los tokens detrás de todo lo que hago.",
    },
    about: {
      label: "Sobre mí",
      h1: "Soy Agustín.",
      h2: "Hago productos de punta a punta.",
      photo: "Agustín Oberg",
      body: [
        "Soy full-stack engineer en Buenos Aires, hoy senior React Native engineer en SQUIRE. Desde 2020 construyo apps web, apps mobile, APIs y la infra que las sostiene, para empresas como Galeno y Givers y clientes de Estados Unidos y Argentina.",
        "Por mi cuenta hago mis propias apps de la idea a la tienda: el diseño, la app, el backend y el lanzamiento. Más de 15.000 personas las descargaron.",
        "Me importan los detalles chicos. Ahí es donde un producto empieza a sentirse bien.",
      ],
      servicesLabel: "Qué hago",
      services: [
        ["Apps mobile", "React Native, Expo, TypeScript"],
        ["Apps y sitios web", "React, Next.js, TypeScript"],
        ["Backend y APIs", "Node, PostgreSQL, MongoDB, MariaDB, DynamoDB"],
        ["Cloud e infra", "AWS, Google Cloud, Azure, Docker, Kubernetes, serverless"],
        ["Diseño de producto y motion", "Flujos, sistemas, micro-interacciones"],
        ["Liderar proyectos", "Elección de stack, code review, Scrum y Kanban"],
      ],
      expLabel: "Experiencia",
    },
    contact: {
      label: "Contacto",
      h1: "¿Tenés un producto en mente?",
      h2: "Contame qué estás armando.",
      primary: "Mandame un email",
      secondary: "Escribime por LinkedIn",
    },
    footer: {
      sitemap: "Mapa",
      social: "Redes",
      more: "Más",
      design: "Lenguaje de diseño",
      legal: "© 2026 Agustín Oberg. Los nombres e íconos de las apps pertenecen a cada app.",
    },
    langLabel: "Idioma",
  },
} as const;
