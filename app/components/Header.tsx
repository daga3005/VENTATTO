"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { socialNetworks } from "../utils/definitions";


export default function TattooStudioSite() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { 
      id: 1,
      name: "Inicio" ,
      href: '/'
    },
    { 
       id: 2,
      name: "Galería" ,
      href: '/galery'
    },
    { 
       id: 3,
      name: "Contacto" ,
      href: '/contacto'
    },
    { 
       id: 4,
      name: "Sobre mi" ,
      href: '/about_me'
    },
    
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (

    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-neutral-900/95 backdrop-blur-md border-b border-orange-600/30 shadow-2xl" : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter">
                <span className="text-orange-600 group-hover:text-yellow-400 transition-colors duration-300">
                  VENTATTO
                </span>
                <span className="text-white"> STUDIO</span>
              </span>
              <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">
                Custom Tattoo Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {links.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm font-semibold uppercase tracking-wider hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
            
          </nav>

          {/* CTA Button */}
          <Link href={socialNetworks[3].url}
          className="hidden md:block relative overflow-hidden px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-lg hover:shadow-orange-600/50 transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Reservar Cita</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-red-400 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-neutral-900 z-40 transition-transform duration-500 ${menuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-2xl text-gray-300 hover:text-yellow-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link href={socialNetworks[3].url}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold">
            Reservar Cita
          </Link>
        </div>
      </div>
    </header>
  );
}