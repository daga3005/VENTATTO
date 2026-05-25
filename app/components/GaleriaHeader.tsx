// components/GaleriaHeader.tsx
export function GaleriaHeader() {
  return (
    <div className="text-center mb-12">
      <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-600/20 backdrop-blur-sm border border-orange-600/50">
        <span className="text-orange-400 text-sm font-semibold uppercase tracking-wider animate-pulse">
          ✦ PORTAFOLIO ✦
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
        <span className="bg-gradient-to-r from-orange-600 via-yellow-400 to-red-600 bg-clip-text text-transparent">
          Trabajos realizados
        </span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto">
        Cada tatuaje cuenta una historia única. Acá te muestro algunos de mis trabajos favoritos.
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mt-6" />
    </div>
  );
}