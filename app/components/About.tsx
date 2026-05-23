"use client";

import { useState } from "react";
import Image from "next/image";
import { artist } from "../utils/definitions";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("bio");


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
              ✦ CONOCÉ AL ARTISTA ✦
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-orange-600 via-yellow-400 to-red-600 bg-clip-text text-transparent">
              Detrás de la tinta
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Conocé al artista detrás de cada diseño, su historia, técnica y pasión por el arte en la piel.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mt-6" />
        </div>

        {/* Grid principal - Foto + Info */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Columna Izquierda - Foto del artista */}
          <div className="relative group">
            {/* Anillo decorativo detrás de la foto */}
            <div className="absolute -inset-3 bg-gradient-to-r from-orange-600 via-yellow-400 to-red-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
            
            {/* Contenedor de la foto */}
            <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-4 border border-orange-600/30">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900">
                {/* Imagen del artista - Reemplazar con tu foto real */}
                <img
                  src="https://placehold.co/800x1000/1a1a1a/orange?text=VENTATTO"
                  alt={`${artist.alias} - Artista del tatuaje`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Badge flotante */}
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full px-4 py-2 shadow-lg">
                <span className="text-white font-bold text-sm uppercase tracking-wider">
                  {artist.meta.experience}
                </span>
              </div>
              
              {/* Badge superior */}
              <div className="absolute -top-3 -left-3 bg-black/80 backdrop-blur-sm border border-orange-600 rounded-full px-3 py-1">
                <span className="text-orange-400 text-xs font-mono">{artist.meta.role}</span>
              </div>
            </div>

            {/* Citas rápidas */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-3 text-center border border-orange-600/20">
                <div className="text-orange-400 text-xl mb-1">📍</div>
                <p className="text-white text-xs">{artist.address.fullAddress}</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-3 text-center border border-orange-600/20">
                <div className="text-orange-400 text-xl mb-1">✉️</div>
                <p className="text-white text-xs truncate">{artist.email}</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Información del artista */}
          <div className="space-y-6">
            {/* Nombre y presentación */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-orange-500 text-2xl">✦</span>
                <span className="text-orange-400 text-sm font-mono tracking-wider">EL ARTISTA</span>
                <span className="text-orange-500 text-2xl">✦</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-1">
                {artist.name}
              </h3>
              <p className="text-orange-500 text-lg font-mono">{artist.alias}</p>
            </div>

            {/* Tabs de navegación */}
            <div className="flex gap-2 border-b border-orange-600/20 pb-2">
              {[
                { id: "bio", label: "📖 Biografía" },
                { id: "philosophy", label: "🎯 Filosofía" },
                { id: "tools", label: "🛠️ Herramientas" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-orange-400 hover:bg-orange-600/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Contenido dinámico por tabs */}
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-orange-600/20 min-h-[250px]">
              {activeTab === "bio" && (
                <div className="space-y-4 animate-fadeIn">
                  <p className="text-gray-300 leading-relaxed">
                    {artist.meta.bio}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {artist.achievements.map((item, idx) => (
                      <div key={idx} className="text-center bg-orange-600/10 rounded-lg p-3">
                        <div className="text-2xl font-bold text-yellow-400">{item.number}</div>
                        <div className="text-gray-400 text-xs">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "philosophy" && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="text-4xl text-center mb-3">🎨</div>
                  <p className="text-gray-300 leading-relaxed italic text-center">
                    {artist.meta.philosophy}
                  </p>
                  <div className="mt-4 pt-4 border-t border-orange-600/20">
                    <h4 className="text-orange-400 font-semibold mb-3 text-center">Especialidades:</h4>
                    <div className="grid gap-3">
                      {artist.specialties.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-orange-600/5 rounded-lg p-3">
                          <span className="text-2xl">{spec.icon}</span>
                          <div>
                            <p className="text-white font-semibold">{spec.name}</p>
                            <p className="text-gray-400 text-sm">{spec.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "tools" && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="text-4xl text-center mb-3">⚙️</div>
                  <p className="text-gray-300 text-center mb-4">
                    Calidad y precisión en cada sesión
                  </p>
                  <div className="grid gap-3">
                    {artist.herramientas.map((tool, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-orange-600/5 rounded-lg p-3">
                        <span className="text-green-400">✓</span>
                        <span className="text-gray-300 text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-orange-600/10 rounded-lg text-center">
                    <p className="text-orange-400 text-sm font-mono">
                      🎨 Paleta de trabajo: Black & White · Set de Grises
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 group relative py-3 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold uppercase tracking-wider hover:shadow-xl hover:shadow-orange-600/50 transition-all duration-300 hover:scale-105">
                <span className="relative z-10">📅 Agendar cita</span>
              </button>
              <button className="flex-1 py-3 rounded-full border-2 border-orange-600 text-orange-400 font-bold uppercase tracking-wider hover:bg-orange-600 hover:text-white transition-all duration-300">
                📸 Ver portafolio
              </button>
            </div>

            {/* Frase personal */}
            <div className="text-center pt-4">
              <p className="text-gray-500 text-sm font-mono">
                ✦ {artist.alias} · {artist.name.split(' ')[0]} {artist.name.split(' ')[1]} ✦
              </p>
            </div>
          </div>
        </div>

        {/* Sección adicional - Estadísticas o testimonios */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-5 text-center border border-orange-600/20 group hover:border-orange-500 transition-all duration-300">
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">🎯</div>
            <h4 className="text-orange-400 font-bold mb-1">Misión</h4>
            <p className="text-gray-400 text-sm">Crear arte significativo que acompañe a mis clientes de por vida</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-5 text-center border border-orange-600/20 group hover:border-orange-500 transition-all duration-300">
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">👁️</div>
            <h4 className="text-orange-400 font-bold mb-1">Visión</h4>
            <p className="text-gray-400 text-sm">Ser referente en técnicas de puntillismo y lettering en Cuba</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-5 text-center border border-orange-600/20 group hover:border-orange-500 transition-all duration-300">
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">💎</div>
            <h4 className="text-orange-400 font-bold mb-1">Valor</h4>
            <p className="text-gray-400 text-sm">Personalización, calidad y conexión con cada cliente</p>
          </div>
        </div>
      </div>

    
    </section>
  );
}