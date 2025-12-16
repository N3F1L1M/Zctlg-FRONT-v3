

import React from 'react'
import { client } from "@/lib/Typesense_client";
import Sheet from './Sheet';


    //FUNCION BUSCADORA TYPESENSE
    async function buscadoratypesense(query) {
      try {
        const results = await client
          .collections("productos")
          .documents()
          .search({ q: '*',
                    query_by: 'titulo',
                    filter_by: '',
                    sort_by: '_text_match:desc'  });
    
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
        
        <Sheet resultados={resultados} found={found} />


       </div>
  )
}
