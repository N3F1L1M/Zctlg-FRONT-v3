"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingCart, Store, Star, Truck, Shield, RotateCcw } from "lucide-react"

export default function Principal({ producto }) {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(0)
  const [favorito, setFavorito] = useState(false)

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
            <img
              src={producto.imagenes[imagenSeleccionada] || "/placeholder.svg"}
              alt={producto.titulo}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">En Stock</Badge>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {producto.imagenes.map((img, index) => (
              <button
                key={index}
                onClick={() => setImagenSeleccionada(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  imagenSeleccionada === index
                    ? "border-blue-500 ring-2 ring-blue-200"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`${producto.titulo} vista ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-700">(128 reseñas)</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 leading-tight">{producto.titulo}</h1>

            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-blue-600">${producto.precio}</span>
              <span className="text-lg text-gray-600 line-through">
                ${(Number.parseFloat(producto.precio) * 1.2).toFixed(2)}
              </span>
              <Badge variant="destructive">20% OFF</Badge>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">Descripción</h3>
            <p className="text-gray-700 leading-relaxed">{producto.descripcion}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">Características</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Truck className="w-4 h-4" />
                Envío gratis
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Shield className="w-4 h-4" />
                Garantía 2 años
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <RotateCcw className="w-4 h-4" />
                Devolución 30 días
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Star className="w-4 h-4" />
                Producto original
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Agregar al carrito
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setFavorito(!favorito)}
                className={favorito ? "text-red-500 border-red-500" : ""}
              >
                <Heart className={`w-5 h-5 ${favorito ? "fill-current" : ""}`} />
              </Button>
            </div>

            <Button variant="outline" size="lg" className="w-full bg-transparent">
              Comprar ahora
            </Button>
          </div>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <img src="/generic-store-logo.png" alt="Logo tienda" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Nombre tienda</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Store className="w-4 h-4" />
                    <span>Vendedor verificado</span>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1">4.8</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Ver tienda
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
