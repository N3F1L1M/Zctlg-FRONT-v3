import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden rounded-2xl mx-4 mb-12"
      style={{
        background: "linear-gradient(135deg, #1f2937 0%, #374151 50%, #4f46e5 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[url('/modern-tech-products-collage.jpg')] bg-cover bg-center opacity-10" />

      <div className="relative px-8 py-16 lg:px-16 lg:py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">+10,000 clientes satisfechos</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 text-balance">
            La mejor tecnología
            <span className="block text-indigo-200">a tu alcance</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 text-pretty max-w-2xl">
            Descubre productos de última generación con los mejores precios y garantía oficial. Envío gratis en compras
            superiores a $500.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="gap-2 text-lg px-8">
              Explorar productos
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              style={{ backgroundColor: "transparent" }}
            >
              Ver ofertas especiales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
