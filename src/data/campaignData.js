// Datos Oficiales extraídos de los documentos de campaña:
// 1. "LUIS ORTIZ 14 OCTUBRE.pdf" (Propuesta de Plan de Gobierno Municipal PDC OCT2026-FEB2027)
// 2. "broshure informativo diputado willian mendez pdf.pdf" (Candidatura a Diputado por La Unión, Elecciones 2027)

export const campaignData = {
  party: "Partido Demócrata Cristiano (PDC)",
  coalition: "Coalición PDC y Fuerza Solidaria",
  department: "La Unión, El Salvador",
  electionYear: "Elecciones 2027",
  campaignPeriod: "Octubre 2026 - Febrero 2027",
  slogan: "Quién no conoce su historia está condenado a repetirla.",
  contactPhone: "7506-5736",
  pdfDocs: {
    planMunicipal: "/docs/plan_municipal_luis_ortiz.pdf",
    brochureDiputado: "/docs/brochure_willian_mendez.pdf"
  },
  logos: {
    pdc: "/assets/pdc_logo.jpg",
    fs: "/assets/fs_logo.jpg"
  },
  coreMessage: "Como partido demócrata cristiano estamos comprometidos con el desarrollo integral de las personas, consideramos que las oportunidades deben ser para todos, tomando como base la educación por la cual es como podremos sacar adelante a nuestras familias.",
  communityCall: "Para cualquier coordinación estoy a la orden, recuerde querido amigo/a que en usted se encuentra la clave para sacar a delante a su comunidad, elige con sabiduría."
};

export const deputyCandidate = {
  name: "Lic. Willian Méndez",
  role: "Candidato a Diputado Propietario",
  department: "Departamento de La Unión",
  ballot: "CASILLA 1",
  origin: "Distrito de Conchagua, La Unión",
  photo: "/assets/willian_mendez.jpg",
  academicProfile: [
    { title: "Licenciatura en Trabajo Social", desc: "Formación especializada en desarrollo comunitario y gestión pública." },
    { title: "Maestría en Métodos y Técnicas de Investigación Social", desc: "Análisis técnico y estadístico para diagnósticos territoriales precisos." },
    { title: "Diplomados en Creación, Gestión y Evaluación de Proyectos", desc: "Capacitación enfocada en proyectos de impacto social sostenible." }
  ],
  message: "Queridos amigos y amigas, soy un joven originario del distrito de Conchagua La Unión, me he preparado académicamente, tengo una licenciatura en Trabajo Social, maestría en Métodos y Técnicas de Investigación Social y diplomados en Creación, gestión y evaluación de proyectos para el Desarrollo Social. Quiero solicitarles el apoyo para gestionar más el desarrollo de nuestro departamento, quiero trabajar de una forma transparente y de la mano con las comunidades. Confío en Dios y en su inmensa voluntad así como en la sabiduría de todos los habitantes del departamento de La Unión para alcanzar el objetivo.",
  deputySubstitute: {
    name: "Licda. Carmen Torres Jiménez",
    role: "Diputada Suplente",
    photo: "/assets/carmen_torres.jpg",
    desc: "Acompañando la fórmula en coalición PDC y Fuerza Solidaria para garantizar representación con paridad, liderazgo y trabajo cercano a la gente."
  },
  commitment: "Como diputado, impulsaremos proyectos y acompañaremos iniciativas a nivel de país que fortalezcan el desarrollo económico y local. La democracia cristiana en coalición con el partido Fuerza Solidaria pretenden unir esfuerzos a nivel del departamento de La Unión y a nivel nacional en donde se puedan coordinar iniciativas que vayan de acuerdo a resolver las necesidades que presenten el pueblo Salvadoreño. Vamos apoyar las Iniciativas a través de la articulación de esfuerzos con la Municipalidad de La Unión Sur y Norte, trabajando de la mano de las comunidades y monitoreando en tiempo real el avance de cada proyecto que se esté ejecutando, con el único objetivo de garantizarle a la población Unionense la calidad y el derecho en cuanto a la prestación de servicios que se merecen."
};

