import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TablaDetalles() {
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
  ]

  return (
    <div className="mt-12 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Especificaciones técnicas</h2>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Detalles del producto
            <Badge variant="secondary">Especificaciones completas</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {especificaciones.map((spec, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                    <td className="py-4 px-2 font-medium text-gray-700 w-1/3">{spec.categoria}</td>
                    <td className="py-4 px-2 text-gray-900">{spec.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
