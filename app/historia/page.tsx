import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Trophy, Users, Calendar } from "lucide-react"
import Footer from "@/components/footer"

export default function HistoriaPage() {
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
          <h1 className="text-4xl font-bold mb-4">Nuestra Historia</h1>
          <p className="text-xl text-gray-300">Más de tres décadas construyendo una tradición deportiva</p>
        </div>
      </section>

      {/* Camino de la Historia */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Línea del camino */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-black via-gray-600 to-gray-300 h-full"></div>

              <div className="space-y-16">
                {/* 1985 - Los Inicios */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    <Card className="border-2 border-black bg-white shadow-lg">
                      <CardHeader>
                        <div className="flex items-center justify-end gap-2">
                          <CardTitle className="text-xl">1985 - Los Inicios</CardTitle>
                          <Calendar className="w-5 h-5" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Fundación del club por un grupo de entusiastas del voleibol. Comenzamos con apenas 12
                          jugadores y un sueño: crear el mejor club de voleibol de la región.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* 1992 - Primer Campeonato */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1 pl-8">
                    <Card className="border-2 border-yellow-500 bg-white shadow-lg">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-yellow-500" />
                          <CardTitle className="text-xl">1992 - Primer Campeonato</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Conquistamos nuestro primer título regional, marcando el inicio de una era dorada. Este
                          triunfo consolidó nuestra filosofía de trabajo en equipo y dedicación.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* 2000 - Expansión */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    <Card className="border-2 border-blue-500 bg-white shadow-lg">
                      <CardHeader>
                        <div className="flex items-center justify-end gap-2">
                          <CardTitle className="text-xl">2000 - Expansión</CardTitle>
                          <Users className="w-5 h-5 text-blue-500" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Inauguración de nuestras nuevas instalaciones y creación de categorías juveniles. Comenzamos a
                          formar no solo jugadores, sino personas íntegras a través del deporte.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* 2015 - Era Moderna */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1 pl-8">
                    <Card className="border-2 border-green-500 bg-white shadow-lg">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-green-500" />
                          <CardTitle className="text-xl">2015 - Era Moderna</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Modernización completa del club con nuevas metodologías de entrenamiento, tecnología deportiva
                          avanzada y un enfoque integral en el desarrollo de nuestros atletas.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* 2024 - Presente y Futuro */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8 text-right">
                    <Card className="border-2 border-purple-500 bg-white shadow-lg">
                      <CardHeader>
                        <div className="flex items-center justify-end gap-2">
                          <CardTitle className="text-xl">2024 - Presente y Futuro</CardTitle>
                          <Calendar className="w-5 h-5 text-purple-500" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          Hoy somos referentes en la formación de voleibolistas, con jugadores compitiendo a nivel
                          nacional e internacional. El camino continúa forjándose hacia nuevos horizontes.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10 animate-pulse"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* Camino hacia el futuro */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                  <div className="text-center mt-8">
                    <p className="text-gray-500 italic">El camino continúa forjándose...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logros */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Logros</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">25 Títulos</h3>
              <p className="text-gray-600">Campeonatos regionales y nacionales</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">150+ Jugadores</h3>
              <p className="text-gray-600">Formados en nuestras categorías</p>
            </div>
            <div className="text-center">
              <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">35+ Años</h3>
              <p className="text-gray-600">De tradición y excelencia</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
