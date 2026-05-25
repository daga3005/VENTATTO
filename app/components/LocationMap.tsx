'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Crear un componente wrapper para el mapa
const MapComponent = dynamic(
  () => import('./MapComponent'),
  { 
    ssr: false,
    loading: () => (
      <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center border border-orange-600/30">
        <div className="text-center">
          <div className="text-5xl mb-3 animate-pulse">🗺️</div>
          <p className="text-gray-400">Cargando mapa...</p>
        </div>
      </div>
    )
  }
);

interface LocationMapProps {
  city: string;
  country: string;
  fullAddress: string;
}

export function LocationMap({ city, country, fullAddress }: LocationMapProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-600/20">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 justify-center">
          <span>📍</span> Visitanos en el estudio
        </h3>
        <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center border border-orange-600/30">
          <div className="text-center">
            <div className="text-5xl mb-3">🗺️</div>
            <p className="text-gray-400">Cargando mapa...</p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-300">{city}, {country}</p>
          <p className="text-gray-400 text-sm mt-1">{fullAddress}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-600/20">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 justify-center">
        <span>📍</span> Visitanos en el estudio
      </h3>
      <MapComponent fullAddress={fullAddress} />
      <div className="mt-4 text-center">
        <p className="text-gray-300">{city}, {country}</p>
        <p className="text-gray-400 text-sm mt-1">{fullAddress}</p>
        <p className="text-gray-500 text-sm mt-2">📅 Cita previa necesaria</p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-2 rounded-full border border-orange-600 text-orange-400 text-sm hover:bg-orange-600 hover:text-white transition-all duration-300"
        >
          Abrir en Google Maps →
        </a>
      </div>
    </div>
  );
}