import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span>+54 11 1234-5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <span>info@clubvoleibolelite.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Av. Deportiva 123, Buenos Aires</span>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horarios de Entrenamiento</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <strong>Lunes a Viernes:</strong> 16:00 - 22:00
              </p>
              <p>
                <strong>Sábados:</strong> 09:00 - 18:00
              </p>
              <p>
                <strong>Domingos:</strong> 10:00 - 16:00
              </p>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                © 2024 Club Social y Deportivo La Calera. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
