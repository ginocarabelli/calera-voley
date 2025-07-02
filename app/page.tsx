import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, History, ShoppingBag, Target, Award, Camera } from "lucide-react"
import Footer from "@/components/footer"
import SponsorsSlider from "@/components/sponsors-slider"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-[200px]" 
        style={{ backgroundImage: `url("/Calera.PNG")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Club Social y Deportivo La Calera</h1>
          <p className="text-xl mb-8 text-gray-300">Pasión, dedicación y excelencia en cada jugada</p>
          <Badge variant="outline" className="text-white border-white mb-8">
            Fundado en 1985
          </Badge>
        </div>
      </section>

      {/* Proyecto Brief */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-black">Nuestro Compromiso</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              En el Club Social y Deportivo La Calera, nos dedicamos a formar no solo excelentes voleibolistas, sino
              también personas íntegras que lleven los valores del deporte a todos los aspectos de su vida. Con más de
              35 años de trayectoria, hemos construido una familia deportiva que trasciende las canchas.
            </p>
            <p className="text-md text-gray-500">
              Nuestro proyecto se basa en tres pilares fundamentales: <strong>formación integral</strong>,
              <strong>excelencia deportiva</strong> y <strong>compromiso social</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Descubre Nuestro Club</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Historia */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-black">
              <CardHeader>
                <History className="w-8 h-8 mb-2" />
                <CardTitle>Nuestra Historia</CardTitle>
                <CardDescription>
                  Más de 35 años forjando campeones y construyendo una tradición deportiva única.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/historia">
                  <Button className="w-full bg-black hover:bg-gray-800">Conocer Historia</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Galería */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-black">
              <CardHeader>
                <Camera className="w-8 h-8 mb-2" />
                <CardTitle>Galería de Fotos</CardTitle>
                <CardDescription>Revive los mejores momentos, victorias y celebraciones del club.</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/galeria">
                  <Button className="w-full bg-black hover:bg-gray-800">Ver Galería</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Tienda */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-black">
              <CardHeader>
                <ShoppingBag className="w-8 h-8 mb-2" />
                <CardTitle>Tienda Oficial</CardTitle>
                <CardDescription>Adquiere la indumentaria oficial del club y muestra tu orgullo.</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/tienda">
                  <Button className="w-full bg-black hover:bg-gray-800">Ir a Tienda</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Proyecto */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-black">
              <CardHeader>
                <Target className="w-8 h-8 mb-2" />
                <CardTitle>Nuestro Proyecto</CardTitle>
                <CardDescription>
                  Conoce nuestra visión, misión y objetivos para el futuro del voleibol.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/proyecto">
                  <Button className="w-full bg-black hover:bg-gray-800">Ver Proyecto</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Sponsors */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-black">
              <CardHeader>
                <Award className="w-8 h-8 mb-2" />
                <CardTitle>Nuestros Sponsors</CardTitle>
                <CardDescription>Empresas que confían en nosotros y apoyan nuestro crecimiento.</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/sponsors">
                  <Button className="w-full bg-black hover:bg-gray-800">Ver Sponsors</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Equipo */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-black">
              <CardHeader>
                <Users className="w-8 h-8 mb-2" />
                <CardTitle>Nuestro Equipo</CardTitle>
                <CardDescription>
                  Jugadores talentosos, entrenadores experimentados y staff comprometido.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/equipo">
                  <Button className="w-full bg-black hover:bg-gray-800">Ver Plantel</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors Slider */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Nuestros Sponsors</h2>
          <SponsorsSlider />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">35+</h3>
              <p className="text-gray-300">Años de Historia</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">150+</h3>
              <p className="text-gray-300">Jugadores Formados</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">25</h3>
              <p className="text-gray-300">Títulos Ganados</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">3</h3>
              <p className="text-gray-300">Categorías Activas</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
