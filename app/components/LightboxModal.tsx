import Image from "next/image";
import { Tattoo } from "../types";

interface LightboxModalProps {
  tattoo: Tattoo;
  zoom: boolean;
  onClose: () => void;
  onToggleZoom: () => void;
}

export function LightboxModal({ tattoo, zoom, onClose, onToggleZoom }: LightboxModalProps) {
  return (
    <div
      className={`fixed inset-0 z-[200] bg-black transition-all duration-300 ${
        zoom ? 'bg-black' : 'bg-black/95 backdrop-blur-md'
      } flex items-center justify-center p-4 animate-fadeIn`}
      onClick={onClose}
    >
      <div className="relative w-full h-full max-w-7xl mx-auto" onClick={(e) => e.stopPropagation()}>
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <button
            onClick={onToggleZoom}
            className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-sm text-white hover:bg-orange-600 transition-all duration-300 flex items-center justify-center text-xl"
          >
            {zoom ? '🔍-' : '🔍+'}
          </button>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-sm text-white hover:bg-orange-600 transition-all duration-300 flex items-center justify-center text-xl font-bold"
          >
            ✕
          </button>
        </div>

        <div 
          className={`w-full h-full flex items-center justify-center transition-all duration-500 ${
            zoom ? 'cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={onToggleZoom}
        >
          <Image
          width={500} height={500}
            src={tattoo.image}
            alt={tattoo.name}
            className={`transition-all duration-500 ${
              zoom 
                ? 'max-w-none w-full h-full object-contain scale-150 cursor-zoom-out' 
                : 'max-w-full max-h-[90vh] object-contain cursor-zoom-in'
            }`}
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">{tattoo.name}</h3>
            <div className="flex flex-wrap gap-4 text-sm mb-3">
              <span className="text-orange-400">🎨 {tattoo.technique}</span>
              <span className="text-gray-300">✨ {tattoo.client}</span>
              <span className="text-gray-300">📅 {tattoo.date}</span>
            </div>
            <p className="text-gray-300">{tattoo.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}