// 12 Propuestas e Iniciativas a impulsar como Diputado de La Unión (Broshure Willian Méndez)
export const deputyProposals = [
  {
    id: 1,
    tag: "Combustible Pesquero",
    title: "Subsidio al Combustible Pesquero",
    officialTitle: "Apoyo Directo al Sector Pesquero Artesanal",
    category: "Economía y Pesca",
    shortDesc: "Rebaja directa de $0.20 por galón de combustible para abaratar los costos en cada faena del pescador artesanal.",
    desc: "Impulsaremos iniciativas que vayan con el enfoque de apoyo a los pescadores, gestionando la reducción de $0.20 ctvs. por galón de combustible comprado para ejercer labores de pesca artesanal.",
    image: "/assets/slide_pescadores.png",
    impact: "Ahorro directo inmediato en faenas diarias de pesca"
  },
  {
    id: 2,
    tag: "Licencia Única",
    title: "Una Sola Licencia (Moto y Carro)",
    officialTitle: "Homologación de Licencias de Moto y Carro",
    category: "Alivio Económico",
    shortDesc: "Unificación de licencias en un solo carnet para no pagar doble trámite ni doble renovación si manejas moto y vehículo.",
    desc: "Se propondrá la homologación de las licencias de conducir de moto y carro para aquellos conductores que tengan ambos vehículos, garantizando un alivio económico directo a las familias.",
    image: "/assets/prop_transporte.jpg",
    impact: "Un solo trámite y reducción de costos dobles"
  },
  {
    id: 3,
    tag: "Psicología Escolar",
    title: "Apoyo Psicológico en Escuelas",
    officialTitle: "Atención Multidisciplinaria Estudiantil",
    category: "Educación",
    shortDesc: "Psicólogos y trabajadores sociales permanentes en centros escolares para orientar y proteger a nuestros estudiantes.",
    desc: "Propondremos una pieza de correspondencia a la comisión de educación para crear un equipo multidisciplinario que atienda diferentes problemáticas estudiantiles.",
    image: "/assets/slide_estudiantes.jpg",
    impact: "Psicología, trabajo social y tutoría en centros escolares"
  },
  {
    id: 4,
    tag: "Guarderías Gratis",
    title: "Guarderías Infantiles Gratuitas",
    officialTitle: "Guarderías Urbanas para Padres Trabajadores",
    category: "Desarrollo Social",
    shortDesc: "Espacios seguros con personal capacitado para cuidar a tus hijos mientras sales a trabajar con tranquilidad.",
    desc: "Se realizarán gestiones para la creación de guarderías en las áreas urbanas con personal especializado en el cuidado de los niños mientras los padres trabajan.",
    image: "/assets/prop_guarderias.jpg",
    impact: "Cuidado seguro y digno mientras mamá y papá laboran"
  },
  {
    id: 5,
    tag: "Nuevos Cementerios",
    title: "Nuevos Cementerios Municipales",
    officialTitle: "Creación de Nuevos Cementerios Municipales",
    category: "Obras Públicas y VMT",
    shortDesc: "Fondos nacionales asignados para construir nuevos camposantos y resolver la saturación en los municipios de La Unión.",
    desc: "Se realizarán las gestiones precisas para inscribir en el presupuesto general de la nación la creación de nuevos cementerios municipales en el departamento de La Unión.",
    image: "/assets/prop_cementerio.jpg",
    impact: "Solución al hacinamiento y tranquilidad para las familias"
  },
  {
    id: 6,
    tag: "Bomberos y Semáforos",
    title: "Estación de Bomberos y Semáforos",
    officialTitle: "Estación de Bomberos y Semáforos Viales",
    category: "Seguridad y Prevención",
    shortDesc: "Cuerpo de bomberos en Santa Rosa de Lima y red de semáforos modernos en La Unión para evitar accidentes y salvar vidas.",
    desc: "Se gestionará la creación de una estación de bomberos en el distrito de Santa Rosa de Lima, así como la instalación de un sistema de semáforos para la cabecera de La Unión.",
    image: "/assets/prop_bomberos.jpg",
    impact: "Respuesta inmediata a emergencias y orden vial"
  },
  {
    id: 7,
    tag: "Terminal y Pasarelas",
    title: "Terminal de Buses y 2 Pasarelas",
    officialTitle: "Nueva Terminal de Buses y Pasarelas Peatonales",
    category: "Obras Públicas y VMT",
    shortDesc: "Terminal de buses digna y 2 pasarelas peatonales: frente al Hospital de La Unión y en la entrada a Colonia Belén.",
    desc: "Se realizará una pieza de correspondencia para el Ministerio de Obras Públicas y el VMT para la creación de una nueva terminal de buses de La Unión, así como dos pasarelas peatonales: una frente al hospital de La Unión y la otra sobre la entrada a la colonia Belén salida a San Miguel.",
    image: "/assets/prop_transporte.jpg",
    impact: "Seguridad peatonal hospitalaria y transporte ordenado"
  },
  {
    id: 8,
    tag: "Capital a Artistas",
    title: "Capital Semilla para Artistas",
    officialTitle: "Capital Semilla y Proyectos para Artistas Nacionales",
    category: "Arte y Cultura",
    shortDesc: "Apoyo económico directo y fondos semilla para que artesanos, músicos y pintores locales puedan vivir de su talento.",
    desc: "Se realizará una solicitud para la comisión de arte y cultura en donde se puedan fortalecer a todos los artistas nacionales bajo una línea de proyectos y capital semilla.",
    image: "/assets/slide_artesanias.png",
    impact: "Impulso económico directo a músicos, pintores y artesanos"
  },
  {
    id: 9,
    tag: "Bachillerato en Artes",
    title: "Bachillerato en Artes en Distritos",
    officialTitle: "Bachillerato en Artes en Distritos de La Unión",
    category: "Educación",
    shortDesc: "Apertura del bachillerato artístico en Conchagua, Yayantique, El Carmen y La Unión para que los jóvenes no migren.",
    desc: "Se impulsará una pieza de correspondencia para que se instale el bachillerato en artes en diferentes distritos: Yayantique, El Carmen, La Unión y Conchagua.",
    image: "/assets/slide_estudiantes.jpg",
    impact: "Oportunidades vocacionales descentralizadas"
  },
  {
    id: 10,
    tag: "Médicos Especialistas",
    title: "Médicos Especialistas en Hospitales",
    officialTitle: "Aumento de Presupuesto en Salud y Especialistas",
    category: "Salud Pública",
    shortDesc: "Más médicos especialistas en hospitales públicos de La Unión para atender diabetes, hipertensión y enfermedades crónicas.",
    desc: "Se realizarán gestiones para aumentar el presupuesto de salud de cada hospital público, fortaleciendo el apoyo para la contratación de profesionales para el seguimiento de enfermedades crónicas.",
    image: "/assets/prop_salud.jpg",
    impact: "Médicos especialistas permanentes y medicación oportuna"
  },
  {
    id: 11,
    tag: "Presupuesto Escolar",
    title: "Presupuesto Digno para Escuelas",
    officialTitle: "Fortalecimiento Presupuestario a Centros Escolares",
    category: "Educación",
    shortDesc: "Aumento del presupuesto anual para que cada escuela pública cuente con pupitres, techos dignos y materiales escolares.",
    desc: "Se realizará la gestión desde la comisión de Educación para fortalecer mayormente con los presupuestos anuales a cada Centro Escolar del país.",
    image: "/assets/education_tech.jpg",
    impact: "Aulas equipadas, mantenimiento y materiales a tiempo"
  },
  {
    id: 12,
    tag: "Primer Empleo Joven",
    title: "Primer Empleo Sin Experiencia Previa",
    officialTitle: "Primer Empleo Juvenil Sin Requisito de Experiencia",
    category: "Empleo Joven",
    shortDesc: "Eliminación de la exigencia de experiencia laboral previa para abrir de verdad las puertas del trabajo a los jóvenes.",
    desc: "Se realizará la gestión para que se quite como requerimiento la experiencia previa para quienes por primera vez solicitan empleo.",
    image: "/assets/prop_empleo.jpg",
    impact: "Apertura real del mercado laboral para recién graduados"
  }
];

