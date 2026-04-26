/**
 * Content constants for EBE Studio website.
 */

export const STUDIO_INFO = {
  name: "Ekie Bozeur Entertainment",
  shortName: "EBE",
  location: "Yaoundé, Total Biteng",
  phone: "(+237) 699 132 711",
  email: "studioebesarl@gmail.com",
  whatsapp:
    "https://wa.me/237699132711?text=Bonjour,%20je%20souhaite%20r%C3%A9server%20une%20session%20/%20en%20savoir%20plus%20sur%20vos%20services.",
};

export const SERVICES = [
  {
    id: "recording",
    title: "Studio d'enregistrement",
    description:
      "Enregistrez vos voix, instruments ou podcasts dans un environnement professionnel avec ingénieur du son dédié.",
    longDescription:
      "Chez EBE, nous disposons d'une cabine traitée acoustiquement pour capturer chaque nuance de votre performance avec une clarté cristalline. Que vous soyez un artiste solo, un groupe ou un podcaster, notre équipement haut de gamme et nos ingénieurs expérimentés garantissent un résultat professionnel dès la prise.",
    features: [
      "Cabine acoustique pro",
      "Microphones haut de gamme (Neumann, AKG)",
      "Ingénieur du son dédié",
      "Ambiance créative et confortable",
    ],
    icon: "Mic",
  },
  {
    id: "mixing",
    title: "Mixage & Mastering",
    description:
      "Obtenez un son clair, équilibré et prêt pour les plateformes de streaming (Spotify, Apple Music).",
    longDescription:
      "Le mixage et le mastering sont les étapes cruciales qui transforment un enregistrement brut en un hit radio. Nous équilibrons les fréquences, gérons la dynamique et apportons cette brillance finale qui permettra à votre musique de rivaliser avec les standards mondiaux.",
    features: [
      "Équilibre spectral parfait",
      "Mastering aux normes streaming",
      "Correction de justesse (Auto-Tune pro)",
      "Livraison multi-formats",
    ],
    icon: "Sliders",
  },
  {
    id: "beatmaking",
    title: "Beatmaking sur mesure",
    description:
      "Production de beats originaux adaptés à votre style (Afro, Rap, Gospel, Bikutsi, Mbole...)",
    longDescription:
      "Ne vous contentez pas de beats génériques trouvés sur internet. Nos beatmakers travaillent en étroite collaboration avec vous pour composer l'instrumentale unique qui colle parfaitement à votre univers et à votre voix.",
    features: [
      "Compositions originales 100% exclusives",
      "Tous styles : Afropop, Urbain, Traditionnel",
      "Arrangements complexes",
      "Réalisation artistique de A à Z",
    ],
    icon: "Music",
  },
  {
    id: "video",
    title: "Réalisation de clips vidéo",
    description:
      "Création de clips modernes avec storytelling, montage dynamique et qualité cinéma.",
    longDescription:
      "L'image est indissociable du son. Notre équipe vidéo conçoit des clips visuellement percutants qui racontent une histoire. Du script au montage final, nous utilisons des caméras et des éclairages de qualité cinéma pour sublimer votre projet.",
    features: [
      "Écriture de storyboard",
      "Tournage 4K Cinema",
      "Color grading pro",
      "Effets spéciaux et montage dynamique",
    ],
    icon: "Video",
  },
  {
    id: "social",
    title: "Communication digitale",
    description:
      "Gestion de réseaux sociaux pour artistes, labels et entreprises.",
    longDescription:
      "Avoir un bon produit ne suffit plus, il faut savoir le vendre. Nous élaborons des stratégies de marketing digital pour accroître votre visibilité, engager votre communauté et maximiser l'impact de vos sorties sur TikTok, Instagram et Facebook.",
    features: [
      "Stratégie de lancement d'album",
      "Création de contenu viral",
      "Publicité ciblée (Ads)",
      "Analyse d'audience",
    ],
    icon: "Share2",
  },
  {
    id: "photography",
    title: "Photographie pro",
    description:
      "Shooting studio ou extérieur pour votre image de marque.",
    longDescription:
      "Pour vos covers d'album, vos affiches de concert ou vos réseaux sociaux, des photos de haute qualité sont indispensables. Nous réalisons des séances de shooting qui capturent votre personnalité et renforcent votre identité visuelle.",
    features: [
      "Shooting en studio éclairé",
      "Retouches haute définition",
      "Photos de presse et covers",
      "Backstage et lifestyle",
    ],
    icon: "Camera",
  },
];

