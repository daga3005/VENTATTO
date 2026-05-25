'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapComponentProps {
  fullAddress: string;
}

// Coordenadas predefinidas (actualiza con las coordenadas reales)
const DEFAULT_COORDINATES: [number, number] = [22.146942, -80.443385]; // Cienfuegos, Cuba

export default function MapComponent({ fullAddress }: MapComponentProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Configurar iconos de Leaflet
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  if (!isClient) {
    return (
      <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center border border-orange-600/30">
        <div className="text-center">
          <div className="text-5xl mb-3 animate-pulse">🗺️</div>
          <p className="text-gray-400">Cargando mapa...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video rounded-xl overflow-hidden border border-orange-600/30 z-0">
      <MapContainer
        center={DEFAULT_COORDINATES}
        zoom={15}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={DEFAULT_COORDINATES}>
          <Popup>
            <div className="text-center">
              <strong>Ven Tattoo Studio</strong>
              <br />
              {fullAddress}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}