// constants/artistData.ts

export const artist = {
  name: 'Sebastián Vento G.',
  alias: '"El Chino"',
  businessName: 'Ventatto Tattoo Studio',
  email: 'sebastianvento62@gmail.com',
  phone: '+53 63677204',
  address: {
    province: "Cienfuegos",
    municipality: "Cienfuegos",
    street: "Calle 47 entre 58 y 60 #5803",
    fullAddress: "Calle 47 entre 58 y 60 #5803, Cienfuegos, Cuba"
  },
  socialNetworks: [
    {
      name: "Instagram",
      icon: "📸",
      url: "https://instagram.com/sebastiavg0",
      handle: "@sebastiavg0",
      color: "hover:text-pink-500",
      active: true
    },
    {
      name: "Facebook",
      icon: "📘",
      url: "https://facebook.com/SebastianVento",
      handle: "",
      color: "hover:text-cyan-400",
      active: true
    },
    {
      name: "TikTok",
      icon: "🎵",
      url: "",
      handle: "",
      color: "hover:text-cyan-400",
      active: false
    },
    {
      name: "WhatsApp",
      icon: "💬",
      url: "https://wa.me/63677204",
      handle: "",
      color: "hover:text-green-500",
      active: true
    },
  ],
  // Metadata adicional útil
  meta: {
    yearsOfExperience: 1,
    specialties: ["Realismo", "Lettering", "Puntillismo de arrastre"],
    phrase: "Realismo, lettering y puntillismo de arrastre: tres técnicas, una sola firma.",
    colors: ["Black and White", "Set de Grises"],
    bio: "Apasionado desde pequeño del dibujo y el arte de la piel. Mi viaje en el mundo del tatuaje comenzó hace más de un año, y desde entonces no he parado de crecer y aprender. Cada día busco superarme y ofrecer lo mejor de mí en cada diseño.",
    philosophy: "Creo que un tatuaje no es solo tinta bajo la piel, es una historia, un recuerdo, una parte de quien sos. Por eso me tomo el tiempo de escuchar a cada cliente, entender su idea y transformarla en arte único y personalizado.",
    experience: "1 año de experiencia",
    role: "Tatuador Especialista",
  },
  specialties: [
    { name: "Realismo", icon: "🎨", description: "Detalles hiperrealistas que cobran vida" },
    { name: "Lettering", icon: "✍️", description: "Caligrafía personalizada con estilo único" },
    { name: "Puntillismo de arrastre", icon: "✨", description: "Técnica única de puntos que crean textura y movimiento" },
  ],
  achievements: [
    { number: "50+", label: "Clientes felices" },
    { number: "100+", label: "Tatuajes realizados" },
    { number: "3", label: "Técnicas dominadas" },
    { number: "365", label: "Días de pasión" },
  ],

  herramientas: [
    "Máquinas rotativas de última generación",
    "Tintas de alta calidad Black and White",
    "Set de grises profesionales",
    "Material descartable estéril",
  ],
} as const;

// Export individual para backward compatibility
export const { name, alias, businessName,
  email, phone, address,
  socialNetworks, achievements, herramientas
} = artist;

