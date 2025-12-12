import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";




export default function TablaDetalles(props) {
  const especificaciones = [
    { categoria: "Color", valor: "Phantom Black" },
    { categoria: "RAM", valor: "32GB LPDDR5X" },
    { categoria: "Almacenamiento", valor: "128GB UFS 4.0 SSD" },
    { categoria: "Pantalla", valor: '6.8" Dynamic AMOLED 2X' },
    { categoria: "Procesador", valor: "Snapdragon 8 Gen 2" },
    { categoria: "Cámara Principal", valor: "200MP con OIS" },
    { categoria: "Batería", valor: "5000mAh carga rápida 45W" },
    { categoria: "Sistema Operativo", valor: "Android 13" },
    { categoria: "Conectividad", valor: "5G, Wi-Fi 6E, Bluetooth 5.3" },
    { categoria: "Resistencia", valor: "IP68" },
    { categoria: "Peso", valor: "234 gramos" },
    { categoria: "Dimensiones", valor: "163.4 x 78.1 x 8.9 mm" },
  ];

  return (
    <div className="mt-12 space-y-6">
    <h2 className="text-2xl font-bold text-gray-900">Tablas de detalles</h2>


     {props.detalles.map((detalle, index) => (

        <Card key={index}>

        <CardHeader>
          <CardTitle className="flex items-center gap-2">{detalle.titulo}
          <Badge variant="secondary">{detalle.label}</Badge></CardTitle>
        </CardHeader>




        <CardContent>
          <div className=" overflow-hidden">
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              divide-y sm:divide-y-0
              sm:divide-x">



           {Object.entries(detalle).map(([clave, valor]) => {
                  if (["label", "titulo"].includes(clave)) return null;
                  return (
                               
  <div key={clave} className="p-4 hover:bg-gray-50">
    <div className="flex items-center gap-3">
      <div className="text-base font-medium text-gray-500">
        {clave}:</div>
      <div className="text-base font-semibold text-gray-900 break-words">
        {String(valor)}</div>
    </div>
  </div>

                )})}

                  </div></div>
        </CardContent>


      </Card>
     ))}
</div>
)}
