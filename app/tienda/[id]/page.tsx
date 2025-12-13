import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MapPin, Store, Star, Shield, Award, Package, ShoppingCart } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// Datos de ejemplo de la tienda
const storeData = {
  id: "1",
  name: "Nombre tienda",
  avatar: "/generic-store-logo.png",
  banner: "/electronic-parts-banner.jpg",
  rating: 4.8,
  totalReviews: 1250,
  verified: true,
  yearsActive: 5,
  location: "Ciudad de México, México",
  description:
    "Somos una tienda especializada en componentes electrónicos, reparación de equipos y servicios técnicos profesionales. Contamos con más de 5 años de experiencia en el mercado ofreciendo productos de alta calidad y garantía.",
  stats: {
    productos: 245,
    ventas: 3420,
    seguidores: 892,
  },
}

// Productos de ejemplo de la tienda
const products = [
  {
    id: "1",
    name: "Reparación de Placa Base",
    price: 1499,
    image: "/circuit-board-repair.jpg",
    discount: 20,
    rating: 4.7,
    sold: 156,
  },
  {
    id: "2",
    name: "Servicio de Carga y Descarga",
    price: 899,
    image: "/truck-loading-service.jpg",
    discount: 0,
    rating: 4.9,
    sold: 234,
  },
  {
    id: "3",
    name: "Componentes Electrónicos",
    price: 599,
    image: "/electronic-components.jpg",
    discount: 15,
    rating: 4.6,
    sold: 89,
  },
  {
    id: "4",
    name: "Reparación de Equipos",
    price: 2499,
    image: "/equipment-repair-tools.jpg",
    discount: 0,
    rating: 4.8,
    sold: 178,
  },
  {
    id: "5",
    name: "Pantallas y Displays",
    price: 1299,
    image: "/display-screens.jpg",
    discount: 10,
    rating: 4.5,
    sold: 92,
  },
  {
    id: "6",
    name: "Baterías y Accesorios",
    price: 449,
    image: "/batteries-accessories.jpg",
    discount: 0,
    rating: 4.7,
    sold: 267,
  },
  {
    id: "7",
    name: "Herramientas Especializadas",
    price: 1899,
    image: "/specialized-tools.jpg",
    discount: 25,
    rating: 4.9,
    sold: 143,
  },
  {
    id: "8",
    name: "Cables y Conectores",
    price: 299,
    image: "/cables-connectors.jpg",
    discount: 0,
    rating: 4.4,
    sold: 421,
  },
]

export default function StorePage() {
  return (
    <div className="min-h-screen bg-background">


      {/* Banner de la tienda */}
      <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${storeData.banner})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
      </div>

      {/* Información de la tienda */}
      <div className="container mx-auto px-4">
        <div className="relative -mt-16 mb-8">
          <div className="bg-card rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar y nombre */}
              <div className="flex flex-col items-center md:items-start">
                <Avatar className="h-24 w-24 border-4 border-background">
                  <AvatarImage src={storeData.avatar || "/placeholder.svg"} alt={storeData.name} />
                  <AvatarFallback className="bg-[#00BFA5] text-white text-2xl">
                    {storeData.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Detalles de la tienda */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="text-3xl font-bold">{storeData.name}</h1>
                      {storeData.verified && (
                        <Badge className="bg-[#00BFA5] text-white">
                          <Shield className="h-3 w-3 mr-1" />
                          Verificado
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-foreground">{storeData.rating}</span>
                        <span>({storeData.totalReviews} reseñas)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{storeData.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Store className="h-4 w-4" />
                        <span>{storeData.yearsActive} años en el mercado</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground max-w-3xl">{storeData.description}</p>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <Heart className="h-4 w-4" />
                      Seguir
                    </Button>
                    <Button className="bg-[#00BFA5] hover:bg-[#00BFA5]/90 gap-2">
                      <Package className="h-4 w-4" />
                      Chat
                    </Button>
                  </div>
                </div>

                {/* Estadísticas */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00BFA5]">{storeData.stats.productos}</div>
                    <div className="text-sm text-muted-foreground">Productos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00BFA5]">{storeData.stats.ventas}</div>
                    <div className="text-sm text-muted-foreground">Ventas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#00BFA5]">{storeData.stats.seguidores}</div>
                    <div className="text-sm text-muted-foreground">Seguidores</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs de contenido */}
        <Tabs defaultValue="products" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="products">Productos</TabsTrigger>
            <TabsTrigger value="about">Acerca de</TabsTrigger>
            <TabsTrigger value="reviews">Reseñas</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            {/* Grid de productos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/producto/${product.id}`}>
                    <CardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.discount > 0 && (
                          <Badge className="absolute top-2 left-2 bg-red-500 text-white">-{product.discount}%</Badge>
                        )}
                        <Button
                          size="icon"
                          variant="secondary"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="p-4">
                        <h3 className="font-semibold text-sm mb-2 line-clamp-2 min-h-[40px]">{product.name}</h3>

                        <div className="flex items-center gap-1 mb-2">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-muted-foreground">
                            {product.rating} ({product.sold} vendidos)
                          </span>
                        </div>

                        <div className="flex items-baseline gap-2">
                          {product.discount > 0 ? (
                            <>
                              <span className="text-xl font-bold text-[#00BFA5]">
                                ${(product.price * (1 - product.discount / 100)).toFixed(0)}
                              </span>
                              <span className="text-sm text-muted-foreground line-through">${product.price}</span>
                            </>
                          ) : (
                            <span className="text-xl font-bold text-[#00BFA5]">${product.price}</span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Link>

                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-[#00BFA5] hover:bg-[#00BFA5]/90 gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      Agregar al carrito
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Acerca de la tienda</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{storeData.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 pt-6">
                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#00BFA5]/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="h-6 w-6 text-[#00BFA5]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Vendedor Verificado</h3>
                        <p className="text-sm text-muted-foreground">Vendedor certificado con identidad verificada</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#00BFA5]/10 flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-[#00BFA5]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Alta Calificación</h3>
                        <p className="text-sm text-muted-foreground">98% de valoraciones positivas</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#00BFA5]/10 flex items-center justify-center flex-shrink-0">
                        <Package className="h-6 w-6 text-[#00BFA5]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Envío Rápido</h3>
                        <p className="text-sm text-muted-foreground">Procesamos pedidos en 24 horas</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#00BFA5]/10 flex items-center justify-center flex-shrink-0">
                        <Store className="h-6 w-6 text-[#00BFA5]" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Experiencia</h3>
                        <p className="text-sm text-muted-foreground">{storeData.yearsActive} años en el mercado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Reseñas de clientes</h2>
                <div className="text-center py-8 text-muted-foreground">
                  <p>Las reseñas se mostrarán próximamente</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
