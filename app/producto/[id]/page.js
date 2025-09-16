import { client } from "@/lib/Typesense_client";
import Principal from "./Principal";
import ProductMismaTIenda from "./ProductMismaTIenda";
import Tabladetalles from "./Tabladetalles";
import Descripcion from "./Descripcion";
import { ProductosSimilares }  from "./Productos-similares";

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



/*
const producto = {
  titulo: "Samsung Galaxy S23 Ultra 32GB RAM 128GB SSD Pro Plus XD",
  precio: "1500.99",
  descripcion:
    "El Samsung Galaxy S23 Ultra combina un rendimiento excepcional con características premium. Equipado con 32GB de RAM y 128GB de almacenamiento SSD, ofrece velocidad y capacidad para todas tus necesidades. Su cámara profesional y pantalla de alta resolución lo convierten en el smartphone perfecto para usuarios exigentes.",
  imagenes: [
    "/samsung-galaxy-s23-ultra-smartphone-front-view.jpg",
    "/samsung-galaxy-s23-ultra-smartphone-back-view.jpg",
    "/samsung-galaxy-s23-ultra-smartphone-side-view.jpg",
    "/samsung-galaxy-s23-ultra-smartphone-with-accessori.jpg",
  ],
}
*/


const recommendedProducts = [
  {
    id: "1",
    name: "iPhone 14 Pro Max 256GB Space Black",
    price: 1299.99,
    originalPrice: 1399.99,
    image: "/iphone-14-pro-max-black.jpg",
    rating: 4.7,
    reviewCount: 89,
  },
  {
    id: "2",
    name: "Google Pixel 7 Pro 128GB Snow White",
    price: 899.99,
    image: "/google-pixel-7-pro-white.jpg",
    rating: 4.4,
    reviewCount: 156,
  },
  {
    id: "3",
    name: "OnePlus 11 5G 256GB Titan Black",
    price: 749.99,
    originalPrice: 849.99,
    image: "/oneplus-11-black-smartphone.jpg",
    rating: 4.3,
    reviewCount: 67,
  },
  {
    id: "4",
    name: "Xiaomi 13 Pro 512GB Ceramic White",
    price: 999.99,
    image: "/xiaomi-13-pro-white-ceramic.jpg",
    rating: 4.6,
    reviewCount: 203,
  },
]




export default async function ProductoPage({ params }) {
  const { id } = await params;

  //se lanza la query a typesense
  let producto = await buscadoratypesense(id);
 

  return (
    <div className="container mx-auto px-4 py-8">
      <Principal producto={producto} />
      <ProductMismaTIenda />
      <Tabladetalles />
      <Descripcion />
           <div className="mt-16">
          <ProductosSimilares products={recommendedProducts} />
        </div>
    </div>
  );
}
