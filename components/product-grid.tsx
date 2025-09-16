import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  titulo: string
  precio: string
  imagenes: string[]
}

interface ProductGridProps {
  productos: Product[]
}

export function ProductGrid({ productos }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {productos.map((producto) => (
        <Card
          key={producto.id}
          className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="relative overflow-hidden">
            <Link href={`/producto/${producto.id}`}>
              <img
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                src={producto.imagenes[0] || "/placeholder.svg"}
                alt={producto.titulo}
              />
            </Link>
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <Badge className="absolute top-3 left-3 bg-emerald-500 hover:bg-emerald-600">Nuevo</Badge>
          </div>

          <CardContent className="p-4">
            <div className="space-y-3">
              <Link href={`/producto/${producto.id}`}>
                <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2 text-balance">
                  {producto.titulo}
                </h3>
              </Link>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <img className="w-6 h-6 rounded-full object-cover" src="/generic-store-logo.png" alt="Tienda" />
                  <span className="text-sm text-muted-foreground">Tienda Oficial</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-primary">${producto.precio}</p>
                  <p className="text-sm text-muted-foreground line-through">
                    ${(Number.parseFloat(producto.precio) * 1.2).toFixed(2)}
                  </p>
                </div>
                <Button size="sm" className="gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Agregar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
