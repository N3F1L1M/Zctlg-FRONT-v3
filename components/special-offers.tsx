import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Zap, Gift } from "lucide-react"

const offers = [
  {
    id: 1,
    title: "Flash Sale",
    subtitle: "Solo por 24 horas",
    discount: "50%",
    icon: Zap,
    color: "from-red-500 to-pink-500",
    timeLeft: "12:34:56",
  },
  {
    id: 2,
    title: "Envío Gratis",
    subtitle: "En compras +$500",
    discount: "Free",
    icon: Gift,
    color: "from-green-500 to-emerald-500",
    timeLeft: null,
  },
  {
    id: 3,
    title: "Oferta Semanal",
    subtitle: "Productos seleccionados",
    discount: "30%",
    icon: Clock,
    color: "from-blue-500 to-cyan-500",
    timeLeft: "6 días",
  },
]

export function SpecialOffers() {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Ofertas especiales</h2>
        <p className="text-muted-foreground">No te pierdas estas increíbles promociones</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer) => {
          const IconComponent = offer.icon
          return (
            <Card
              key={offer.id}
              className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-90`} />

              <div className="relative p-6 text-white text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="text-white/90 mb-4">{offer.subtitle}</p>

                <div className="mb-4">
                  <span className="text-4xl font-bold">{offer.discount}</span>
                  {offer.discount !== "Free" && <span className="text-xl ml-1">OFF</span>}
                </div>

                {offer.timeLeft && (
                  <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                    {offer.timeLeft} restantes
                  </Badge>
                )}

                <Button
                  variant="secondary"
                  className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                >
                  Ver ofertas
                </Button>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
