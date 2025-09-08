import React from "react";
import ContProductos from "@/components/ContProducts";

import { client } from '@/library/Typesense_client';






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
   
      

      <main className="main border-amber-400 border-4">
        <div className="banner cont" />

        <div className="promo cont">
          <div className="sub-cont cont-sub categoria1 categoria">
            <div className="subcat1">
              <h2>Celulares y Tablets</h2>
            </div>
            <div className="subcat2">
              <button type="button" className="button-categoria">
                <span>Ver productos</span>
              </button>
            </div>
          </div>

          <div className="sub-cont cont-sub categoria2 categoria">
            <div className="subcat1">
              <h2>Laptops</h2>
            </div>
            <div className="subcat2">
              <button type="button" className="button-categoria">
                <span>Ver productos</span>
              </button>
            </div>
          </div>

          <div className="sub-cont cont-sub categoria3 categoria">
            <div className="subcat1">
              <h2>Componentes de PC</h2>
            </div>
            <div className="subcat2">
              <button type="button" className="button-categoria">
                <span>Ver productos</span>
              </button>
            </div>
          </div>
        </div>
            <ContProductos productos={productos} />
      </main>

            
    

  );
}
