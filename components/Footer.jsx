import Link from "next/link"

export default function Footer() {
  return (
   <footer className="bg-muted mt-16 py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Zcatalogo</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tu tienda online de confianza para todas tus necesidades.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/categorias" className="text-muted-foreground hover:text-foreground transition-colors">
                    Categorías
                  </Link>
                </li>
                <li>
                  <Link href="/ofertas" className="text-muted-foreground hover:text-foreground transition-colors">
                    Ofertas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">¿Necesitas ayuda? Estamos aquí para ti.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 Zcatalogo. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
  )
}
