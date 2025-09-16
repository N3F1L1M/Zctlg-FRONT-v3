import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Laptop, Gamepad2, Headphones, Camera, Watch, ArrowRight, TrendingUp } from "lucide-react"

const categories = [
  {
    id: 1,
    title: "Smartphones",
    subtitle: "Últimos modelos",
    icon: Smartphone,
    image: "/modern-smartphones-collection.jpg",
    color: "from-blue-500 to-cyan-500",
    products: "2,500+",
    trending: true,
  },
  {
    id: 2,
    title: "Laptops",
    subtitle: "Gaming y trabajo",
    icon: Laptop,
    image: "/gaming-laptops-and-ultrabooks.jpg",
    color: "from-purple-500 to-pink-500",
    products: "1,200+",
    trending: false,
  },
  {
    id: 3,
    title: "Gaming",
    subtitle: "Consolas y accesorios",
    icon: Gamepad2,
    image: "/gaming-consoles-and-controllers.jpg",
    color: "from-green-500 to-emerald-500",
    products: "800+",
    trending: true,
  },
  {
    id: 4,
    title: "Audio",
    subtitle: "Auriculares premium",
    icon: Headphones,
    image: "/premium-headphones-and-speakers.jpg",
    color: "from-orange-500 to-red-500",
    products: "600+",
    trending: false,
  },
  {
    id: 5,
    title: "Fotografía",
    subtitle: "Cámaras profesionales",
    icon: Camera,
    image: "/professional-cameras-and-lenses.jpg",
    color: "from-indigo-500 to-blue-500",
    products: "400+",
    trending: false,
  },
  {
    id: 6,
    title: "Wearables",
    subtitle: "Smartwatches y más",
    icon: Watch,
    image: "/smartwatches-and-fitness-trackers.jpg",
    color: "from-teal-500 to-cyan-500",
    products: "300+",
    trending: true,
  },
]

export function CategoryShowcase() {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Explora por categorías</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Encuentra exactamente lo que buscas en nuestras categorías especializadas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon
          return (
            <Card
              key={category.id}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`} />
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />

                {category.trending && (
                  <Badge className="absolute top-4 left-4 bg-gray-900/80 text-white hover:bg-gray-900 gap-1 backdrop-blur-sm">
                    <TrendingUp className="h-3 w-3" />
                    Trending
                  </Badge>
                )}

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-accent">{category.products}</p>
                    <p className="text-xs text-muted-foreground">productos</p>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                >
                  Ver productos
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
