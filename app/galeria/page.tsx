import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Footer from "@/components/footer"

export default function GaleriaPage() {
  const photos = [
    { id: 1, title: "Campeonato Regional 2024", category: "Competencias" },
    { id: 2, title: "Entrenamiento Juvenil", category: "Entrenamientos" },
    { id: 3, title: "Celebración Título", category: "Celebraciones" },
    { id: 4, title: "Nuevas Instalaciones", category: "Instalaciones" },
    { id: 5, title: "Equipo Senior", category: "Equipos" },
    { id: 6, title: "Torneo Interno", category: "Competencias" },
    { id: 7, title: "Ceremonia de Premiación", category: "Celebraciones" },
    { id: 8, title: "Entrenamiento Técnico", category: "Entrenamientos" },
    { id: 9, title: "Cancha Principal", category: "Instalaciones" },
  ]

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
          <h1 className="text-4xl font-bold mb-4">Galería de Fotos</h1>
          <p className="text-xl text-gray-300">Los mejores momentos de nuestro club</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div key={photo.id} className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-square">
                <Image
                  src={`/placeholder.svg?height=400&width=400`}
                  alt={photo.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg">{photo.title}</h3>
                    <p className="text-sm text-gray-300">{photo.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Categorías</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Todas", "Competencias", "Entrenamientos", "Celebraciones", "Instalaciones", "Equipos"].map(
              (category) => (
                <Button
                  key={category}
                  variant={category === "Todas" ? "default" : "outline"}
                  className={
                    category === "Todas"
                      ? "bg-black hover:bg-gray-800"
                      : "border-black text-black hover:bg-black hover:text-white"
                  }
                >
                  {category}
                </Button>
              ),
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
