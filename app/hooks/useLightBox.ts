
import { useState, useEffect } from 'react';
import {tattooCatalog} from '../mocks/tattoos'

export default function useLightbox() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(false);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    setZoom(false);
  };

  const toggleZoom = () => setZoom(prev => !prev);

  // Efecto para bloquear scroll
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  // Efecto para tecla ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxOpen) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [lightboxOpen]);

  const trabajoSeleccionado = selectedImage 
    ? tattooCatalog.find(t => t.id === selectedImage)
    : null;

  return {
    lightboxOpen,
    zoom,
    trabajoSeleccionado,
    openLightbox,
    closeLightbox,
    toggleZoom
  };
}