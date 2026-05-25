import Link from "next/link";
import { socialNetworks } from "../utils/definitions";

export default function CTAContacto() {

    return (
     <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-2xl p-8 border border-orange-600/20">
                <h3 className="text-2xl font-bold text-white mb-2">
                    ¿Querés ser parte de esta galería?
                </h3>
                <p className="text-gray-300 mb-4">
                    Tu idea puede ser la próxima obra de arte en esta colección.
                </p>
                <Link href={socialNetworks[3].url}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold uppercase tracking-wider hover:shadow-xl hover:shadow-orange-600/50 transition-all duration-300 hover:scale-105">
                    Reservar mi cita →
                </Link>
            </div>
        </div>
        
      
    )
}