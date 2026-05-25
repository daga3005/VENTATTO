"use client";

import  useGaleriaFilter  from "../hooks/useGaleriaFilter";
import  useLightbox  from "../hooks/useLightBox";
import { GaleriaHeader } from "./GaleriaHeader";
import { FiltrosTecnicas } from "./FiltrosTecnicas";
import { TarjetaTrabajo } from "./TarjetaTrabajo";
import { LightboxModal } from "./LightboxModal";
import CTAContacto from "./CTAContacto"



interface GaleriaProps {
  featured?: boolean;
  limit?: number;
}

export default function Galeria({ featured, limit }: GaleriaProps) {

  const { filter, setFilter, trabajosFiltrados, tecnicas, totalTrabajos } = 
    useGaleriaFilter(featured, limit);
  
  const { lightboxOpen, zoom, trabajoSeleccionado, openLightbox, closeLightbox, toggleZoom } = 
    useLightbox();

  return (
    <section className="relative min-h-screen py-24 px-4 overflow-hidden">
      {/* Background decorativo */}
      <BackgroundEffects />

      <div className="relative z-10 max-w-7xl mx-auto">
        <GaleriaHeader />
        <FiltrosTecnicas filter={filter} setFilter={setFilter} tecnicas={tecnicas} />
        
        <div className="text-center mb-6">
          <p className="text-gray-400 text-sm font-mono">
            Mostrando {trabajosFiltrados.length} de {totalTrabajos} trabajos
          </p>
        </div>

        {trabajosFiltrados.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trabajosFiltrados.map((tattoo, index) => (
              <TarjetaTrabajo
                key={tattoo.id}
                tattoo={tattoo}
                index={index}
                onOpen={openLightbox}
              />
            ))}
          </div>
        )}

        <CTAContacto />
      </div>

      {lightboxOpen && trabajoSeleccionado && (
        <LightboxModal
          tattoo={trabajoSeleccionado}
          zoom={zoom}
          onClose={closeLightbox}
          onToggleZoom={toggleZoom}
        />
      )}

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from { 
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to { 
            opacity: 1;
            backdrop-filter: blur(12px);
          }
        }
      `}</style>
    </section>
  );
}

// Componentes auxiliares
function BackgroundEffects() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-red-950/30 to-orange-900/20">
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600 rounded-full blur-[100px] opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-500 rounded-full blur-[120px] opacity-10 animate-pulse delay-2000" />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-20 bg-black/30 rounded-2xl">
      <p className="text-gray-400 text-lg">No hay trabajos en esta categoría aún.</p>
      <p className="text-gray-500 text-sm mt-2">Próximamente más contenido.</p>
    </div>
  );
}