import { client } from "@/library/Typesense_client";
import Principal from "./Principal";
import ProductMismaTIenda from "./ProductMismaTIenda";
import Tabladetalles from "./Tabladetalles";
import Descripcion from "./Descripcion";

//FUNCION BUSCADORA TYPESENSE
async function buscadoratypesense(id) {
  try {
    const results = await client
      .collections("productos")
      .documents(id)
      .retrieve();

    return results; // Aquí accedes a los resultados
  } catch (error) {
    return "Error al buscar:", error;
  }
}
//FUNCION BUSCADORA TYPESENSE

export default async function ProductoPage({ params }) {
  const { id } = await params;

  //se lanza la query a typesense
  let producto = await buscadoratypesense(id);
  console.log(producto);

  return (
    <div className="contenedor-producto-main border-amber-400 border-2">
      <Principal producto={producto} />



      <ProductMismaTIenda />

      <Tabladetalles />

      <Descripcion />
    </div>
  );
}
