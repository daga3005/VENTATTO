interface WhatsAppButtonProps {
  phoneNumber: string;
}

export function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 border border-green-500/30 text-center hover:scale-[1.02] transition-all duration-300"
    >
      <div className="flex items-center justify-center gap-3">
        <span className="text-3xl">💬</span>
        <div>
          <p className="text-white font-bold text-lg">Escríbenos por WhatsApp</p>
          <p className="text-green-300 text-sm">Respuesta inmediata</p>
        </div>
      </div>
    </a>
  );
}