import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import Footer from "@/components/footer"

export default function TiendaPage() {
  const productos = [
    {
      id: 1,
      nombre: "Camiseta Oficial",
      precio: "$45.000",
      descripcion: "Camiseta oficial del club, tela transpirable",
      categoria: "Indumentaria",
    },
    {
      id: 2,
      nombre: "Short de Entrenamiento",
      precio: "$35.000",
      descripcion: "Short cómodo para entrenamientos",
      categoria: "Indumentaria",
    },
    {
      id: 3,
      nombre: "Zapatillas Voleibol",
      precio: "$120.000",
      descripcion: "Zapatillas especializadas para voleibol",
      categoria: "Calzado",
    },
    {
      id: 4,
      nombre: "Medias Oficiales",
      precio: "$15.000",
      descripcion: "Pack de 3 pares de medias del club",
      categoria: "Accesorios",
    },
    {
      id: 5,
      nombre: "Sudadera Club",
      precio: "$65.000",
      descripcion: "Sudadera con capucha, logo bordado",
      categoria: "Indumentaria",
    },
    {
      id: 6,
      nombre: "Gorra Oficial",
      precio: "$25.000",
      descripcion: "Gorra ajustable con logo del club",
      categoria: "Accesorios",
    },
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
          <h1 className="text-4xl font-bold mb-4">Tienda Oficial</h1>
          <p className="text-xl text-gray-300">Indumentaria y accesorios oficiales del club</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((producto) => (
              <Card key={producto.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-100 relative overflow-hidden rounded-t-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=300`}
                    alt={producto.nombre}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                  <Badge className="absolute top-2 right-2 bg-black text-white">{producto.categoria}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{producto.nombre}</CardTitle>
                  <CardDescription>{producto.descripcion}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{producto.precio}</span>
                    <Button className="bg-black hover:bg-gray-800">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Agregar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Información de Compra</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 mb-6">
              Todos nuestros productos son de la más alta calidad. Para realizar tu pedido, contacta con nosotros a
              través de nuestros canales oficiales.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold mb-2">Envíos</h3>
                <p className="text-sm text-gray-600">
                  Realizamos envíos a todo el país. Tiempo de entrega: 3-5 días hábiles.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-bold mb-2">Tallas</h3>
                <p className="text-sm text-gray-600">
                  Disponible en todas las tallas desde XS hasta XXL. Consulta nuestra guía de tallas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
