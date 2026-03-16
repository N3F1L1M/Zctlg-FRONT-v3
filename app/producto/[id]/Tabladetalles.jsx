import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";




export default function TablaDetalles(props) {

  if (!props.detalles || props.detalles.length === 0) { return null; }

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
