import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, User, Ruler, Calendar } from "lucide-react"
import Footer from "@/components/footer"

export default function EquipoPage() {
  const jugadores = [
    {
      id: 1,
      nombre: "Carlos",
      apellido: "Rodríguez",
      edad: 28,
      posicion: "Opuesto",
      altura: "1.95m",
      numero: 4,
      titular: true,
      posicionCancha: { x: 85, y: 25 },
    },
    {
      id: 2,
      nombre: "Miguel",
      apellido: "González",
      edad: 26,
      posicion: "Central",
      altura: "2.02m",
      numero: 12,
      titular: true,
      posicionCancha: { x: 50, y: 25 },
    },
    {
      id: 3,
      nombre: "Diego",
      apellido: "Martínez",
      edad: 24,
      posicion: "Armador",
      altura: "1.85m",
      numero: 7,
      titular: true,
      posicionCancha: { x: 15, y: 25 },
    },
    {
      id: 4,
      nombre: "Sebastián",
      apellido: "López",
      edad: 27,
      posicion: "Punta",
      altura: "1.92m",
      numero: 11,
      titular: true,
      posicionCancha: { x: 15, y: 75 },
    },
    {
      id: 5,
      nombre: "Matías",
      apellido: "Fernández",
      edad: 25,
      posicion: "Central",
      altura: "2.00m",
      numero: 8,
      titular: true,
      posicionCancha: { x: 50, y: 75 },
    },
    {
      id: 6,
      nombre: "Joaquín",
      apellido: "Silva",
      edad: 23,
      posicion: "Líbero",
      altura: "1.78m",
      numero: 3,
      titular: true,
      posicionCancha: { x: 85, y: 75 },
    },
    {
      id: 7,
      nombre: "Franco",
      apellido: "Morales",
      edad: 29,
      posicion: "Punta",
      altura: "1.88m",
      numero: 9,
      titular: false,
    },
    {
      id: 8,
      nombre: "Lucas",
      apellido: "Herrera",
      edad: 22,
      posicion: "Central",
      altura: "1.98m",
      numero: 15,
      titular: false,
    },
    {
      id: 9,
      nombre: "Nicolás",
      apellido: "Castro",
      edad: 26,
      posicion: "Armador",
      altura: "1.83m",
      numero: 2,
      titular: false,
    },
    {
      id: 10,
      nombre: "Tomás",
      apellido: "Ruiz",
      edad: 24,
      posicion: "Opuesto",
      altura: "1.93m",
      numero: 6,
      titular: false,
    },
  ]

  const titulares = jugadores.filter((jugador) => jugador.titular)
  const suplentes = jugadores.filter((jugador) => !jugador.titular)

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
          <h1 className="text-4xl font-bold mb-4">Nuestro Plantel</h1>
          <p className="text-xl text-gray-300">Conoce a los jugadores que representan nuestros colores</p>
        </div>
      </section>

      {/* Cancha con Titulares */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Formación Titular</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-orange-100 border-4 border-orange-600 rounded-lg p-8 aspect-[2/1]">
              {/* Red */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-black transform -translate-x-1/2"></div>

              {/* Líneas de la cancha */}
              <div className="absolute inset-4 border-2 border-orange-600 rounded"></div>
              <div className="absolute left-1/4 top-4 bottom-4 w-0.5 bg-orange-600"></div>
              <div className="absolute right-1/4 top-4 bottom-4 w-0.5 bg-orange-600"></div>

              {/* Jugadores Titulares */}
              {titulares.map((jugador) => (
                <div
                  key={jugador.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{
                    left: `${jugador.posicionCancha!.x}%`,
                    top: `${jugador.posicionCancha!.y}%`,
                  }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white shadow-lg group-hover:scale-110 transition-transform">
                      {jugador.numero}
                    </div>
                    <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                      <div className="font-bold">
                        {jugador.nombre} {jugador.apellido}
                      </div>
                      <div>
                        {jugador.posicion} - {jugador.altura}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Etiquetas de posición */}
              <div className="absolute bottom-2 left-2 text-xs text-gray-600">Zona de Ataque</div>
              <div className="absolute top-2 right-2 text-xs text-gray-600">Zona de Defensa</div>
            </div>
          </div>
        </div>
      </section>

      {/* Plantel Completo */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Plantel Completo</h2>

          {/* Jugadores Titulares */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Badge className="mr-3 bg-black">TITULARES</Badge>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {titulares.map((jugador) => (
                <Card key={jugador.id} className="hover:shadow-lg transition-shadow border-2 border-black">
                  <div className="relative">
                    <div className="aspect-square bg-gray-100 relative overflow-hidden rounded-t-lg">
                      <Image
                        src={`/placeholder.svg?height=300&width=300`}
                        alt={`${jugador.nombre} ${jugador.apellido}`}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-2 right-2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {jugador.numero}
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {jugador.nombre} {jugador.apellido}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {jugador.edad} años
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <User className="w-4 h-4 mr-2" />
                        {jugador.posicion}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Ruler className="w-4 h-4 mr-2" />
                        {jugador.altura}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Jugadores Suplentes */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Badge variant="outline" className="mr-3 border-black text-black">
                SUPLENTES
              </Badge>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {suplentes.map((jugador) => (
                <Card key={jugador.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="aspect-square bg-gray-100 relative overflow-hidden rounded-t-lg">
                      <Image
                        src={`/placeholder.svg?height=250&width=250`}
                        alt={`${jugador.nombre} ${jugador.apellido}`}
                        width={250}
                        height={250}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-2 right-2 bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {jugador.numero}
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      {jugador.nombre} {jugador.apellido}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-3 h-3 mr-1" />
                        {jugador.edad} años
                      </div>
                      <div className="flex items-center text-gray-600">
                        <User className="w-3 h-3 mr-1" />
                        {jugador.posicion}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Ruler className="w-3 h-3 mr-1" />
                        {jugador.altura}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staff Técnico */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Staff Técnico</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-100 relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Entrenador Principal"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>Roberto Sánchez</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Entrenador Principal</p>
                <p className="text-sm text-gray-500 mt-2">15 años de experiencia</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-100 relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Asistente Técnico"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>Ana García</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Asistente Técnico</p>
                <p className="text-sm text-gray-500 mt-2">8 años de experiencia</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-100 relative overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Preparador Físico"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle>Luis Mendoza</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Preparador Físico</p>
                <p className="text-sm text-gray-500 mt-2">10 años de experiencia</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
