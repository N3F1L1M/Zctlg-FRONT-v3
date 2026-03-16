"server component"

import { client } from "@/lib/Typesense_client";
import Sheet from './Sheet';


    //FUNCION BUSCADORA TYPESENSE
    async function buscadoratypesense(query) {
      try {
            const results = await client
              .collections("productos")
              .documents()
              .search({
                q: query,
                query_by: 'titulo',
                sort_by: '_text_match:desc',
                typo_tolerance: true,
                num_typos: 2,
                prefix: true,
                prioritize_exact_match: false})

    
        return results; 

      } catch (error) {return "Error al buscar:", error;}
       
      
    }
    //FUNCION BUSCADORA TYPESENSE



export default async function page({params}) {

  const { query } = await params;
  const decodedQuery = decodeURI(query);
  let datos = await buscadoratypesense(decodedQuery);
  let resultados = datos.hits.map(hit => hit.document);
  let found = datos.found;
  

  return (
    <div className="container mx-auto px-4 py-8 ">
        
        <Sheet resultados={resultados} found={found} query={decodedQuery} />


       </div>
  )
}
