import Link from "next/link";

export default function Hero() {
  const name = 'Sebastián Vento G.';
  const alias = 'El Chino';
  const businessName = 'Estudio de tatuajes Ventatto';
  const experience = '1año y todavía sigo creciendo';
  const skills = 'Realismo Lettering Puntillismo de arrastre';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background con efecto de fuego */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-red-950/30 to-orange-900/20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600 rounded-full blur-[100px] opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000" />
      </div>

      {/* ========== AVATAR EN ESQUINA SUPERIOR DERECHA ========== */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
        <div className="relative group">
          {/* Anillo de glow externo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-yellow-400 to-red-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300" />
          
          {/* Avatar circular */}
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-orange-500/50 bg-black/50 backdrop-blur-sm cursor-pointer">
            {/* Placeholder - Reemplaza la URL con tu imagen real */}
            <img 
              src="/chino.jpg" 
              alt={`${alias} avatar`}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay de gradiente en hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
          </div>
          
          {/* Badge de verificación en hover */}
          <div className="absolute -bottom-1 -right-1 bg-orange-600 rounded-full p-1 opacity-0 group-hover:opacity-100 transition duration-300">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-3">
        {/* Nombre y alias */}
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-600/20 backdrop-blur-sm border border-orange-600/50">
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-wider">
            {name} ✦ {alias}
          </span>
        </div>

        {/* Business Name */}
        <div className="mb-4">
          <span className="text-orange-500 text-sm font-mono tracking-[0.3em] uppercase">
            {businessName}
          </span>
        </div>

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
          <span className="bg-gradient-to-r from-orange-600 via-yellow-400 to-red-600 bg-clip-text text-transparent animate-gradient">
            Arte que quema
          </span>
          <br />
          <span className="text-white">bajo tu piel</span>
        </h1>

        {/* Bibliografía / Frase personal */}
        <p className="text-gray-300 text-lg md:text-xl mb-4 max-w-2xl mx-auto italic">
          Realismo, lettering y puntillismo de arrastre: tres técnicas, una sola firma.
        </p>

        {/* Skills destacadas */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {skills.split(' ').map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm font-mono border border-orange-600/40 rounded-full text-orange-400 bg-orange-600/10"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={'/galery'}
          className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg uppercase tracking-wider hover:shadow-xl hover:shadow-orange-600/50 transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Ver Portafolio</span>
          </Link>
          <Link href={'/about_me'}
           className="px-8 py-4 rounded-full border-2 border-orange-600 text-orange-400 font-bold text-lg uppercase tracking-wider hover:bg-orange-600 hover:text-white transition-all duration-300">
            Conócenos
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-orange-600/20">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-400">50+</div>
            <div className="text-gray-400 text-sm mt-1">Tatuajes realizados</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-400">{experience.split(' ')[0]}</div>
            <div className="text-gray-400 text-sm mt-1">De experiencia</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-400">100%</div>
            <div className="text-gray-400 text-sm mt-1">Arte personalizado</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-400">3</div>
            <div className="text-gray-400 text-sm mt-1">Técnicas exclusivas</div>
          </div>
        </div>

        {/* Firma personal */}
        <div className="mt-8 text-gray-500 text-sm font-mono">
          ✦ {alias} · {businessName} ✦
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-600 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-orange-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}