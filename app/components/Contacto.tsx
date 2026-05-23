
"use client";

import { useState } from "react";
import Link from "next/link";
import { artist, socialNetworks } from "../utils/definitions";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log("Datos enviados:", formData);
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Ubicación",
      detail: artist.address.fullAddress,

    },
    {
      icon: "📞",
      title: "Teléfono",
      detail: artist.phone,
      subdetail: "Lun a Sab 11am - 8pm",
    },
    {
      icon: "✉️",
      title: "Email",
      detail: artist.email,
      subdetail: "Respuesta en 24hs",
    },
    {
      icon: "⚡",
      title: "Redes Sociales",
      detail: "@ventatto",
      subdetail: "Instagram · Facebook · TikTok",
    },
  ];



  return (
    <section className="relative min-h-screen py-24 px-4 overflow-hidden">
      {/* Background con efecto de fuego */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-red-950/30 to-orange-900/20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600 rounded-full blur-[100px] opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header de sección */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-600/20 backdrop-blur-sm border border-orange-600/50">
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-wider animate-pulse">
              ✦ CONTACTO ✦
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-orange-600 via-yellow-400 to-red-600 bg-clip-text text-transparent">
              Hablemos
            </span>
            <br />
            <span className="text-white">de tu próximo arte</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            ¿Tenés una idea en mente? Completá el formulario y te responderemos a la brevedad.
            Consultas, presupuestos o simplemente charlar sobre tu próximo tattoo.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mt-6" />
        </div>

        {/* Grid de contacto - 2 columnas */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Columna Izquierda - Información de contacto */}
          <div className="space-y-6">
            {/* Tarjeta de información principal */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-600/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-orange-500">✦</span> Información de contacto
                <span className="text-orange-500">✦</span>
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                        {info.title}
                      </h4>
                      <p className="text-white font-medium">{info.detail}</p>
                      <p className="text-gray-400 text-sm">{info.subdetail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-600/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🌐</span> Seguinos en redes
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialNetworks && socialNetworks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/10 border border-orange-600/30 text-gray-300 ${social.color} transition-all duration-300 hover:scale-105 hover:border-orange-500`}
                  >
                    <span>{social.icon}</span>
                    <span className="text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Frase inspiracional */}
            <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-2xl p-6 border border-orange-600/20 text-center">
              <p className="text-orange-400 italic text-lg">
                {artist.meta.phrase}
              </p>
              <p className="text-gray-500 text-sm mt-3">— {artist.name} {artist.alias}</p>
            </div>
          </div>

          {/* Columna Derecha - Formulario de contacto */}
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-orange-600/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              ✍️ Enviame tu consulta
            </h3>

            {enviado ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-400">Gracias por contactarnos. Te responderemos a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-300 text-sm font-mono mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-orange-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-mono mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-orange-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-mono mb-2">
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-orange-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    placeholder="+54 11 1234-5678"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-mono mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-orange-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none"
                    placeholder="Contanos tu idea, consulta o presupuesto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group relative py-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg uppercase tracking-wider hover:shadow-xl hover:shadow-orange-600/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <span className="relative z-10">Enviar mensaje ✦</span>
                </button>

                <p className="text-gray-500 text-xs text-center mt-4">
                  * Campos obligatorios. Te responderemos en menos de 24 horas.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Mapa / Ubicación extra */}
        <div className="mt-16">
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-600/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 justify-center">
              <span>📍</span> Encontranos
            </h3>
            <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl flex items-center justify-center border border-orange-600/30">
              <div className="text-center">
                <div className="text-5xl mb-3">🗺️</div>
                <p className="text-gray-300">Palermo Soho, Buenos Aires</p>
                <p className="text-gray-500 text-sm mt-2">Cita previa necesaria</p>
                <button className="mt-4 px-6 py-2 rounded-full border border-orange-600 text-orange-400 text-sm hover:bg-orange-600 hover:text-white transition-all duration-300">
                  Cómo llegar →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}