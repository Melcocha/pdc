// =====================================================================
// MEDIOS, REDES Y PERFIL DEL CANDIDATO A ALCALDE
// Todo lo que el cliente debe reemplazar cuando envíe su material está aquí.
// =====================================================================

// ---- Videos ---------------------------------------------------------
export const videos = {
  // Video de bienvenida que arranca solo al entrar a la página
  luis: {
    src: '/videos/luis_ortiz_bienvenida.mp4',
    poster: '/assets/luis_ortiz_poster.jpg',
  },
  // Plataforma legislativa: dos videos (se activan con clic)
  willian: {
    src: '/videos/willian_mendez_mensaje.mp4',
    poster: '/assets/willian_video_poster.jpg',
    name: 'Lic. Willian Méndez',
    role: 'Candidato a Diputado Propietario',
    party: 'PDC',
  },
  carmen: {
    // TODO: cuando llegue el video de la candidata suplente, poner la ruta aquí
    // (ej. '/videos/carmen_torres_mensaje.mp4') y la foto pasa a ser un video con botón de reproducir.
    src: null,
    poster: '/assets/carmen_torres.jpg',
    name: 'Licda. Carmen Torres Jiménez',
    role: 'Candidata a Diputada Suplente',
    party: 'Fuerza Solidaria',
  },
};

// ---- Redes sociales -------------------------------------------------
// Instagram, TikTok y Facebook ya usan los links reales de la campaña.
// Para agregar otra red (ej. YouTube) basta con añadir un objeto más a esta lista.
export const socialNetworks = [
  {
    id: 'facebook',
    icon: 'facebook',
    platform: 'Facebook',
    name: 'La Unión',
    handle: 'Partido Demócrata Cristiano La Unión',
    color: '#1877f2',
    url: 'https://www.facebook.com/profile.php?id=61590139751981',
    embed:
      'https://www.facebook.com/plugins/page.php?href=' +
      encodeURIComponent('https://www.facebook.com/profile.php?id=61590139751981') +
      '&tabs=timeline&width=500&height=580&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false',
  },
  {
    id: 'facebook-departamental',
    icon: 'facebook',
    platform: 'Facebook',
    name: 'Departamental',
    handle: 'PDC Departamental La Unión',
    color: '#1877f2',
    url: 'https://www.facebook.com/profile.php?id=61592557845748',
    embed:
      'https://www.facebook.com/plugins/page.php?href=' +
      encodeURIComponent('https://www.facebook.com/profile.php?id=61592557845748') +
      '&tabs=timeline&width=500&height=580&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false',
  },
  {
    id: 'tiktok',
    icon: 'tiktok',
    platform: 'TikTok',
    name: '@pdclaunion',
    handle: '@pdclaunion',
    color: '#111111',
    url: 'https://www.tiktok.com/@pdclaunion',
    // TikTok no permite incrustar un perfil de forma estable: se muestra una tarjeta con enlace directo.
    // Cuando tengan videos publicados se puede cambiar a incrustar un video (embed: 'https://www.tiktok.com/embed/v2/<ID>').
    card: true,
    cta: 'Ver videos en TikTok',
  },
  {
    id: 'instagram',
    icon: 'instagram',
    platform: 'Instagram',
    name: '@pdclaunion',
    handle: '@pdclaunion',
    color: '#e1306c',
    url: 'https://www.instagram.com/pdclaunion/',
    embed: 'https://www.instagram.com/pdclaunion/embed',
  },
];

// URL que codifica el código QR. Si se deja vacío usa el dominio donde esté publicada la página.
export const qrTargetUrl = '';

// ---- Perfil de Luis Ortiz (tomado de su hoja de vida) ---------------
// Nota: se omiten a propósito dirección, teléfono personal, correo y militancia previa.
export const luisProfile = {
  name: 'Luis Euceda Ortiz',
  shortName: 'Luis Ortiz',
  role: 'Candidato a Alcalde',
  municipality: 'La Unión Sur',
  party: 'Partido Demócrata Cristiano (PDC)',
  photo: '/assets/luis_ortiz_portrait.jpg',
  summary:
    'Ingeniero agrónomo y empresario con amplia trayectoria en gestión comunitaria, liderazgo institucional y desarrollo económico en el departamento de La Unión. Ha dirigido gremios, comités de turismo y de prevención de la violencia, combinando formación técnica con vocación de servicio.',
  highlights: [
    { value: '8', label: 'distritos recorridos', note: 'La Unión Sur' },
    { value: '9', label: 'ejes de trabajo', note: 'Economía familiar' },
    { value: '1°', label: 'hotel del país', note: 'puesto al servicio en COVID-19' },
  ],
  timeline: [
    {
      icon: 'hotel',
      org: 'Hotel Portobello',
      role: 'Propietario y Director General',
      desc: 'Impulsó el desarrollo turístico y comercial de La Unión. Fue el primer establecimiento hotelero del país puesto a disposición del Gobierno durante la emergencia sanitaria por COVID-19.',
    },
    {
      icon: 'handshake',
      org: 'Club de Leones Internacional · Filial La Unión',
      role: 'Vicepresidente',
      desc: 'Coordinación de proyectos de impacto social, filantropía y gestión de recursos comunitarios.',
    },
    {
      icon: 'briefcase',
      org: 'Cámara de Comercio e Industria de La Unión',
      role: 'Tesorero',
      desc: 'Administración financiera, control presupuestario y promoción de iniciativas comerciales de la región.',
    },
    {
      icon: 'anchor',
      org: 'Comité de Turismo de Conchagua',
      role: 'Presidente',
      desc: 'Impulso del sector turístico local mediante alianzas público-privadas y proyectos de desarrollo.',
    },
    {
      icon: 'users',
      org: 'ADESCO y Comité de Prevención de la Violencia · Cantón Huisquil',
      role: 'Presidente',
      desc: 'Gestión comunitaria participativa, mediación de conflictos y programas de cohesión social.',
    },
  ],
  education: [
    { title: 'Ingeniería Agrónoma', place: 'Universidad Politécnica de El Salvador (UPES)', year: '1998', desc: 'Especialidad en Zootecnia y Maquinaria Agrícola' },
    { title: 'Técnico en Instalaciones Eléctricas Industriales', place: 'ITCA-FEPADE / MEGATEC La Unión', year: '2007' },
    { title: 'Técnico Programador Analista', place: 'Computer Datasistem', year: '2000' },
    { title: 'Bachillerato en Ciencias y Letras', place: 'Instituto Paulino Valladares', year: '1987' },
  ],
  diplomas: [
    'Mediador de Conflictos',
    'Prevención de la Violencia',
    'Administración de ADESCO',
    'Hoteles Inteligentes',
    'Administración Deportiva',
    'Guía Turístico',
    'Prevención de la Trata de Personas',
  ],
};
