"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const sponsors = [
  { id: 1, name: "SportTech Solutions", logo: "/placeholder.svg?height=80&width=200" },
  { id: 2, name: "Nutrición Pro", logo: "/placeholder.svg?height=80&width=200" },
  { id: 3, name: "Clínica Deportiva Elite", logo: "/placeholder.svg?height=80&width=200" },
  { id: 4, name: "Transportes Rápidos", logo: "/placeholder.svg?height=80&width=200" },
  { id: 5, name: "Banco Regional", logo: "/placeholder.svg?height=80&width=200" },
  { id: 6, name: "Restaurante La Cancha", logo: "/placeholder.svg?height=80&width=200" },
  { id: 7, name: "Equipos Deportivos SA", logo: "/placeholder.svg?height=80&width=200" },
  { id: 8, name: "Seguros Confianza", logo: "/placeholder.svg?height=80&width=200" },
]

export default function SponsorsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
      >
        {/* Duplicamos los sponsors para el efecto loop infinito */}
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div key={`${sponsor.id}-${index}`} className="flex-shrink-0 w-1/4 px-4">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 h-24 flex items-center justify-center">
              <Image
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                width={200}
                height={80}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-6 space-x-2">
        {sponsors.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-black" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
