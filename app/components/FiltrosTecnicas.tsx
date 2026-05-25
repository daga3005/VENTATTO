// components/FiltrosTecnicas.tsx
interface FiltrosTecnicasProps {
  filter: string;
  setFilter: (filter: string) => void;
  tecnicas: Array<{ id: string; nombre: string; icono: string }>;
}

export function FiltrosTecnicas({ filter, setFilter, tecnicas }: FiltrosTecnicasProps) {
  return (
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
  );
}