import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Handshake, Star } from "lucide-react"
import Footer from "@/components/footer"

export default function SponsorsPage() {
  const sponsors = [
    {
      id: 1,
      nombre: "SportTech Solutions",
      categoria: "Sponsor Principal",
      descripcion: "Tecnología deportiva y equipamiento profesional",
      nivel: "Oro",
    },
    {
      id: 2,
      nombre: "Nutrición Pro",
      categoria: "Sponsor Oficial",
      descripcion: "Suplementos y nutrición deportiva",
      nivel: "Plata",
    },
    {
      id: 3,
      nombre: "Clínica Deportiva Elite",
      categoria: "Sponsor Médico",
      descripcion: "Atención médica especializada",
      nivel: "Oro",
    },
    {
      id: 4,
      nombre: "Transportes Rápidos",
      categoria: "Sponsor Logístico",
      descripcion: "Transporte para competencias",
      nivel: "Bronce",
    },
    {
      id: 5,
      nombre: "Banco Regional",
      categoria: "Sponsor Financiero",
      descripcion: "Apoyo financiero y servicios bancarios",
      nivel: "Plata",
    },
    {
      id: 6,
      nombre: "Restaurante La Cancha",
      categoria: "Sponsor Gastronómico",
      descripcion: "Alimentación para eventos",
      nivel: "Bronce",
    },
  ]

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case "Oro":
        return "bg-yellow-500"
      case "Plata":
        return "bg-gray-400"
      case "Bronce":
        return "bg-orange-600"
      default:
        return "bg-black"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button
              variant="outline"
              className="mb-6 text-white border-white hover:bg-white hover:text-black bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Inicio
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Nuestros Sponsors</h1>
          <p className="text-xl text-gray-300">Empresas que confían en nuestro proyecto deportivo</p>
        </div>
      </section>

      {/* Sponsors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <Card key={sponsor.id} className="hover:shadow-lg transition-shadow border-2 hover:border-black">
                <div className="aspect-video bg-gray-100 relative overflow-hidden rounded-t-lg">
                  <Image
                    src={`/placeholder.svg?height=200&width=300`}
                    alt={sponsor.nombre}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                  <div
                    className={`absolute top-2 right-2 ${getNivelColor(sponsor.nivel)} text-white px-2 py-1 rounded text-xs font-bold`}
                  >
                    {sponsor.nivel}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{sponsor.nombre}</CardTitle>
                  <CardDescription className="font-medium text-black">{sponsor.categoria}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{sponsor.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Niveles de Sponsorship */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Niveles de Sponsorship</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-2 border-yellow-500">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Sponsor Oro</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Logo en camisetas oficiales</li>
                  <li>• Presencia en todos los eventos</li>
                  <li>• Menciones en redes sociales</li>
                  <li>• Espacios publicitarios premium</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-400">
              <CardHeader>
                <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Sponsor Plata</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Logo en equipamiento</li>
                  <li>• Presencia en eventos principales</li>
                  <li>• Menciones regulares</li>
                  <li>• Espacios publicitarios</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-orange-600">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Sponsor Bronce</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Logo en materiales promocionales</li>
                  <li>• Presencia en eventos locales</li>
                  <li>• Menciones ocasionales</li>
                  <li>• Reconocimiento oficial</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué ser nuestro sponsor?</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Handshake className="w-6 h-6 mr-2" />
                Beneficios para tu empresa
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Visibilidad en eventos deportivos</li>
                <li>• Asociación con valores deportivos positivos</li>
                <li>• Acceso a una comunidad deportiva activa</li>
                <li>• Oportunidades de networking</li>
                <li>• Responsabilidad social empresarial</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Nuestro alcance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Seguidores en redes sociales</span>
                  <span className="font-bold">15,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Asistentes a eventos anuales</span>
                  <span className="font-bold">5,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Cobertura mediática</span>
                  <span className="font-bold">Regional</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Años de trayectoria</span>
                  <span className="font-bold">35+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Interesado en ser nuestro sponsor?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a las empresas que ya confían en nuestro proyecto deportivo
          </p>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black bg-transparent"
          >
            Contactar para Sponsorship
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
