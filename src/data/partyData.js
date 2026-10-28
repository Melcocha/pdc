export const partyInfo = {
  name: "Partido Demócrata y Ciudadano",
  acronym: "PDC",
  slogan: "Un Nuevo Amanecer para Nuestro País",
  subSlogan: "La fuerza ciudadana para transformar las instituciones, reactivar la economía y erradicar la corrupción con justicia social.",
  electionYear: "2026",
  breakingNews: "Dra. Elena Valenzuela presenta el Plan de Gobierno 2026 ante más de 15,000 ciudadanos en el Cabildo Central",
  phone: "(+57) 01 8000 2026",
  email: "contacto@pdcciudadano.org",
  officeHours: "Lun - Vie: 8:00 AM - 6:00 PM",
  headquarters: "Av. de la Constitución 1040, Distrito Central",
  socials: {
    facebook: "https://facebook.com/PDC.Oficial",
    twitter: "https://x.com/PDC_Oficial",
    instagram: "https://instagram.com/pdc_nacional",
    youtube: "https://youtube.com/@pdc_oficial"
  }
};

// Hero Slides (OpenCity + Wix Kaelen Vance style)
export const heroSlides = [
  {
    id: 1,
    tag: "ELECCIONES GENERALES 2026",
    title: "Un Nuevo Amanecer para Nuestro País",
    highlight: "A New Dawn for Our Nation",
    lead: "Recuperemos el poder ciudadano con instituciones transparentes, salarios dignos y oportunidades para cada generación.",
    image: "/assets/hero_rally.jpg",
    primaryCta: "Conoce a Elena Valenzuela",
    primaryAction: "candidate",
    secondaryCta: "Únete a la Campaña",
    secondaryAction: "affiliation"
  },
  {
    id: 2,
    tag: "EL PLAN PARA EL PROGRESO",
    title: "Educación de Vanguardia y Empleo Joven",
    highlight: "Education & Real Opportunity",
    lead: "Conectividad total, escuelas bilingües y exención de impuestos a empresas que contraten a jóvenes en su primer empleo.",
    image: "/assets/education_tech.jpg",
    primaryCta: "Explorar Propuestas",
    primaryAction: "blueprint",
    secondaryCta: "Descargar Manifiesto",
    secondaryAction: "manifesto"
  },
  {
    id: 3,
    tag: "SOSTENIBILIDAD & FUTURO",
    title: "Energía Limpia, Agua Potable y Ciudades Verdes",
    highlight: "Environmental Stewardship",
    lead: "Transición ecológica con justicia social, techos solares comunitarios y protección irrestricta de páramos y cuencas hídricas.",
    image: "/assets/green_energy_city.jpg",
    primaryCta: "Ver Ejes Ambientales",
    primaryAction: "blueprint",
    secondaryCta: "Hacer una Donación",
    secondaryAction: "donate"
  }
];

// OpenCity 4 Overlapping Feature Cards
export const heroFeatureCards = [
  {
    id: "agenda",
    icon: "Calendar",
    title: "Cabildos y Asambleas",
    desc: "Encuentros ciudadanos y debates abiertos cada fin de semana en tu barrio.",
    linkText: "Ver Agenda 2026",
    action: "events"
  },
  {
    id: "manifesto",
    icon: "FileCheck",
    title: "Manifiesto Ciudadano",
    desc: "Los 10 mandatos éticos y programa de gobierno para el período 2026-2030.",
    linkText: "Leer Manifiesto",
    action: "manifesto"
  },
  {
    id: "complaints",
    icon: "MessageSquare",
    title: "Buzón y Denuncias",
    desc: "Canal seguro para propuestas vecinales y alertas de corrupción 24/7.",
    linkText: "Enviar Mensaje",
    action: "contact"
  },
  {
    id: "transparency",
    icon: "ShieldCheck",
    title: "Portal Cuentas Claras",
    desc: "Auditoría en tiempo real de cada peso recaudado e invertido en campaña.",
    linkText: "Ver Estados Financieros",
    action: "transparency"
  }
];

