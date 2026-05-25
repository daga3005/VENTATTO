// hooks/useGaleriaFilter.ts
import { useState, useMemo } from 'react';
import { tattooCatalog } from '../mocks/tattoos'; 

interface GaleriaProps {
  featured?: boolean;
  limit?: number;
}

export default function useGaleriaFilter(featured?: boolean, limit?: number) {
  const [filter, setFilter] = useState("todos");
console.log('🔍 VERIFICACIÓN:');
console.log('  - tattooCatalog existe?', !!tattooCatalog);
console.log('  - Es array?', Array.isArray(tattooCatalog));
console.log('  - Cantidad:', tattooCatalog?.length);
console.log('  - Primer elemento:', tattooCatalog?.[0]?.name);
  // Filtrar trabajos destacados si es necesario
  const trabajosBase = useMemo(() => {
    // 👇 Validar que tattooCatalog existe
    if (!tattooCatalog || !Array.isArray(tattooCatalog)) {
      console.error('tattooCatalog no está disponible');
      return [];
    }

    let base = featured 
      ? tattooCatalog.filter(trabajo => trabajo.featured === true)
      : tattooCatalog;
    
    if (limit && base.length > limit) {
      base = base.slice(0, limit);
    }
    return base;
  }, [featured, limit]);

  // 👇 Obtener técnicas únicas del catálogo automáticamente
  const tecnicasUnicas = useMemo(() => {
    if (!trabajosBase.length) return [{ id: "todos", nombre: "Todos", icono: "🎨" }];
    
    const tecnicasSet = new Set(trabajosBase.map(t => t.technique));
    const tecnicasList = Array.from(tecnicasSet).map(tech => ({
      id: tech,
      nombre: tech,
      icono: getIconoPorTecnica(tech)
    }));
    
    return [{ id: "todos", nombre: "Todos", icono: "🎨" }, ...tecnicasList];
  }, [trabajosBase]);

  // Aplicar filtro por técnica
  const trabajosFiltrados = useMemo(() => {
    if (!trabajosBase.length) return [];
    
    return filter === "todos"
      ? trabajosBase
      : trabajosBase.filter(trabajo => trabajo.technique === filter);
  }, [trabajosBase, filter]);

  // Función para asignar iconos según la técnica
  function getIconoPorTecnica(tecnica: string): string {
    const iconos: Record<string, string> = {
      "Realismo": "🎭",
      "Blackwork": "⚫",
      "Lettering": "✍️",
      "Linework": "🌺"
    };
    return iconos[tecnica] || "🎨";
  }

  return {
    filter,
    setFilter,
    trabajosFiltrados,
    tecnicas: tecnicasUnicas,
    totalTrabajos: trabajosBase.length
  };
}