// Impacto Territorial Específico por Distritos de La Unión
// Mapeado a partir de los compromisos textuales de ambos documentos
export const districtImpacts = [
  {
    id: "conchagua",
    name: "Conchagua",
    badge: "Distrito Natal del Candidato",
    projects: [
      "Instalación de Bachillerato en Artes para jóvenes conchagüenses.",
      "Gestión de subsidio y reducción de $0.20 por galón de combustible para pescadores artesanales.",
      "Mini muelles, varaderos costeros y lancha ambulancia comunitaria.",
      "Articulación de proyectos de desarrollo con la municipalidad local."
    ]
  },
  {
    id: "santa-rosa",
    name: "Santa Rosa de Lima",
    badge: "Polo Comercial y Agropecuario",
    projects: [
      "Gestión de una moderna Estación de Bomberos para atención inmediata de incendios y emergencias.",
      "Construcción y ordenamiento del Tiangue y Rastro Municipal.",
      "Programa permanente de vacunación de ganado y asistencia técnica agropecuaria.",
      "Bodegas municipales de herramientas de labranza y medicamentos veterinarios al costo."
    ]
  },
  {
    id: "la-union-cabecera",
    name: "La Unión (Cabecera y Zona Costera)",
    badge: "Centro Urbano y Portuario",
    projects: [
      "Pieza de correspondencia para la construcción de la Nueva Terminal de Buses de La Unión.",
      "Dos nuevas pasarelas peatonales: frente al Hospital de La Unión y en la entrada a Col. Belén (salida a San Miguel).",
      "Instalación del sistema de semáforos viales para ordenar el tráfico urbano.",
      "Ruta especial de tren de aseo para restaurantes y hoteles de la zona costera y centro.",
      "Centro Municipal de Acopio Pesquero."
    ]
  },
  {
    id: "yayantique-el-carmen",
    name: "Yayantique y El Carmen",
    badge: "Vocación Agrícola y Educativa",
    projects: [
      "Instalación oficial del Bachillerato en Artes en los institutos de Yayantique y El Carmen.",
      "Dotación de bicicletas para estudiantes que viven a largas distancias del Centro Escolar.",
      "Programa de huertos caseros familiares (papaya, limón, granjas avícolas y porcinas).",
      "Mejoramiento vial anual mediante convenio con el MOP."
    ]
  }
];