// Candidate Profile (Wix Kaelen Vance + OpenCity Mayor Duty)
export const candidateProfile = {
  name: "Dra. Elena Valenzuela",
  role: "Candidata Presidencial PDC 2026",
  quote: "Mi deber principal es asegurar que el Estado vuelva a servir a las familias trabajadoras, combatiendo la corrupción con firmeza y construyendo un país donde nadie se quede atrás.",
  bio: "Economista de la Universidad Nacional con maestría en Políticas Públicas en la Universidad de Oxford. Con más de 18 años de trayectoria en veedurías ciudadanas, lideró la mayor reforma de transparencia en compras públicas y la descentralización de recursos hacia municipios vulnerables.",
  keyPriorities: [
    "Cero tolerancia a la impunidad y muerte civil para corruptos",
    "Generación de 500,000 empleos formales para jóvenes y mujeres",
    "Salud preventiva y abastecimiento garantizado de medicamentos en 24h",
    "Transición energética verde con tarifas eléctricas justas para la clase media"
  ],
  milestones: [
    { year: "2016", title: "Premio Nacional de Integridad Cívica", desc: "Por destapar redes de sobrecostos en licitaciones públicas y recuperar $320M del erario." },
    { year: "2020", title: "Fundación del Movimiento Ciudadano", desc: "Coordinó la redacción participativa del Manifiesto junto a más de 40,000 delegados comunales." },
    { year: "2024", title: "Victoria en Primarias Abiertas", desc: "Elegida candidata presidencial con el voto de 128,450 ciudadanos en comicios auditados internacionalmente." }
  ],
  image: "/assets/leader_portrait.jpg"
};

// A Blueprint for Progress (Wix Kaelen Vance 3 Key Issues + OpenCity)
export const blueprintPillars = [
  {
    id: "economic-opportunity",
    title: "Oportunidad Económica & Empleo",
    englishTitle: "Economic Opportunity",
    image: "/assets/civic_townhall.jpg",
    summary: "Reactivación real para micro, pequeñas y medianas empresas mediante reducción de trabas burocráticas, créditos a tasa preferencial y exención tributaria a emprendedores jóvenes.",
    points: [
      "Ley de Primer Empleo con cero aportes patronales por 24 meses",
      "Fondo Nacional de Capital Semilla de $2,000 millones para PYMES innovadoras",
      "Protección a la producción agrícola nacional frente a importaciones desleales",
      "Reforma tributaria progresiva: los que más tienen pagan lo justo"
    ],
    initialVotes: 2840,
    badge: "Eje Prioritario 01"
  },
  {
    id: "education-reform",
    title: "Reforma Educativa & Futuro Digital",
    englishTitle: "Education Reform",
    image: "/assets/education_tech.jpg",
    summary: "Modernización integral del sistema escolar público hacia una enseñanza bilingüe, con habilidades de programación, ciencia de datos y becas completas de educación superior.",
    points: [
      "100% de escuelas públicas conectadas con internet satelital de alta velocidad",
      "Alimentación escolar de calidad garantizada los 365 días del año",
      "Inglés y pensamiento computacional desde primer grado de primaria",
      "Bolsa de 100,000 becas universitarias anuales para estratos 1, 2 y 3"
    ],
    initialVotes: 3215,
    badge: "Eje Prioritario 02"
  },
  {
    id: "environmental-stewardship",
    title: "Sostenibilidad & Defensa Ambiental",
    englishTitle: "Environmental Stewardship",
    image: "/assets/green_energy_city.jpg",
    summary: "Pacto ecológico intergeneracional para acelerar la transición energética justa, defender el agua como derecho humano inalienable y regenerar nuestros ecosistemas estratégicos.",
    points: [
      "Instalación de 500,000 techos solares comunitarios para abaratar la energía",
      "Prohibición estricta de fracking y minería en páramos y fuentes hídricas",
      "Plan Nacional de Reforestación Comunitaria generando 50,000 empleos verdes",
      "Tratamiento moderno y descontaminación de las 14 principales cuencas del país"
    ],
    initialVotes: 2470,
    badge: "Eje Prioritario 03"
  }
];

