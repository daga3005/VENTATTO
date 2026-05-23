import Link from "next/link";

export default function Footer(){

    return(
         <footer className="bg-black py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex flex-col mb-4">
                <span className="text-2xl font-black">
                  <span className="text-orange-600">VENTATTO</span>
                  <span className="text-white"> STUDIO</span>
                </span>
                <span className="text-gray-500 text-xs tracking-wider mt-1">Custom Tattoo Studio</span>
              </div>
              <p className="text-gray-400 text-sm">Arte que quema bajo tu piel desde 2024</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-orange-600 transition">Inicio</Link></li>
                <li><Link href="/galery" className="hover:text-orange-600 transition">Portafolio</Link></li>
                <li><Link href="/contacto" className="hover:text-orange-600 transition">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📍 Cienfuegos, Cuba</li>
                <li>📞 +53 63677204</li>
                <li>✉️ instagram.com/sebastianvg0</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Horario</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Lun - Vie: 11am - 8pm</li>
                <li>Sábado: 10am - 6pm</li>
                <li>Domingo: Cerrado</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © 2026 Ventatoo Tattoo Studio. Todos los derechos reservados.
          </div>
        </div>
      </footer>

    )
}