// Plan de Gobierno Municipal - Luis Ortiz (PDC OCT2026-FEB2027)
// Eje Central: ECONOMIA FAMILIAR (Diagrama Circular Oficial)
export const municipalPlan = {
  author: "Luis Ortiz",
  party: "Partido Demócrata Cristiano (PDC)",
  campaign: "Propuesta de Diseño de Campaña OCT2026 - FEB2027",
  title: "Plan de Trabajo Municipal",
  coreAxis: "ECONOMÍA FAMILIAR",
  axes: [
    {
      id: "salud",
      number: "1",
      name: "Salud y Prevención",
      tagline: "Medicamentos al costo y atención médica preventiva",
      image: "/assets/prop_salud.jpg",
      programs: [
        "Venta al costo de Medicamentos de uso común (Farmacia Municipal).",
        "Gestión para la habilitación de FOSALUD en algunos Distritos.",
        "Fomento de Campañas Audiovisuales, Odontológicas y Otras.",
        "Charlas permanentes sobre salud mental a instituciones educativas y empresas privadas mediante convenio de cooperación."
      ]
    },
    {
      id: "agricultura",
      number: "2",
      name: "Agricultura y Ganadería",
      tagline: "Apoyo técnico, maquinaria y banco de labranza",
      image: "/assets/prop_agricultura.jpg",
      programs: [
        "Gestión para la construcción de Tiangue y Rastro Municipal.",
        "Programa de Vacunación de Ganado.",
        "Creación de Huertos Caseros y Diversificación de Producción (Papaya, Limón, granjas porcina y avícola).",
        "Asistencia Técnica en Siembra para agricultores y Ganaderos.",
        "Habilitación de Bodegas de Herramientas de Labranza para Prevención de Riesgos.",
        "Creación de Reservorio Familiar de Agua para Agricultores y Ganaderos.",
        "Servicio de Maquinaria Agrícola: picadoras, desgranadora y Tractor Agrícola."
      ]
    },
    {
      id: "turismo",
      number: "3",
      name: "Turismo y Pesca",
      tagline: "Desarrollo costero, lancha ambulancia y guías locales",
      image: "/assets/slide_pescadores.png",
      programs: [
        "Mini muelle y Varadero en puntos estratégicos de la zona costera.",
        "Mini muelle en área de restaurantes familiares en lagunas del municipio.",
        "Adquisición de Lancha Ambulancia para emergencias marítimas e insulares.",
        "Gestión para la Creación de un Centro Municipal de Acopio Pesquero.",
        "Plan de Fomento del Turismo Local con contratación de 20 guías turísticos.",
        "Dotación de insumos para atención a turistas y unidad de auxilio en carretera."
      ]
    },
    {
      id: "valores",
      number: "4",
      name: "Valores Morales y Convivencia",
      tagline: "Prevención, deporte multidisciplinario y tradición",
      image: "/assets/civic_townhall.jpg",
      programs: [
        "Programa de Prevención y Recuperación para personas en condiciones de vulnerabilidad.",
        "Adecuación de Mini Centros de Convivencia Social en las comunidades.",
        "Fomento de Valores en instituciones públicas y privadas del municipio.",
        "Asignación Presupuestaria a Fútbol, Baloncesto, Volleyball, Ping Pong, Karate y Remo.",
        "Creación de Bandas para Fiestas Patronales en todo el municipio."
      ]
    },
    {
      id: "administracion",
      number: "5",
      name: "Administración Municipal (CEMAS)",
      tagline: "Centro Solidario y reducción de costos del agua",
      image: "/assets/green_energy_city.jpg",
      programs: [
        "Creación del Centro Municipal de Atención Solidario (CEMAS) para pago de energía, cobro de remesas y servicios municipales integrados.",
        "Realización de costos de servicio de agua por comunidad y disminución del cobro a las familias.",
        "Programa de Monitoreo y Verificación del agua potable suministrada por la municipalidad."
      ]
    },
    {
      id: "educacion",
      number: "6",
      name: "Educación y Cultura",
      tagline: "Becas superiores, bicicletas y festivales culturales",
      image: "/assets/slide_estudiantes.jpg",
      programs: [
        "Becas para estudiantes de educación Media y Superior del municipio.",
        "Dotación de Bicicletas a alumnos con largas distancias hacia su Centro Escolar.",
        "Creación del Festival del Farolito y festivales gastronómicos locales.",
        "Celebración del Santo al Pescador y dotación de estímulos anuales.",
        "Presupuesto para festividades comunitarias, patronales y culturales."
      ]
    },
    {
      id: "medio-ambiente",
      number: "7",
      name: "Medio Ambiente",
      tagline: "Planta de transferencia, compostaje y viveros",
      image: "/assets/green_energy_city.jpg",
      programs: [
        "Creación de una mini planta de transferencia de desechos sólidos.",
        "Eliminación definitiva de botaderos a cielo abierto.",
        "Ampliación del servicio de recolección de desechos sólidos en comunidades.",
        "Creación de Viveros por cada Distrito Municipal."
      ]
    },
    {
      id: "infraestructura",
      number: "8",
      name: "Infraestructura",
      tagline: "Mejoramiento vial MOP y presupuestos por caserío",
      image: "/assets/prop_transporte.jpg",
      programs: [
        "Programa Anual de Mejoramiento Vial continuo mediante Convenio con el MOP.",
        "Asignación de monto económico por caserío para proyectos en cogestión comunitaria.",
        "Metodología de Participación Ciudadana para priorizar las obras más urgentes."
      ]
    },
    {
      id: "mujer",
      number: "9",
      name: "Mujer y Emprendimiento",
      tagline: "Mini Banco Municipal y talleres vocacionales",
      image: "/assets/prop_empleo.jpg",
      programs: [
        "Creación del Mini Banco Municipal para financiar emprendimientos y comercio femenino.",
        "Partida presupuestaria para el desarrollo económico del sector mujer en el municipio.",
        "Talleres Vocacionales comunitarios con enfoque de negocio productivo.",
        "Cuadrillas de empleo municipal para mantenimiento y barrido de calles."
      ]
    }
  ]
};
