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







export default async function Page() {


  //se lanaza la query a typesense
  let datos = await buscadoratypesense();
  let productos = datos.hits.map(hit => hit.document);



  return (
   
       <div className="min-h-screen bg-background">


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
          <ProductGrid productos={productos} />
        </section>
      </main>
    </div>

  );
}
