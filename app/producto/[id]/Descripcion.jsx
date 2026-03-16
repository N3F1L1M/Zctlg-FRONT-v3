import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Descripcion(props) {

  if (!props.descripcion) { return null; }
  
  return (
    <div className="mt-12 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Descripción del producto</h2>

      <Card>
      
        <CardContent>
          <div className="prose max-w-none">

            <p className="text-gray-700 leading-relaxed text-base"> {props.descripcion}</p>

  
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
