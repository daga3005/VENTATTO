"use client";

import { artist, socialNetworks } from "../utils/definitions";
import { ContactHeader } from "./ContactHeader";
import { ContactInfoCard } from "./ContactInfoCard";
import { SocialLinks } from "./SocialLinks";
import { InspirationalQuote } from "./InspirationalQuote";
import { LocationMap } from "./LocationMap";
import { ScheduleCard } from "./ScheduleCard";
import { WhatsAppButton } from "./WhatsAppButton";
import { BackgroundEffect } from "./BackgroundEffect";

export default function Contacto() {
  const contactInfoItems = [
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
      <BackgroundEffect />

      <div className="relative z-10 max-w-7xl mx-auto">
        <ContactHeader />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Columna Izquierda */}
          <div className="space-y-6">
            <ContactInfoCard items={contactInfoItems} />
            <SocialLinks socialNetworks={socialNetworks} />
            <InspirationalQuote 
              phrase={artist.meta.phrase}
              author={`${artist.name} ${artist.alias}`}
            />
          </div>

          {/* Columna Derecha */}
          <div className="space-y-6">
            <LocationMap 
              city={artist.address.city}
              country={artist.address.country}
              fullAddress={artist.address.fullAddress}
            />
            <ScheduleCard />
            <WhatsAppButton phoneNumber={artist.phone} />
          </div>
        </div>
      </div>
    </section>
  );
}