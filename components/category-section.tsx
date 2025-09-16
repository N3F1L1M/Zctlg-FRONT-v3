import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Smartphone, Laptop, HardDrive } from "lucide-react"

const categories = [
  {
    id: 1,
    title: "Celulares y Tablets",
    icon: Smartphone,
    image: "/modern-smartphones-and-tablets-collection.jpg",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    title: "Laptops",
    icon: Laptop,
    image: "/modern-laptops-and-notebooks.jpg",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Componentes de PC",
    icon: HardDrive,
    image: "/pc-components-graphics-cards-processors.jpg",
    gradient: "from-purple-500 to-indigo-500",
  },
]

export function CategorySection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Explora por Categorías</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon
          return (
            <Card
              key={category.id}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90`} />
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="relative p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className="h-8 w-8" />
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-balance">{category.title}</h3>
                <Button
                  variant="secondary"
                  className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-200"
                >
                  Ver productos
                </Button>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
