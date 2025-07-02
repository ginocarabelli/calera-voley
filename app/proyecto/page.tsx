import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Target, Users, Trophy, Heart } from "lucide-react"
import Footer from "@/components/footer"

export default function ProyectoPage() {
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
          <h1 className="text-4xl font-bold mb-4">Nuestro Proyecto</h1>
          <p className="text-xl text-gray-300">Visión, misión y objetivos para el futuro del voleibol</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-2 border-black">
              <CardHeader>
                <Target className="w-8 h-8 mb-2" />
                <CardTitle className="text-2xl">Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Formar integralmente a jóvenes deportistas a través del voleibol, promoviendo valores como el trabajo
                  en equipo, la disciplina, el respeto y la superación personal. Buscamos ser un referente en la
                  formación deportiva y humana de nuestros atletas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <Heart className="w-8 h-8 mb-2" />
                <CardTitle className="text-2xl">Nuestra Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Ser reconocidos como el club de voleibol líder en la región, destacando por la excelencia deportiva,
                  la formación integral de nuestros jugadores y nuestro compromiso con la comunidad. Aspiramos a formar
                  campeones dentro y fuera de la cancha.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Objetivos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto mb-4 text-black" />
                <CardTitle>Formación Integral</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Desarrollar no solo habilidades deportivas, sino también valores humanos y competencias para la vida.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Trophy className="w-12 h-12 mx-auto mb-4 text-black" />
                <CardTitle>Excelencia Deportiva</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mantener el más alto nivel competitivo y formar jugadores capaces de destacar a nivel nacional e
                  internacional.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-12 h-12 mx-auto mb-4 text-black" />
                <CardTitle>Innovación Constante</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implementar metodologías modernas de entrenamiento y tecnología deportiva de vanguardia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Programas</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-l-4 border-l-black">
              <CardHeader>
                <CardTitle>Escuela de Iniciación (8-12 años)</CardTitle>
                <CardDescription>Primeros pasos en el voleibol</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Programa diseñado para introducir a los niños al mundo del voleibol de manera divertida y educativa,
                  enfocándose en el desarrollo de habilidades básicas y valores deportivos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-black">
              <CardHeader>
                <CardTitle>Categoría Juvenil (13-17 años)</CardTitle>
                <CardDescription>Formación competitiva</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Entrenamiento intensivo para jóvenes con potencial competitivo, participación en torneos regionales y
                  nacionales, desarrollo técnico-táctico avanzado.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-black">
              <CardHeader>
                <CardTitle>Equipo Senior (18+ años)</CardTitle>
                <CardDescription>Alto rendimiento</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nuestro equipo de élite que compite en las ligas más importantes del país. Entrenamiento profesional,
                  preparación física especializada y seguimiento médico integral.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Quieres ser parte de nuestro proyecto?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a nuestra familia deportiva y forma parte de una tradición de excelencia
          </p>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black bg-transparent"
          >
            Contactar Ahora
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
