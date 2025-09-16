import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviewCount: number
}

interface ProductosSimilaresProps {
  products: Product[]
}

export function ProductosSimilares({ products }: ProductosSimilaresProps) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Productos similares que te pueden interesar</h2>
        <p className="text-gray-600">Descubre otros smartphones con características similares</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-4">
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={
                      product.image || `/placeholder.svg?height=300&width=300&query=${encodeURIComponent(product.name)}`
                    }
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="absolute top-2 right-2 w-8 h-8 p-0 bg-white/80 backdrop-blur-sm hover:bg-white"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                {product.originalPrice && (
                  <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">Oferta</Badge>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">
                    {product.rating} ({product.reviewCount})
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-blue-600">${product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <span className="text-xs text-green-600 font-medium">
                      Ahorra ${(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  )}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Agregar
                  </Button>
                  <Button size="sm" variant="outline">
                    Ver
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          Ver más productos similares
        </Button>
      </div>
    </div>
  )
}
