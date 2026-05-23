
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { socialNetworks } from "../utils/definitions";

export default function Galeria() {
  const [filter, setFilter] = useState("todos");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Datos de los trabajos - ¡Reemplaza con tus imágenes reales!
  const trabajos = [
    {
      id: 1,
      titulo: "León Realista",
      tecnica: "Realismo",
      descripcion: "León en blanco y negro con detalles hiperrealistas",
      cliente: "Carlos M.",
      fecha: "Enero 2024",
      imagen: "https://placehold.co/600x600/1a1a1a/orange?text=LEON",
    },
    {
      id: 2,
      titulo: "Letra Gótica",
      tecnica: "Lettering",
      descripcion: "Lettering personalizado estilo gótico",
      cliente: "Laura G.",
      fecha: "Febrero 2024",
      imagen: "https://placehold.co/600x600/1a1a1a/orange?text=LETTERING",
    },
    {
      id: 3,
      titulo: "Mandalas Puntillismo",
      tecnica: "Puntillismo",
      descripcion: "Mandalas realizadas con técnica de puntillismo de arrastre",
      cliente: "Diego R.",
      fecha: "Marzo 2024",
      imagen: "https://placehold.co/600x600/1a1a1a/orange?text=MANDALA",
    },
    {
      id: 4,
      titulo: "Retrato Realista",
      tecnica: "Realismo",
      descripcion: "Retrato hiperrealista en escala de grises",
      cliente: "Sofia P.",
      fecha: "Abril 2024",
      imagen: "https://placehold.co/600x600/1a1a1a/orange?text=RETRATO",
    },
    {
      id: 5,
      titulo: "Frase Personal",
      tecnica: "Lettering",
      descripcion: "Frase significativa con lettering cursivo",
      cliente: "Julián A.",
      fecha: "Mayo 2024",
      imagen: "https://placehold.co/600x600/1a1a1a/orange?text=FRASE",
    },
    {
      id: 6,
      titulo: "Geométrico Puntos",
      tecnica: "Puntillismo",
      descripcion: "Diseño geométrico con técnica de puntos",
      cliente: "Mariana L.",
      fecha: "Junio 2024",
      imagen: "https://placehold.co/600x600/1a1a1a/orange?text=GEOMETRICO",
    },
    {
      id: 7,
      titulo: "Animal Realista",
      tecnica: "Realismo",
      descripcion: "Lobo aullando con detalles realistas",
      cliente: "Facundo S.",
      fecha: "Julio 2024",
      imagen: "https://placehold.co/600x600/1a1a1a/orange?text=LOBO",
    },
    {
      id: 8,
      titulo: "Lettering Urbano",
      tecnica: "Lettering",
      descripcion: "Lettering estilo graffiti personalizado",
      cliente: "Tomás G.",
      fecha: "Agosto 2024",
      imagen: "https://placehold.co/600x600/1a1a1a/orange?text=URBANO",
    },
    {
      id: 9,
      titulo: "Puntillismo Floral",
      tecnica: "Puntillismo",
      descripcion: "Rosa realizada con puntillismo de arrastre",
      cliente: "Valentina M.",
      fecha: "Septiembre 2024",
      imagen: "https://placehold.co/600x600/1a1a1a/orange?text=FLORAL",
    },
  ];

  const tecnicas = [
    { id: "todos", nombre: "Todos", icono: "🎨" },
    { id: "Realismo", nombre: "Realismo", icono: "👁️" },
    { id: "Lettering", nombre: "Lettering", icono: "✍️" },
    { id: "Puntillismo", nombre: "Puntillismo", icono: "✨" },
  ];

  const trabajosFiltrados = filter === "todos" 
    ? trabajos 
    : trabajos.filter(trabajo => trabajo.tecnica === filter);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const trabajoSeleccionado = trabajos.find(t => t.id === selectedImage);

  return (
    <section className="relative min-h-screen py-24 px-4 overflow-hidden">
      {/* Background con efecto de fuego */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-red-950/30 to-orange-900/20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600 rounded-full blur-[100px] opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-500 rounded-full blur-[120px] opacity-10 animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header de sección */}
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

        {/* Filtros por técnica */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tecnicas.map((tec) => (
            <button
              key={tec.id}
              onClick={() => setFilter(tec.id)}
              className={`px-5 py-2 rounded-full font-mono text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                filter === tec.id
                  ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-600/50"
                  : "bg-black/50 border border-orange-600/30 text-gray-300 hover:border-orange-500 hover:text-orange-400"
              }`}
            >
              <span>{tec.icono}</span>
              {tec.nombre}
            </button>
          ))}
        </div>

        {/* Contador de resultados */}
        <div className="text-center mb-6">
          <p className="text-gray-400 text-sm font-mono">
            Mostrando {trabajosFiltrados.length} de {trabajos.length} trabajos
          </p>
        </div>

        {/* Grid de galería */}
        {trabajosFiltrados.length === 0 ? (
          <div className="text-center py-20 bg-black/30 rounded-2xl">
            <p className="text-gray-400 text-lg">No hay trabajos en esta categoría aún.</p>
            <p className="text-gray-500 text-sm mt-2">Próximamente más contenido.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trabajosFiltrados.map((trabajo, index) => (
              <div
                key={trabajo.id}
                className="group relative bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-orange-600/20 hover:border-orange-500 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openLightbox(trabajo.id)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Imagen */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={trabajo.imagen}
                    alt={trabajo.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay con información */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                  <h3 className="text-white font-bold text-xl mb-1">{trabajo.titulo}</h3>
                  <p className="text-orange-400 text-sm font-mono mb-2">{trabajo.tecnica}</p>
                  <p className="text-gray-300 text-sm">{trabajo.descripcion}</p>
                  <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                    <span>✨ {trabajo.cliente}</span>
                    <span>📅 {trabajo.fecha}</span>
                  </div>
                </div>

                {/* Badge de técnica */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-full text-orange-400 text-xs font-mono">
                  {trabajo.tecnica}
                </div>

                {/* Efecto de glow en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/10 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        )}

        {/* CTA de contacto */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-2xl p-8 border border-orange-600/20">
            <h3 className="text-2xl font-bold text-white mb-2">
              ¿Querés ser parte de esta galería?
            </h3>
            <p className="text-gray-300 mb-4">
              Tu idea puede ser la próxima obra de arte en esta colección.
            </p>
            <Link href={socialNetworks[3].url}
             className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold uppercase tracking-wider hover:shadow-xl hover:shadow-orange-600/50 transition-all duration-300 hover:scale-105">
              Reservar mi cita →
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal para ver imagen ampliada */}
      {lightboxOpen && trabajoSeleccionado && (
        <div
          className="fixed inset-0 z-[200] bg-red-500 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-orange-600/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-red-500 backdrop-blur-sm text-white hover:bg-orange-600 transition-all duration-300 flex items-center justify-center"
            >
              ✕
            </button>

            {/* Imagen */}
            <div className="aspect-[4/3] md:aspect-[16/9]">
              <img
                src={trabajoSeleccionado.imagen}
                alt={trabajoSeleccionado.titulo}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Información del trabajo */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {trabajoSeleccionado.titulo}
                  </h3>
                  <span className="inline-block mt-2 px-3 py-1 bg-orange-600/20 rounded-full text-orange-400 text-sm font-mono">
                    {trabajoSeleccionado.tecnica}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">✨ Cliente: {trabajoSeleccionado.cliente}</p>
                  <p className="text-gray-500 text-xs">📅 {trabajoSeleccionado.fecha}</p>
                </div>
              </div>
              <p className="text-gray-300">{trabajoSeleccionado.descripcion}</p>
              <div className="mt-6 flex gap-3">
                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm font-bold uppercase tracking-wider hover:shadow-lg transition-all">
                  Agendar cita
                </button>
                <button
                  onClick={closeLightbox}
                  className="px-6 py-2 rounded-full border border-orange-600 text-orange-400 text-sm font-bold uppercase tracking-wider hover:bg-orange-600 hover:text-white transition-all"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}