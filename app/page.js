import { ProductGrid } from "@/components/product-grid"
import { HeroSection } from "@/components/hero-section"
import { CategoryShowcase } from "@/components/category-showcase"
import { SpecialOffers } from "@/components/special-offers"

import { client } from '@/lib/Typesense_client';






//FUNCION BUSCADORA TYPESENSE
async function buscadoratypesense() {

    const searchParameters = {
      q: '*',
      query_by: 'titulo',
      filter_by: '',
      sort_by: '_text_match:desc'  };

 
  try { const results = await client
      .collections('productos')
      .documents()
      .search(searchParameters);

      return results; // Aquí accedes a los resultados

  } catch (error) { return ('Error al buscar:', error);}}
//FUNCION BUSCADORA TYPESENSE




const mockProducts = [
  {
    id: 1,
    titulo: "PlayStation 4",
    precio: "450.99",
    imagenes: ["/playstation-4-console.jpg"],
  },
  {
    id: 2,
    titulo: "Samsung Galaxy S23 Ultra",
    precio: "899.99",
    imagenes: ["/images/products/galaxy-s23.png"],
  },
  {
    id: 3,
    titulo: "MacBook Pro M3",
    precio: "1299.99",
    imagenes: ["/macbook-pro.png"],
  },
  {
    id: 4,
    titulo: "iPhone 15 Pro",
    precio: "999.99",
    imagenes: ["/iphone-15-pro.png"],
  },
]



export default async function Page() {


  //se lanaza la query a typesense
  let datos = await buscadoratypesense();
  let productos = datos.hits.map(hit => hit.document);



  return (
   
       <div className="min-h-screen bg-background">
      {/* Header placeholder - keep your existing header here */}
      <div className="h-20 bg-emerald-500 flex items-center justify-center">
        <p className="text-white font-medium">Tu Header Existente Aquí</p>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <HeroSection />

        {/* Categories Section */}
        <CategoryShowcase />

        {/* Special Offers */}
        <SpecialOffers />

        {/* Featured Products */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Productos Destacados</h2>
            <button className="text-primary hover:text-primary/80 font-medium">Ver todos →</button>
          </div>
          <ProductGrid productos={mockProducts} />
        </section>
      </main>
    </div>

  );
}