// OpenCity Department / Citizen Services
export const citizenServices = [
  {
    id: "serv-1",
    icon: "UserCheck",
    title: "Afiliación y Credencial Digital",
    desc: "Regístrate en 2 minutos y obtén tu carnet oficial con código QR verificado.",
    actionType: "affiliation"
  },
  {
    id: "serv-2",
    icon: "FileSignature",
    title: "Iniciativa Popular de Ley",
    desc: "Presenta tu propuesta comunitaria para que nuestros congresistas la radiquen.",
    actionType: "proposal"
  },
  {
    id: "serv-3",
    icon: "Scale",
    title: "Asesoría Legal Comunitaria",
    desc: "Consultas jurídicas gratuitas en derechos laborales, familia y veeduría pública.",
    actionType: "contact"
  },
  {
    id: "serv-4",
    icon: "Users",
    title: "Voluntariado y Brigadas",
    desc: "Únete a brigadas de reforestación, comedores comunitarios y pedagogía electoral.",
    actionType: "affiliation"
  },
  {
    id: "serv-5",
    icon: "Eye",
    title: "Observatorio de Cuentas Claras",
    desc: "Monitoreo en vivo de donaciones y gastos de campaña con auditoría abierta.",
    actionType: "transparency"
  },
  {
    id: "serv-6",
    icon: "Sparkles",
    title: "Comité de Juventudes PDC",
    desc: "Espacio de formación política y liderazgo para jóvenes entre 14 y 28 años.",
    actionType: "affiliation"
  }
];

// Voices of Support / Testimonials (Wix Voices of Support + OpenCity Testimonials)
export const voicesOfSupport = [
  {
    id: "voice-1",
    quote: "“Elena Valenzuela comprende de verdad las dificultades que enfrentamos las pequeñas empresarias. Su plan de financiamiento accesible y reducción de cargas tributarias nos devuelve la esperanza.”",
    author: "María Fernanda Gómez",
    role: "Emprendedora Textil y Madre Cabeza de Familia",
    city: "Medellín, Antioquia",
    rating: 5
  },
  {
    id: "voice-2",
    quote: "“Por primera vez veo un partido político que pone la ciencia, la educación digital y las energías limpias en el centro del debate nacional. Apoyo al PDC con total convicción.”",
    author: "Ing. Mateo Restrepo",
    role: "Investigador en Energías Renovables",
    city: "Bucaramanga, Santander",
    rating: 5
  },
  {
    id: "voice-3",
    quote: "“Como maestra rural durante más de 20 años, ver el compromiso del PDC con internet escolar y becas universitarias para el campo es el cambio que nuestras veredas necesitan con urgencia.”",
    author: "Prof. Lucía Carvajal",
    role: "Docente Rural y Líder Comunitaria",
    city: "Popayán, Cauca",
    rating: 5
  }
];

// Upcoming Events & Town Halls (OpenCity)
export const upcomingEvents = [
  {
    id: "ev-1",
    day: "12",
    month: "NOV",
    year: "2026",
    time: "10:00 AM - 1:00 PM",
    title: "Gran Cabildo Abierto por la Juventud y el Empleo",
    location: "Plaza de la Libertad & Transmisión Nacional",
    desc: "Mesa de diálogo directo con jóvenes, estudiantes universitarios y gremios de emprendedores para consensuar la Ley de Primer Empleo."
  },
  {
    id: "ev-2",
    day: "18",
    month: "NOV",
    year: "2026",
    time: "4:00 PM - 7:00 PM",
    title: "Foro Nacional de Transparencia y Anticorrupción",
    location: "Centro de Convenciones Metropolitano",
    desc: "Presentación del sistema 'Open Ledger' y debate público con veedurías ciudadanas y observadores de transparencia internacional."
  },
  {
    id: "ev-3",
    day: "26",
    month: "NOV",
    year: "2026",
    time: "9:00 AM - 12:00 PM",
    title: "Jornada Nacional de Voluntariado Ambiental",
    location: "Parque Metropolitano y 32 Sedes Departamentales",
    desc: "Sembratón de 20,000 árboles nativos y recolección de firmas para el blindaje constitucional de páramos y cuencas hídricas."
  }
];

// From the Campaign Trail / News & Blog (Exact Wix Kaelen Vance titles + OpenCity News)
export const campaignArticles = [
  {
    id: "art-1",
    title: "Supporting Our Community: Key Issues for Voters (Apoyando a Nuestra Comunidad: Temas Clave)",
    category: "Comunidad & Economía",
    date: "26 Octubre 2026",
    readTime: "5 min de lectura",
    image: "/assets/civic_townhall.jpg",
    summary: "Un análisis detallado sobre cómo la reactivación del comercio local y los presupuestos participativos están transformando las prioridades legislativas del PDC."
  },
  {
    id: "art-2",
    title: "Your Vote Matters: Engaging in Local Politics (Tu Voto Cuenta: Participando en la Política Local)",
    category: "Democracia Cívica",
    date: "23 Octubre 2026",
    readTime: "4 min de lectura",
    image: "/assets/hero_rally.jpg",
    summary: "Por qué la apatía ciudadana solo beneficia a las maquinarias tradicionales y cómo organizarse en comités vecinales para fiscalizar los recursos públicos."
  },
  {
    id: "art-3",
    title: "Join the Movement: Building a Better Future Together (Únete al Movimiento: Construyendo un Futuro)",
    category: "Juventudes & Voluntariado",
    date: "20 Octubre 2026",
    readTime: "3 min de lectura",
    image: "/assets/education_tech.jpg",
    summary: "Más de 148,000 personas ya forman parte de la red de voluntarios del PDC. Conoce las historias de ciudadanos comunes haciendo historia en cada rincón del país."
  }
];

