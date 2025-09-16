import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Descripcion() {
  return (
    <div className="mt-12 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Descripción del producto</h2>

      <Card>
        <CardHeader>
          <CardTitle>Descripción detallada</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed text-base">
              El Samsung Galaxy S23 Ultra Pro Plus XD representa la evolución definitiva de la serie Galaxy S, diseñado
              específicamente para usuarios que exigen lo mejor en tecnología, rendimiento y creatividad. Este
              dispositivo flagship combina un procesador Snapdragon 8 Gen 2 optimizado para Galaxy con 32GB de RAM
              LPDDR5X, ofreciendo un rendimiento excepcional para multitarea intensiva, gaming y aplicaciones
              profesionales.
            </p>

            <p className="text-gray-700 leading-relaxed text-base mt-4">
              La pantalla Dynamic AMOLED 2X de 6.8 pulgadas ofrece colores vibrantes y negros profundos, perfecta para
              consumo multimedia y productividad. El sistema de cámara cuádruple con sensor principal de 200MP y zoom
              espacial 100x te permite capturar fotografías y videos con calidad profesional en cualquier condición de
              iluminación.
            </p>

            <p className="text-gray-700 leading-relaxed text-base mt-4">
              El S Pen integrado transforma tu dispositivo en una herramienta de productividad sin límites, ideal para
              tomar notas, dibujar, editar documentos y controlar presentaciones. La batería de 5000mAh con carga súper
              rápida de 45W garantiza autonomía durante todo el día, mientras que la resistencia IP68 y el cristal
              Gorilla Glass Victus 2 proporcionan durabilidad premium.
            </p>

            <p className="text-gray-700 leading-relaxed text-base mt-4">
              Incluye conectividad 5G, Wi-Fi 6E y Bluetooth 5.3 para mantenerte conectado a la velocidad más alta. El
              almacenamiento SSD de 128GB UFS 4.0 ofrece velocidades de lectura y escritura ultrarrápidas, perfectas
              para aplicaciones exigentes y transferencia de archivos grandes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
