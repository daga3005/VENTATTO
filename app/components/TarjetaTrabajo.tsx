import Image from "next/image";
import { Tattoo } from "../types";

interface TarjetaTrabajoProps {
  tattoo: Tattoo;
  index: number;
  onOpen: (id: number) => void;
}

export function TarjetaTrabajo({ tattoo, index, onOpen }: TarjetaTrabajoProps) {
 
  return (
    <div
      className="group relative bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-orange-600/20 hover:border-orange-500 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer"
      onClick={() => onOpen(tattoo.id)}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="aspect-square overflow-hidden">
        <Image
          width={471}
          height={471}
          src={tattoo.image}
          alt={tattoo.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
        <h3 className="text-white font-bold text-xl mb-1">{tattoo.name}</h3>
        <p className="text-orange-400 text-sm font-mono mb-2">{tattoo.technique}</p>
        <p className="text-gray-300 text-sm">{tattoo.description}</p>
        <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
          <span>✨ {tattoo.client}</span>
          <span>📅 {tattoo.date}</span>
        </div>
      </div>

      <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-full text-orange-400 text-xs font-mono">
        {tattoo.technique}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/10 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}