export const TEAM = [
  {
    name: "EKIE BOZEUR",
    role: "CEO - Ingénieur son",
    description:
      "Je dirige l'entreprise et je suis responsable de la qualité sonore.",
    image: "/medias/images/team/team-1.jpg",
  },
  {
    name: "LEO VOUK",
    role: "Réalisateur",
    description: "Je suis responsable de la réalisation et de la production de vidéos.",
    image: "/medias/images/team/team-2.jpg",
  },
  {
    name: "TIGER",
    role: "Directeur Général",
    description: "Je suis responsable de la direction générale du studio.",
    image: "/medias/images/team/team-3.jpg",
  },
  {
    name: "BENI",
    role: "Directeur des affaires administratives et juridiques",
    description:
      "Je suis responsable de la gestion des questions administratives et de la conformité juridique de l'organisation.",
    image: "/medias/images/team/team-4.jpg",
  },
  {
    name: "SAP SEULEMENT",
    role: "Technicien son",
    description: "Je suis technicien studio.",
    image: "/medias/images/team/team-5.jpg",
  },
  {
    name: "LET ME SHINE",
    role: "Beatmaker - Technicien de son",
    description:
      "Je suis responsable de la création de beats et de la conception sonore.",
    image: "/medias/images/team/team-6.jpg",
  },
  {
    name: "OLAMAR",
    role: "Beatmaker - Technicien de son",
    description:
      "Je suis responsable de la création de beats et de la conception sonore.",
    image: "/medias/images/team/team-7.jpg",
  },
  {
    name: "KING KELLY",
    role: "Photographe - assistant réalisateur",
    description:
      "Je suis responsable de la photographie et de l'assistance à la réalisation.",
    image: "/medias/images/team/team-8.jpg",
  },
  {
    name: "DANI BASS",
    role: "Pianiste - DA",
    description: "Je suis responsable de la composition musicale.",
    image: "/medias/images/team/team-9.jpg",
  },
  {
    name: "LET IT SHINE",
    role: "Développeur web - Graphiste",
    description:
      "Je suis responsable de la création et de la maintenance des sites web, applications et supports graphiques.",
    image: "/medias/images/team/team-10.jpg",
  },
  {
    name: "LONDON",
    role: "Créateur de contenu - Infographe",
    description:
      "Je suis responsable de la création de contenu visuel et graphique.",
    image: "/medias/images/team/team-11.jpg",
  },
];

export const TESTIMONIALS = [
  {
    name: "Evina",
    quote: "Une équipe proche et professionnelle du début à la fin.",
    avatar: "/medias/images/t%C3%A9moignages/evina.jpg",
  },
  {
    name: "Cysoul",
    quote: "Une qualité sonore exceptionnelle.",
    avatar: "/medias/images/t%C3%A9moignages/cysoul.jpg",
  },
  {
    name: "Tenor",
    quote: "Une ambiance créative qui pousse à donner le meilleur.",
    avatar: "/medias/images/t%C3%A9moignages/tenor.jpg",
  },
  {
    name: "Lydol",
    quote: "Un studio qui dépasse toujours mes attentes.",
    avatar: "/medias/images/t%C3%A9moignages/lydol.jpg",
  },
  {
    name: "Vanister",
    quote: "Un encadrement humain et une énergie unique en session.",
    avatar: "/medias/images/t%C3%A9moignages/vanister.jpg",
  },
];

export const PLAYLIST = [
  {
    genre: "RAP",
    tracks: [
      {
        artist: "KING ARTHUR FB",
        title: "HABAA",
        duration: "3:45",
        file: "/medias/audio/tracks/rap-king-arthur-habaa.mp3",
      },
      {
        artist: "TENOR",
        title: "ZERO",
        duration: "3:12",
        file: "/medias/audio/tracks/rap-tenor-zero.mp3",
      },
    ],
  },
  {
    genre: "CHANT",
    tracks: [
      {
        artist: "EVINA",
        title: "BI MA WO",
        duration: "4:20",
        file: "/medias/audio/tracks/chant-evina-bi-ma-wo.mp3",
      },
    ],
  },
  {
    genre: "BIKUTSI",
    tracks: [
      {
        artist: "VANISTER ENAMA",
        title: "MAMA NTSAMA",
        duration: "3:58",
        file: "/medias/audio/tracks/bikutsi-vanister-enama-mama-ntsama.mp3",
      },
      {
        artist: "CYSOUL",
        title: "KOULOS",
        duration: "4:05",
        file: "/medias/audio/tracks/bikutsi-cysoul-koulos.mp3",
      },
    ],
  },
  {
    genre: "MBOLE",
    tracks: [
      {
        artist: "SCANNER NEVILLE",
        title: "NOUVEAU DÉPART",
        duration: "4:15",
        file: "/medias/audio/tracks/mbole-scanner-neville-nouveau-depart.mp3",
      },
    ],
  },
  {
    genre: "GOSPEL",
    tracks: [
      {
        artist: "INDIRA",
        title: "ONE CHANCE",
        duration: "4:30",
        file: "/medias/audio/tracks/gospel-indira-one-chance.mp3",
      },
    ],
  },
];

export const FAQS = [
  {
    question: "Quels types de projets réalisez-vous ?",
    answer:
      "Musique, clips, branding, communication digitale, événements.",
  },
  {
    question: "Comment réserver ?",
    answer: "Via WhatsApp ou formulaire en ligne.",
  },
  {
    question: "Accompagnez-vous les débutants ?",
    answer: "Oui, nous guidons chaque artiste du début à la fin.",
  },
  {
    question: "Délais ?",
    answer:
      "Variables selon le projet, mais optimisés pour une livraison rapide.",
  },
];
