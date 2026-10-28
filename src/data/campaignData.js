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
    title: "Apoyo Directo al Sector Pesquero Artesanal",
    shortTitle: "Subsidio al Combustible Pesquero",
    category: "Economía y Pesca",
    tag: "Pesca & Ahorro",
    highlight: "-$0.20 / Galón de Ahorro",
    shortDesc: "Rebaja directa de $0.20 por galón de combustible para abaratar los costos en cada faena del pescador artesanal.",
    desc: "Impulsaremos iniciativas que vayan con el enfoque de apoyo a los pescadores, gestionando la reducción de $0.20 ctvs. por galón de combustible comprado para ejercer labores de pesca artesanal.",
    icon: "Fish",
    impact: "Ahorro directo inmediato en faenas diarias de pesca"
  },
  {
    id: 2,
    title: "Homologación de Licencias de Moto y Carro",
    shortTitle: "Una Sola Licencia (Moto y Carro)",
    category: "Alivio Económico",
    tag: "Bolsillo Familiar",
    highlight: "1 Solo Trámite y Pago",
    shortDesc: "Unificación de licencias en un solo carnet para no pagar doble trámite ni doble renovación si manejas moto y vehículo.",
    desc: "Se propondrá la homologación de las licencias de conducir de moto y carro para aquellos conductores que tengan ambos vehículos, garantizando un alivio económico directo a las familias.",
    icon: "CreditCard",
    impact: "Un solo trámite y reducción de costos dobles"
  },
  {
    id: 3,
    title: "Atención Multidisciplinaria Estudiantil",
    shortTitle: "Apoyo Psicológico en Escuelas",
    category: "Educación",
    tag: "Juventud Escolar",
    highlight: "Salud Mental en Aulas",
    shortDesc: "Psicólogos y trabajadores sociales permanentes en centros escolares para orientar y proteger a nuestros estudiantes.",
    desc: "Propondremos una pieza de correspondencia a la comisión de educación para crear un equipo multidisciplinario que atienda diferentes problemáticas estudiantiles.",
    icon: "GraduationCap",
    impact: "Psicología, trabajo social y tutoría en centros escolares"
  },
  {
    id: 4,
    title: "Guarderías Urbanas para Padres Trabajadores",
    shortTitle: "Guarderías Infantiles Gratuitas",
    category: "Desarrollo Social",
    tag: "Infancia y Madres",
    highlight: "Cuidado Seguro y Gratuito",
    shortDesc: "Espacios seguros con personal capacitado para cuidar a tus hijos mientras sales a trabajar con tranquilidad.",
    desc: "Se realizarán gestiones para la creación de guarderías en las áreas urbanas con personal especializado en el cuidado de los niños mientras los padres trabajan.",
    icon: "Baby",
    impact: "Cuidado seguro y digno mientras mamá y papá laboran"
  },
  {
    id: 5,
    title: "Creación de Nuevos Cementerios Municipales",
    shortTitle: "Nuevos Cementerios Municipales",
    category: "Obras Públicas y VMT",
    tag: "Servicios Públicos",
    highlight: "Presupuesto Nacional Directo",
    shortDesc: "Fondos nacionales asignados para construir nuevos camposantos y resolver la saturación en los municipios de La Unión.",
    desc: "Se realizarán las gestiones precisas para inscribir en el presupuesto general de la nación la creación de nuevos cementerios municipales en el departamento de La Unión.",
    icon: "MapPin",
    impact: "Solución al hacinamiento y dignidad para las familias"
  },
  {
    id: 6,
    title: "Estación de Bomberos y Semáforos Viales",
    shortTitle: "Estación de Bomberos y Semáforos",
    category: "Seguridad y Prevención",
    tag: "Protección Ciudadana",
    highlight: "Santa Rosa y La Unión",
    shortDesc: "Cuerpo de bomberos en Santa Rosa de Lima y red de semáforos modernos en La Unión para evitar accidentes y salvar vidas.",
    desc: "Se gestionará la creación de una estación de bomberos en el distrito de Santa Rosa de Lima, así como la instalación de un sistema de semáforos para la cabecera de La Unión.",
    icon: "Flame",
    impact: "Respuesta inmediata a emergencias y orden vial"
  },
  {
    id: 7,
    title: "Nueva Terminal de Buses y Pasarelas Peatonales",
    shortTitle: "Terminal de Buses y 2 Pasarelas",
    category: "Obras Públicas y VMT",
    tag: "Conectividad Urbana",
    highlight: "Hospital y Col. Belén",
    shortDesc: "Terminal de buses digna y 2 pasarelas peatonales: frente al Hospital de La Unión y en la entrada a Colonia Belén.",
    desc: "Se realizará una pieza de correspondencia para el Ministerio de Obras Públicas y el VMT para la creación de una nueva terminal de buses de La Unión, así como dos pasarelas peatonales: una frente al hospital de La Unión y la otra sobre la entrada a la colonia Belén salida a San Miguel.",
    icon: "Bus",
    impact: "Seguridad peatonal hospitalaria y transporte ordenado"
  },
  {
    id: 8,
    title: "Capital Semilla y Proyectos para Artistas Nacionales",
    shortTitle: "Capital Semilla para Artistas",
    category: "Arte y Cultura",
    tag: "Cultura y Talento",
    highlight: "Fondos No Reembolsables",
    shortDesc: "Apoyo económico directo y fondos semilla para que artesanos, músicos y pintores locales puedan vivir de su talento.",
    desc: "Se realizará una solicitud para la comisión de arte y cultura en donde se puedan fortalecer a todos los artistas nacionales bajo una línea de proyectos y capital semilla.",
    icon: "Palette",
    impact: "Impulso económico directo a músicos, pintores y artesanos"
  },
  {
    id: 9,
    title: "Bachillerato en Artes en Distritos de La Unión",
    shortTitle: "Bachillerato en Artes en Distritos",
    category: "Educación",
    tag: "Formación Técnica",
    highlight: "En 4 Distritos Clave",
    shortDesc: "Apertura del bachillerato artístico en Conchagua, Yayantique, El Carmen y La Unión para que los jóvenes no migren.",
    desc: "Se impulsará una pieza de correspondencia para que se instale el bachillerato en artes en diferentes distritos: Yayantique, El Carmen, La Unión y Conchagua.",
    icon: "BookOpen",
    impact: "Oportunidades vocacionales descentralizadas"
  },
  {
    id: 10,
    title: "Aumento de Presupuesto en Salud y Especialistas",
    shortTitle: "Médicos Especialistas en Hospitales",
    category: "Salud Pública",
    tag: "Salud Hospitalaria",
    highlight: "Atención a Crónicos y Medicinas",
    shortDesc: "Más médicos especialistas en hospitales públicos de La Unión para atender diabetes, hipertensión y enfermedades crónicas.",
    desc: "Se realizarán gestiones para aumentar el presupuesto de salud de cada hospital público, fortaleciendo el apoyo para la contratación de profesionales para el seguimiento de enfermedades crónicas.",
    icon: "HeartPulse",
    impact: "Médicos especialistas permanentes y medicación oportuna"
  },
  {
    id: 11,
    title: "Fortalecimiento Presupuestario a Centros Escolares",
    shortTitle: "Presupuesto Digno para Escuelas",
    category: "Educación",
    tag: "Escuelas Dignas",
    highlight: "Aulas Equipadas a Tiempo",
    shortDesc: "Aumento del presupuesto anual para que cada escuela pública cuente con pupitres, techos dignos y materiales escolares.",
    desc: "Se realizará la gestión desde la comisión de Educación para fortalecer mayormente con los presupuestos anuales a cada Centro Escolar del país.",
    icon: "School",
    impact: "Aulas equipadas, mantenimiento y materiales a tiempo"
  },
  {
    id: 12,
    title: "Primer Empleo Juvenil Sin Requisito de Experiencia",
    shortTitle: "Primer Empleo Sin Experiencia Previa",
    category: "Empleo Joven",
    tag: "Oportunidad Joven",
    highlight: "Para Jóvenes Graduados",
    shortDesc: "Eliminación de la exigencia de experiencia laboral previa para abrir de verdad las puertas del trabajo a los jóvenes.",
    desc: "Se realizará la gestión para que se quite como requerimiento la experiencia previa para quienes por primera vez solicitan empleo.",
    icon: "Briefcase",
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
      icon: "HeartPulse",
      tagline: "Medicamentos al costo y atención preventiva",
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
      icon: "Wheat",
      tagline: "Apoyo técnico, maquinaria y banco de labranza",
      programs: [
        "Gestión para la construcción de Tiangue y Rastro Municipal.",
        "Programa de Vacunación de Ganado.",
        "Creación de Huertos Caseros y Diversificación de Producción (Mini Plantación familiar de Papaya, Limón, granjas porcina y avícola).",
        "Asistencia Técnica en Siembra para agricultores y Ganaderos.",
        "Habilitación de Bodegas de Herramientas de Labranza para Prevención de Riesgos (Cumas, Botas, Sombreros); venta al costo de medicamentos veterinarios básicos.",
        "Creación de Reservorio Familiar de Agua para Agricultores y Ganaderos.",
        "Servicio de Maquinaria Agrícola: picadoras, desgranadora y Tractor Agrícola."
      ]
    },
    {
      id: "turismo",
      number: "3",
      name: "Turismo y Pesca",
      icon: "Ship",
      tagline: "Desarrollo costero, lancha ambulancia y guías locales",
      programs: [
        "Mini muelle y Varadero en puntos estratégicos de la zona costera.",
        "Mini muelle en área de restaurantes familiares en lagunas del municipio.",
        "Adquisición de Lancha Ambulancia para emergencias marítimas e insulares.",
        "Gestión para la Creación de un Centro Municipal de Acopio Pesquero.",
        "Plan de Fomento del Turismo Local, Contratación de 20 guías turísticos.",
        "Programa de Educación en Turismo y Pesca.",
        "Dotación de Insumos Básicos para Atención a Turistas en Zona Costera (Mesas, sillas, hamacas, otros).",
        "Creación de Unidad Municipal de Atención y auxilio en Carretera.",
        "Creación de una ruta especial de servicio de tren de aseo para atender a restaurantes y hoteles de la zona costera y Centro de La Unión."
      ]
    },
    {
      id: "valores",
      number: "4",
      name: "Valores Morales y Convivencia",
      icon: "Users",
      tagline: "Prevención, deporte multidisciplinario y tradición",
      programs: [
        "Programa de Prevención y Recuperación de Alcohólicos y Drogadictos, personas en condiciones de abandono.",
        "Adecuación de Mini Centros de Convivencia Social.",
        "Programa de Fomento de Valores en Instituciones Públicas y Privadas del municipio, con enfoque eclesiástico.",
        "Asignación de Partida Presupuestaria a Futbol, Baloncesto, Volleyball, Ping Pong, Karate y federación de remo.",
        "Creación de Bandas para Fiestas Patronales en todo el municipio."
      ]
    },
    {
      id: "administracion",
      number: "5",
      name: "Administración Municipal (CEMAS)",
      icon: "Building2",
      tagline: "Centro Solidario y reducción de costos del agua",
      programs: [
        "Creación de Centro Municipal de Atención Solidario (CEMAS), con Servicio de Pago de Energía Eléctrica, Cobro de Remesas entre otros, todos los servicios municipales, integración de mini bodega de herramienta de labranza; venta a costo de medicamento de uso común; productos veterinarios básicos.",
        "Realización de Costos de Servicio de Agua Por Comunidad y Disminución de Cobro por servicio.",
        "Programa de Monitoreo y Verificación del agua potable, suministrada por la municipalidad."
      ]
    },
    {
      id: "educacion",
      number: "6",
      name: "Educación y Cultura",
      icon: "GraduationCap",
      tagline: "Becas superiores, bicicletas y festivales culturales",
      programs: [
        "Asignación Presupuestaria para las fiestas patronales en cada caserío, Consejo Parroquial.",
        "Creación del Festival del Farolito, Festivales Gastronómicos, entre otros.",
        "Celebración del Santo al Pescador y dotación de estímulos.",
        "Becas para estudiantes de educación Media y Superior.",
        "Dotación de Bicicletas a alumnos cuyas distancias al Centro Escolar es muy lejana.",
        "Asignación Presupuestaria para Celebración y Conmemoración de Eventos Eclesiásticos, Cívicos y Culturales.",
        "Creación de cultura vial, certificar gestores de Tráfico con agentes del CAM, convenio con empresa privada para la generación de parqueos y áreas peatonales."
      ]
    },
    {
      id: "medio-ambiente",
      number: "7",
      name: "Medio Ambiente",
      icon: "Trees",
      tagline: "Planta de transferencia, compostaje y viveros",
      programs: [
        "Creación de una mini planta de transferencia de desechos sólidos.",
        "Apoyo en la generación de sistema de compostaje en Instituciones Públicas y Privadas.",
        "Eliminación de Botaderos a cielo abierto.",
        "Ampliación del Servicio de Recolección de Desechos Sólidos.",
        "Creación de Viveros por Distrito Municipal."
      ]
    },
    {
      id: "infraestructura",
      number: "8",
      name: "Infraestructura",
      icon: "Road",
      tagline: "Mejoramiento vial MOP y presupuestos por caserío",
      programs: [
        "Programa Anual de Mejoramiento Vial, mediante Convenio del MOP.",
        "Asignación de monto por caserío para la elaboración de proyecto en cogestión con las comunidades organizadas.",
        "Aplicación de Metodología de Participación Ciudadana para la priorización de los proyectos de infraestructura."
      ]
    },
    {
      id: "mujer",
      number: "9",
      name: "Mujer",
      icon: "HeartHandshake",
      tagline: "Mini Banco Municipal y talleres vocacionales",
      programs: [
        "Creación de Mini Banco Municipal, para el emprendimiento de Actividad Comercial y Servicio.",
        "Mejoramiento de Servicio de Barrido de Calles en todo el municipio, con cuadrillas de mujeres.",
        "Asignación Partida Presupuestaria para el Desarrollo y Generación de Actividad Económica al Sector Mujer de todo el municipio.",
        "Talleres Vocacionales por cada comunidad con un enfoque de emprendimiento.",
        "Gestión de Inversionistas en la diversificación del cultivo, retorno de capital y distribución de ganancias."
      ]
    }
  ]
};