// OpenCity Suggestion / Complaints FAQ
export const complaintFaqs = [
  {
    q: "¿Cómo se financia el PDC y cómo puedo verificar las donaciones?",
    a: "El 100% de nuestros recursos provienen de micro-aportes ciudadanos bancarizados y debidamente auditados. En nuestra sección de Transparencia puedes descargar los balances semanales en formato abierto con certificado contable."
  },
  {
    q: "¿Qué requisitos se necesitan para afiliarse al PDC?",
    a: "Solo necesitas ser ciudadano mayor de 14 años (para el Comité de Juventudes) o mayor de 18 años, compartir los 10 Mandatos del Manifiesto y no tener condenas por delitos contra la administración pública o derechos humanos. La afiliación es 100% gratuita."
  },
  {
    q: "¿Cómo puedo presentar una propuesta comunitaria para el programa de gobierno?",
    a: "Puedes utilizar el Buzón Ciudadano de esta página o asistir a los Cabildos Abiertos de los sábados en tu comité barrial. Todas las propuestas radicadas son evaluadas por nuestra Mesa Técnica."
  },
  {
    q: "¿Cómo puedo ser voluntario o testigo electoral en los comicios de 2026?",
    a: "Al afiliarte, marca la casilla 'Veeduría Electoral' o 'Voluntariado territorial'. Nuestro equipo de coordinación departamental te capacitará y asignará tu acreditación oficial."
  }
];

// Manifesto 10 Mandates
export const manifesto10 = [
  { num: "01", title: "Soberanía en la Voluntad Popular", desc: "El poder emana exclusivamente de los ciudadanos. Todo cargo de elección popular está sujeto a rendición de cuentas y revocatoria del mandato." },
  { num: "02", title: "Honestidad Radical y Auditoría Continua", desc: "Digitalización total y en tiempo real de cada peso del gasto público. Cero secretismos y muerte civil definitiva para funcionarios corruptos." },
  { num: "03", title: "Economía Justa y Prosperidad Compartida", desc: "Defensa del emprendimiento, estímulo tributario a las PYMES, combate frontal a los monopolios y salarios dignos con productividad." },
  { num: "04", title: "Educación Pública Científica y de Vanguardia", desc: "Conectividad total, enseñanza bilingüe y STEM desde la primaria, y gratuidad universitaria de calidad para quienes más lo necesitan." },
  { num: "05", title: "Salud Universal, Oportuna y Preventiva", desc: "La salud es un derecho fundamental irrenunciable. Ninguna familia debe caer en la ruina por una emergencia médica ni esperar meses por medicamentos." },
  { num: "06", title: "Seguridad Ciudadana con Inteligencia y Proximidad", desc: "Policía comunitaria profesionalizada, tecnología predictiva y combate severo contra el crimen organizado y la extorsión." },
  { num: "07", title: "Equidad e Inclusión Social Efectiva", desc: "Igualdad real de oportunidades para mujeres, madres cabeza de familia, campesinos, juventudes y poblaciones históricamente excluidas." },
  { num: "08", title: "Defensa Ecológica y Compromiso Intergeneracional", desc: "Transición energética justa, protección rigurosa de páramos, ríos y biodiversidad, y promoción de ciudades verdes." },
  { num: "09", title: "Descentralización y Autonomía de las Regiones", desc: "Los recursos deben invertirse donde nacen las necesidades: presupuestos participativos en cada municipio y provincia." },
  { num: "10", title: "Transformación Digital al Servicio de la Gente", desc: "Gobierno digital eficiente, trámites en línea sin filas, expediente único ciudadano y soberanía tecnológica nacional." }
];
