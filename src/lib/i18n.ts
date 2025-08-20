export type Language = 'es' | 'en';

export const translations = {
  es: {
    // Header
    features: "Características",
    contact: "Contacto",
    getInTouch: "Contáctanos",

    // Hero Section
    introducing: "Presentamos",
    buildWith: "Construye con",
    confidence: "confianza",
    heroCopy: "Estamos creando una plataforma moderna en bole.to. Únete a la lista de espera y sé el primero en saber cuándo lancemos.",
    joinWaitlist: "Unirse a la lista de espera",
    learnMore: "Conoce más",
    inDevelopment: "En desarrollo",
    secureReliable: "Seguro y confiable",

    // Features Section
    whyChoose: "¿Por qué elegir bole.to?",
    featuresSubtitle: "Construido para la web moderna con tecnología de vanguardia y experiencia de usuario al frente.",
    
    // Feature Cards
    lightningFast: "Ultra Rápido",
    lightningFastDesc: "Construido pensando en el rendimiento. Experimenta tiempos de carga ultra rápidos e interacciones fluidas en todos los dispositivos.",
    secureByDesign: "Seguro por Diseño",
    secureByDesignDesc: "Medidas de seguridad de nivel empresarial protegen tus datos con cifrado de extremo a extremo y detección avanzada de amenazas.",
    userCentric: "Centrado en el Usuario",
    userCentricDesc: "Cada característica está diseñada pensando en tus necesidades, ofreciendo una experiencia intuitiva que simplemente funciona.",
    seamlessIntegration: "Integración Perfecta",
    seamlessIntegrationDesc: "Conéctate con tus herramientas y flujos de trabajo existentes a través de nuestra API integral e integraciones.",
    innovationFirst: "Innovación Primero",
    innovationFirstDesc: "Mantente a la vanguardia con características de última generación impulsadas por la tecnología más reciente y mejores prácticas de la industria.",
    support247: "Soporte 24/7",
    support247Desc: "Nuestro equipo de soporte dedicado siempre está aquí para ayudarte a tener éxito, cuando necesites asistencia.",
    trustedBy: "De confianza para desarrolladores en todo el mundo",

    // Social Section
    socialFeatures: "Características Sociales",
    buildHype: "Genera expectativa",
    beforeTheDrop: "antes del lanzamiento",
    socialSubtitle: "Crea expectativa y participación mucho antes de que comience tu evento. Conecta artistas, asistentes y organizadores en una comunidad vibrante.",
    liveEventChat: "Chat del Evento en Vivo",
    liveEventChatDesc: "Comparte emoción, coordina reuniones y conéctate con otros asistentes a través de mensajería en tiempo real.",
    attendeeDiscovery: "Descubrimiento de Asistentes",
    attendeeDiscoveryDesc: "Ve quién va, conéctate con amigos y descubre nuevas personas que comparten tu gusto musical.",
    exclusiveDjContent: "Contenido Exclusivo de DJs",
    exclusiveDjContentDesc: "Los DJs comparten mezclas exclusivas, pistas no lanzadas y contenido tras bambalinas para generar expectativa.",
    livePolls: "Encuestas y Comentarios en Vivo",
    livePollsDesc: "Los organizadores crean encuestas para solicitudes de canciones, preferencias del evento y recopilan comentarios en tiempo real de la comunidad.",

    // Live chat mock content
    djNexus: "DJ Nexus",
    djNexusMessage: "¡Acabo de lanzar un adelanto exclusivo de la pista de cierre de esta noche! 🔥",
    sarahBeats: "Sarah_beats",
    sarahMessage: "¡No puedo esperar! ¿Quién más va solo? ¡Encontrémonos! 🎵",
    eventPoll: "Encuesta del Evento",
    pollQuestion: "¿Qué género debería dominar el escenario principal?",
    techno: "Techno",
    house: "House",
    peopleHyped: "247 personas están emocionadas por este evento",
    shareExcitement: "Comparte tu emoción...",

    // Organizers Section
    forOrganizers: "Para Organizadores",
    operateEvent: "Opera tu evento",
    startToFinish: "de principio a fin",
    organizersSubtitle: "Crea tu evento en minutos, vende en cualquier moneda, controla el acceso con escaneo QR offline, y rastrea todo en tiempo real. Agrega la suite de promotores para vender más sin perder el control.",

    // Steps
    create: "Crear",
    createDesc: "Imagen de portada, fecha y lugar, capacidad y categorías. Página pública lista para SEO.",
    configureTickets: "Configurar Boletos",
    configureTicketsDesc: "General, VIP, preventa, combos y cupones. Cuotas, horarios y niveles de precios.",
    collectPayment: "Cobrar Pago",
    collectPaymentDesc: "Checkout en múltiples monedas, conciliación clara, reembolsos opcionales y transferencias.",
    operateAtDoor: "Operar en Puerta",
    operateAtDoorDesc: "Escáner en tu teléfono (iOS/Android), validación en milisegundos, modo offline real, múltiples puntos de control, roles de personal.",

    // Access Section
    accessTitle: "Acceso que nunca falla,",
    withOrWithoutInternet: "con o sin internet",
    qrWithoutSignal: "QR sin señal:",
    qrDesc: "Lista de boletos precargada en dispositivo",
    immediateValidation: "Validación local inmediata",
    validationDesc: "Auto-sincronización cuando regresa la red",
    duplicateDetection: "Detección de duplicados con alertas",
    duplicateDesc: "Hora y puerta del primer check-in",
    manualCheckin: "Check-in manual por nombre/email",
    manualDesc: "Si el QR está dañado o falta",
    multiDoor: "Multi-puerta y roles",
    multiDoorDesc: "Múltiples escáneres en paralelo, permisos de personal",
    accessNote: "Probado en eventos de alto tráfico. Si la red falla, el acceso continúa.",
    scannedTickets: "Escaneados 247 / 500 boletos",
    validEntry: "✓ ENTRADA VÁLIDA",
    alreadyUsed: "✗ YA USADO",
    usedAt: "Usado en Puerta A, 8:45 PM",
    noInternet: "Sin Internet",

    // Promoters Section
    sellMore: "Vende más",
    withPromoterTeam: "con tu equipo de promotores",
    promotersSubtitle: "Gestión de promotores integrada con enlaces únicos, comisiones escalonadas y tablas de posiciones en vivo. Escala tus ventas sin perder el control.",
    linksAndCodes: "Enlaces y Códigos",
    linksDesc: "Enlaces UTM únicos, códigos personales y códigos QR para cada promotor para distribuir y rastrear.",
    commissions: "Comisiones",
    commissionsDesc: "Tasas de comisión escalonadas por volumen, bonos por hitos y cálculos automáticos de pagos.",
    leaderboard: "Tabla de Posiciones",
    leaderboardDesc: "Rankings en tiempo real por ventas, tasas de conversión e ingresos atribuidos para mantener viva la competencia.",
    bestPractices: "Mejores Prácticas",
    practice1: "Establece objetivos semanales con mini-bonos por hito",
    practice2: "Limita códigos a categorías clave (ej. madrugadores)",
    practice3: "Muestra rankings en vivo para mantener la energía competitiva",

    // Metrics Section
    metricsThatMatter: "Métricas que",
    actuallyMatter: "realmente importan",
    metricsSubtitle: "Información en tiempo real sobre el rendimiento de ventas, participación de asistentes y eficiencia operativa. Toma decisiones basadas en datos para tus eventos.",
    ticketsSold: "Boletos Vendidos",
    conversionRate: "Tasa de Conversión",
    netRevenue: "Ingresos Netos",
    liveCheckins: "Check-ins en Vivo",
    salesByChannel: "Ventas por Canal",
    direct: "Directo",
    instagram: "Instagram",
    promoters: "Promotores",
    topPromoters: "Top Promotores",
    createMyEvent: "Crear Mi Evento",
    requestDemo: "Solicitar Demo",
    worksOnMobile: "Funciona en iOS/Android. No se necesita hardware adicional.",

    // Waitlist Section
    comingSoon: "Próximamente",
    readyToRevolutionize: "¿Listo para revolucionar",
    yourEvents: "tus eventos?",
    waitlistCopy: "Estamos dando los toques finales a bole.to. Únete a nuestra lista de espera para obtener acceso temprano exclusivo y estar entre los primeros en experimentar el futuro de la gestión de eventos.",
    enterEmail: "Ingresa tu dirección de email",
    earlyAccess: "Acceso Temprano",
    earlyAccessDesc: "Sé el primero en experimentar nuestra plataforma revolucionaria de eventos antes que nadie.",
    exclusiveBenefits: "Beneficios Exclusivos",
    exclusiveBenefitsDesc: "Precios especiales, características premium y soporte prioritario para los primeros adoptadores.",
    shapeTheFuture: "Da Forma al Futuro",
    shapeTheFutureDesc: "Tus comentarios nos ayudarán a construir la solución perfecta de gestión de eventos.",
    joinWaitlistCount: "Únete a las 500+ personas ya en la lista de espera",

    // Contact Section
    letsBuild: "Construyamos el futuro de los",
    eventsTogether: "eventos juntos",
    contactCopy: "¿Tienes preguntas sobre bole.to? ¿Quieres asociarte con nosotros? ¿O simplemente quieres charlar sobre el futuro de la gestión de eventos? Nos encantaría escucharte.",
    generalInquiries: "Consultas Generales",
    generalInquiriesDesc: "¿Preguntas sobre bole.to, asociaciones, o solo quieres saludar? Escríbenos.",
    businessPartnerships: "Negocios y Asociaciones",
    businessPartnershipsDesc: "¿Interesado en integrarte con bole.to o explorar oportunidades de negocio?",
    supportHelp: "Soporte y Ayuda",
    supportHelpDesc: "¿Necesitas ayuda con nuestra plataforma o tienes preguntas técnicas?",
    sendMessage: "Enviar mensaje",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Email",
    subject: "Asunto",
    selectTopic: "Selecciona un tema...",
    generalInquiry: "Consulta General",
    waitlistEarlyAccess: "Lista de Espera y Acceso Temprano",
    partnership: "Negocios y Asociaciones",
    support: "Soporte y Ayuda",
    pressMedia: "Prensa y Medios",
    message: "Mensaje",
    messagePlaceholder: "Cuéntanos cómo podemos ayudarte...",
    sendMessageBtn: "Enviar Mensaje",
    reachDirectly: "También puedes contactarnos directamente:",
    respondTime: "Usualmente respondemos dentro de 24 horas",
    timezone: "GMT-6 (Hora Central)",

    // Footer
    footerDescription: "El futuro de la gestión de eventos. Ticketing integral, escaneo QR offline, participación social y análisis en tiempo real en una plataforma poderosa.",
    product: "Producto",
    footerFeatures: "Características",
    pricing: "Precios",
    apiDocs: "Documentación API",
    mobileApps: "Apps Móviles",
    company: "Empresa",
    aboutUs: "Acerca de Nosotros",
    blog: "Blog",
    careers: "Carreras",
    soon: "Pronto",
    allRightsReserved: "Todos los derechos reservados",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    systemsOperational: "Estado: Todos los sistemas operativos",
    footerNote: "bole.to está actualmente en desarrollo. Únete a nuestra lista de espera para ser notificado cuando lancemos y obtener acceso temprano exclusivo a nuestra plataforma. Construido con ❤️ para organizadores de eventos y asistentes en todo el mundo.",

    // Camera D+1 Section
    cameraFeatures: "Características de Cámara",
    captureTheMoment: "Captura el momento",
    revealTomorrow: "revela mañana",
    cameraSubtitle: "Cada boleto incluye acceso a nuestra cámara digital exclusiva. Captura momentos espontáneos durante el evento que se revelarán automáticamente al día siguiente, creando una galería compartida de recuerdos únicos.",
    disposableStyle: "Estilo Cámara Desechable",
    disposableStyleDesc: "Experiencia nostálgica con límite de 12 fotos por asistente, fomentando momentos más auténticos y espontáneos.",
    autoReveal: "Revelado Automático D+1",
    autoRevealDesc: "Las fotos se revelan automáticamente 24 horas después del evento, creando expectativa y extendiendo la experiencia del evento.",
    sharedGallery: "Galería Compartida",
    sharedGalleryDesc: "Todos los asistentes pueden ver, descargar y compartir la colección completa de fotos del evento.",
    moderationIncluded: "Moderación Incluida",
    moderationIncludedDesc: "Sistema de moderación automática y manual para asegurar que solo el mejor contenido sea revelado.",
    photosRemaining: "fotos restantes",
    photosTaken: "foto tomada",
    revealCountdown: "Se revelan en",
    hours: "horas",
    dragToExplore: "Arrastra para explorar las fotos del evento",
    eventGallery: "Galería del Evento",
    dayAfterReveal: "Revelado del Día Después",
    cameraIncluded: "Cada boleto incluye cámara digital exclusiva con 12 fotos",

    // Common
    realTime: "Tiempo real",
    lastDays: "Últimos 7 días",
    thisMonth: "Este mes",
    sales: "ventas",
    growth: "crecimiento",
    live: "En vivo"
  },
  en: {
    // Header
    features: "Features",
    contact: "Contact",
    getInTouch: "Get in touch",

    // Hero Section
    introducing: "Introducing",
    buildWith: "Unite. Ignite. Exite",
    confidence: "This is Bole.to",
    heroCopy: "We're crafting a modern platform at bole.to. Join the waitlist and be the first to know when we launch.",
    joinWaitlist: "Join the waitlist",
    learnMore: "Learn more",
    inDevelopment: "In development",
    secureReliable: "Secure & reliable",

    // Features Section
    whyChoose: "Why choose bole.to?",
    featuresSubtitle: "At bole.to, we’re not just here to sell tickets — we’re here to help your event truly connect with people. As a Latin startup, we understand how our culture is lived, shared, and celebrated. Our platform is simple, fast, and secure, making it easy for your audience to discover your event, get excited, and show up ready to enjoy. From the first announcement to the final applause, we’re with you every step of the way, offering reliable technology, real 24/7 support, and that personal latino touch that keeps everything running smoothly.",
    
    // Feature Cards
    lightningFast: "Lightning Fast",
    lightningFastDesc: "Your attendees can buy tickets in under 10 seconds, even from their phone. No slow-loading screens, no unnecessary steps, so the excitement never fades.",
    secureByDesign: "Secure by Design",
    secureByDesignDesc: "We protect your sales and your customers’ data with end-to-end encryption and constant monitoring. Your community feels safe from purchase to event day.",
    userCentric: "User-Centric",
    userCentricDesc: "From automated reminders and quick check-in to pre-event messages, everything is designed to make your attendees feel part of the experience before they even arrive.",
    seamlessIntegration: "Seamless Integration",
    seamlessIntegrationDesc: "Connect bole.to with your social media, payment systems, and marketing tools. Your attendees can discover, pay, and get their tickets without leaving their favorite digital space.",
    innovationFirst: "Innovation First",
    innovationFirstDesc: "Dynamic QR codes, real-time stats, and live engagement tools. You’re not just selling tickets, you’re creating interaction every step of the way.",
    support247: "24/7 Support",
    support247Desc: "Our team replies in minutes, not days. Whether you need help before the event or during check-in, you’ll always have someone ready to assist you.",
    trustedBy: "Trusted by developers worldwide",

    // Social Section
    socialFeatures: "Social Features",
    buildHype: "Build the hype",
    beforeTheDrop: "before the drop",
    socialSubtitle: "Create buzz and engagement long before your event starts. Connect artists, attendees, and organizers in one vibrant community.",
    liveEventChat: "Live Event Chat",
    liveEventChatDesc: "Share excitement, coordinate meetups, and connect with fellow attendees through real-time messaging.",
    attendeeDiscovery: "Attendee Discovery",
    attendeeDiscoveryDesc: "See who's coming, connect with friends, and discover new people who share your music taste.",
    exclusiveDjContent: "Exclusive DJ Content",
    exclusiveDjContentDesc: "DJs share exclusive mixes, unreleased tracks, and behind-the-scenes content to build anticipation.",
    livePolls: "Live Polls & Feedback",
    livePollsDesc: "Organizers create polls for song requests, event preferences, and gather real-time feedback from the community.",

    // Live chat mock content
    djNexus: "DJ Nexus",
    djNexusMessage: "Just dropped an exclusive preview of tonight's closing track! 🔥",
    sarahBeats: "Sarah_beats",
    sarahMessage: "Can't wait! Who else is going solo? Let's meet up! 🎵",
    eventPoll: "Event Poll",
    pollQuestion: "What genre should dominate the main stage?",
    techno: "Techno",
    house: "House",
    peopleHyped: "247 people are hyped for this event",
    shareExcitement: "Share your excitement...",

    // Organizers Section
    forOrganizers: "For Organizers",
    operateEvent: "Operate your event",
    startToFinish: "from start to finish",
    organizersSubtitle: "Create your event in minutes, sell in any currency, control access with offline QR scanning, and track everything in real-time. Add the promoter suite to sell more without losing control.",

    // Steps
    create: "Create",
    createDesc: "Cover image, date and venue, capacity and categories. SEO-ready public page ready to share.",
    configureTickets: "Configure Tickets",
    configureTicketsDesc: "General, VIP, presale, combos and coupons. Quotas, schedules, and price tiers.",
    collectPayment: "Collect Payment",
    collectPaymentDesc: "Checkout in multiple currencies, clear reconciliation, optional refunds and transfers.",
    operateAtDoor: "Operate at Door",
    operateAtDoorDesc: "Scanner on your phone (iOS/Android), millisecond validation, real offline mode, multiple checkpoints, staff roles.",

    // Access Section
    accessTitle: "Access that never fails,",
    withOrWithoutInternet: "with or without internet",
    qrWithoutSignal: "QR without signal:",
    qrDesc: "Ticket list pre-loaded on device",
    immediateValidation: "Immediate local validation",
    validationDesc: "Auto-sync when network returns",
    duplicateDetection: "Duplicate detection with alerts",
    duplicateDesc: "Time and door of first check-in",
    manualCheckin: "Manual check-in by name/email",
    manualDesc: "If QR is damaged or missing",
    multiDoor: "Multi-door and roles",
    multiDoorDesc: "Multiple scanners in parallel, staff permissions",
    accessNote: "Tested on high-traffic events. If network fails, access continues.",
    scannedTickets: "Scanned 247 / 500 tickets",
    validEntry: "✓ VALID ENTRY",
    alreadyUsed: "✗ ALREADY USED",
    usedAt: "Used at Door A, 8:45 PM",
    noInternet: "No Internet",

    // Promoters Section
    sellMore: "Sell more",
    withPromoterTeam: " with your promoter team",
    promotersSubtitle: "Built-in promoter management with unique links, tiered commissions, and live leaderboards. Scale your sales without losing control.",
    linksAndCodes: "Links & Codes",
    linksDesc: "Unique UTM links, personal codes and QR codes for each promoter to distribute and track.",
    commissions: "Commissions",
    commissionsDesc: "Tiered commission rates by volume, milestone bonuses, and automated payout calculations.",
    leaderboard: "Leaderboard",
    leaderboardDesc: "Real-time rankings by sales, conversion rates, and attributed revenue to keep competition alive.",
    bestPractices: "Best Practices",
    practice1: "Set weekly targets with mini-bonuses per milestone",
    practice2: "Limit codes to key categories (e.g. early bird)",
    practice3: "Display live rankings to maintain competitive energy",

    // Metrics Section
    metricsThatMatter: "Metrics that",
    actuallyMatter: "actually matter",
    metricsSubtitle: "Real-time insights into sales performance, attendee engagement, and operational efficiency. Make data-driven decisions for your events.",
    ticketsSold: "Tickets Sold",
    conversionRate: "Conversion Rate",
    netRevenue: "Net Revenue",
    liveCheckins: "Live Check-ins",
    salesByChannel: "Sales by Channel",
    direct: "Direct",
    instagram: "Instagram",
    promoters: "Promoters",
    topPromoters: "Top Promoters",
    createMyEvent: "Create My Event",
    requestDemo: "Request Demo",
    worksOnMobile: "Works on iOS/Android. No extra hardware needed.",

    // Waitlist Section
    comingSoon: "Coming Soon",
    readyToRevolutionize: "Ready to revolutionize",
    yourEvents: "your events?",
    waitlistCopy: "We're putting the final touches on bole.to. Join our waitlist to get exclusive early access and be among the first to experience the future of event management.",
    enterEmail: "Enter your email address",
    earlyAccess: "Early Access",
    earlyAccessDesc: "Be the first to experience our revolutionary event platform before anyone else.",
    exclusiveBenefits: "Exclusive Benefits",
    exclusiveBenefitsDesc: "Special pricing, premium features, and priority support for early adopters.",
    shapeTheFuture: "Shape the Future",
    shapeTheFutureDesc: "Your feedback will help us build the perfect event management solution.",
    joinWaitlistCount: "Join 500+ people already on the waitlist",

    // Contact Section
    letsBuild: "Let's build the future of",
    eventsTogether: "events together",
    contactCopy: "Have questions about bole.to? Want to partner with us? Or just want to chat about the future of event management? We'd love to hear from you.",
    generalInquiries: "General Inquiries",
    generalInquiriesDesc: "Questions about bole.to, partnerships, or just want to say hello? Drop us a line.",
    businessPartnerships: "Business & Partnerships",
    businessPartnershipsDesc: "Interested in integrating with bole.to or exploring business opportunities?",
    supportHelp: "Support & Help",
    supportHelpDesc: "Need help with our platform or have technical questions?",
    sendMessage: "Send us a message",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    subject: "Subject",
    selectTopic: "Select a topic...",
    generalInquiry: "General Inquiry",
    waitlistEarlyAccess: "Waitlist & Early Access",
    partnership: "Business & Partnerships",
    support: "Support & Help",
    pressMedia: "Press & Media",
    message: "Message",
    messagePlaceholder: "Tell us how we can help you...",
    sendMessageBtn: "Send Message",
    reachDirectly: "You can also reach us directly:",
    respondTime: "Usually respond within 24 hours",
    timezone: "GMT-6 (Central Time)",

    // Footer
    footerDescription: "The future of event management. Comprehensive ticketing, offline QR scanning, social engagement, and real-time analytics in one powerful platform.",
    product: "Product",
    footerFeatures: "Features",
    pricing: "Pricing",
    apiDocs: "API Docs",
    mobileApps: "Mobile Apps",
    company: "Company",
    aboutUs: "About Us",
    blog: "Blog",
    careers: "Careers",
    soon: "Soon",
    allRightsReserved: "All rights reserved",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    systemsOperational: "Status: All systems operational",
    footerNote: "bole.to is currently in development. Join our waitlist to be notified when we launch and get exclusive early access to our platform. Built with ❤️ for event organizers and attendees worldwide.",

    // Camera D+1 Section
    cameraFeatures: "Camera Features",
    captureTheMoment: "Capture the moment",
    revealTomorrow: "reveal tomorrow",
    cameraSubtitle: "Every ticket includes access to our exclusive digital camera. Capture spontaneous moments during the event that will automatically be revealed the next day, creating a shared gallery of unique memories.",
    disposableStyle: "Disposable Camera Style",
    disposableStyleDesc: "Nostalgic experience with a limit of 12 photos per attendee, encouraging more authentic and spontaneous moments.",
    autoReveal: "Auto Reveal D+1",
    autoRevealDesc: "Photos automatically reveal 24 hours after the event, creating anticipation and extending the event experience.",
    sharedGallery: "Shared Gallery",
    sharedGalleryDesc: "All attendees can view, download, and share the complete collection of event photos.",
    moderationIncluded: "Moderation Included",
    moderationIncludedDesc: "Automatic and manual moderation system to ensure only the best content is revealed.",
    photosRemaining: "photos remaining",
    photosTaken: "photo taken",
    revealCountdown: "Reveals in",
    hours: "hours",
    dragToExplore: "Drag to explore event photos",
    eventGallery: "Event Gallery",
    dayAfterReveal: "Day After Reveal",
    cameraIncluded: "Every ticket includes exclusive digital camera with 12 photos",

    // Common
    realTime: "Real-time",
    lastDays: "Last 7 days",
    thisMonth: "This month",
    sales: "sales",
    growth: "growth",
    live: "Live"
  }
} as const;

export function detectLanguage(): Language {
  // Check localStorage first
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('bole-language') as Language;
    if (stored && (stored === 'es' || stored === 'en')) {
      return stored;
    }
    
    // Check navigator language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('es')) {
      return 'es';
    }
  }
  
  // Default to Spanish since main target audience is Spanish-speaking
  return 'es';
}

export function setLanguage(lang: Language) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('bole-language', lang);
  }
}