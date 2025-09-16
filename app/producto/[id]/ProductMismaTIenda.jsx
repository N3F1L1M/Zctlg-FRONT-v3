import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Store, Star, MapPin, Clock } from "lucide-react"

export default function ProductMismaTienda() {
  const productosRelacionados = [
    {
      id: 1,
      titulo: "Samsung Galaxy Buds Pro",
      precio: "199.99",
      imagen: "/samsung-buds-pro.jpg",
      rating: 4.5,
    },
    {
      id: 2,
      titulo: "Samsung Galaxy Watch 5",
      precio: "299.99",
      imagen: "/samsung-watch-5.jpg",
      rating: 4.7,
    },
    {
      id: 3,
      titulo: "Samsung Fast Charger 45W",
      precio: "49.99",
      imagen: "/samsung-charger-45w.jpg",
      rating: 4.3,
    },
  ]

  return (
    <div className="mt-12 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Más productos de esta tienda</h2>
        <Button variant="outline">Ver todos</Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
              <img src="/generic-store-logo.png" alt="Logo tienda" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">TechStore Premium</h3>
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>4.8 (2,341 reseñas)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Ciudad de México</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Responde en 2 horas</span>
                </div>
              </div>
            </div>
            <Button>
              <Store className="w-4 h-4 mr-2" />
              Visitar tienda
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {productosRelacionados.map((producto) => (
              <Card key={producto.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-3">
                    <img
                      src={producto.imagen || "/placeholder.svg"}
                      alt={producto.titulo}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">{producto.titulo}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">${producto.precio}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-600">{producto.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
