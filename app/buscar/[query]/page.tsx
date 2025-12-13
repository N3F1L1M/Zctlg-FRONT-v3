"use client"

import { useState } from "react"
import { Search, SlidersHorizontal, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

// Mock data - reemplaza esto con datos reales de tu API/database
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Collar Premium para Perro",
    price: 29.99,
    originalPrice: 39.99,
    image: "/collar-de-perro.jpg",
    category: "Accesorios",
    rating: 4.5,
    inStock: true,
  },
  {
    id: 2,
    name: "Comida Premium para Perros",
    price: 45.99,
    image: "/comida-para-perros.jpg",
    category: "Alimentos",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 3,
    name: "Juguete Interactivo",
    price: 19.99,
    originalPrice: 24.99,
    image: "/juguete-para-perro.jpg",
    category: "Juguetes",
    rating: 4.3,
    inStock: false,
  },
  {
    id: 4,
    name: "Cama Ortopédica para Perro",
    price: 79.99,
    image: "/cama-para-perro.jpg",
    category: "Camas",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 5,
    name: "Arnés Ajustable",
    price: 24.99,
    image: "/arn-s-para-perro.jpg",
    category: "Accesorios",
    rating: 4.6,
    inStock: true,
  },
  {
    id: 6,
    name: "Shampoo Natural para Perros",
    price: 15.99,
    image: "/shampoo-para-perros.jpg",
    category: "Cuidado",
    rating: 4.4,
    inStock: true,
  },
]

interface SearchResultsProps {
  query: string
  searchParams: { [key: string]: string | string[] | undefined }
}


export default function SearchResults({ query, searchParams }: SearchResultsProps) {


  const [searchQuery, setSearchQuery] = useState(query)
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [inStockOnly, setInStockOnly] = useState(false)
  const [sortBy, setSortBy] = useState("relevance")

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesStock = !inStockOnly || product.inStock
    return matchesPrice && matchesCategory && matchesStock
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price
      case "price-desc":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  const categories = ["Accesorios", "Alimentos", "Juguetes", "Camas", "Cuidado"]

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setPriceRange([0, 100])
    setInStockOnly(false)
  }

  return (
    <div className="min-h-screen bg-background">


      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-2">
            Resultados de búsqueda para: <span className="font-semibold text-foreground">"{query}"</span>
          </p>
          <h1 className="text-2xl font-bold text-balance">
            {sortedProducts.length} {sortedProducts.length === 1 ? "producto encontrado" : "productos encontrados"}
          </h1>
        </div>

        <div className="flex gap-6">
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold">Filtros</h2>
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="h-auto p-1 text-xs">
                    Limpiar
                  </Button>
                </div>

                {/* Categorías */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Categorías</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => handleCategoryToggle(category)}
                        />
                        <Label htmlFor={category} className="text-sm cursor-pointer">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rango de precio */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Precio</h3>
                  <Slider
                    min={0}
                    max={100}
                    step={5}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Disponibilidad */}
                <div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="inStock"
                      checked={inStockOnly}
                      onCheckedChange={(checked) => setInStockOnly(checked as boolean)}
                    />
                    <Label htmlFor="inStock" className="text-sm cursor-pointer">
                      Solo productos en stock
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {/* Barra de herramientas - Móvil y ordenamiento */}
            <div className="flex items-center justify-between mb-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden bg-transparent">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Filtros</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-6">
                    {/* Mismo contenido de filtros que desktop */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium">Categorías</h3>
                      </div>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                              id={`mobile-${category}`}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={() => handleCategoryToggle(category)}
                            />
                            <Label htmlFor={`mobile-${category}`} className="text-sm cursor-pointer">
                              {category}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">Precio</h3>
                      <Slider
                        min={0}
                        max={100}
                        step={5}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="mobile-inStock"
                        checked={inStockOnly}
                        onCheckedChange={(checked) => setInStockOnly(checked as boolean)}
                      />
                      <Label htmlFor="mobile-inStock" className="text-sm cursor-pointer">
                        Solo productos en stock
                      </Label>
                    </div>

                    <Button onClick={clearFilters} variant="outline" className="w-full bg-transparent">
                      Limpiar filtros
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Más relevante</SelectItem>
                  <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
                  <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
                  <SelectItem value="rating">Mejor valorados</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      {!product.inStock && <Badge className="absolute top-2 left-2 bg-destructive">Agotado</Badge>}
                      {product.originalPrice && (
                        <Badge className="absolute top-2 right-2 bg-emerald-600">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </Badge>
                      )}
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {product.category}
                      </Badge>
                      <h3 className="font-semibold text-balance mb-2 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          <span className="text-yellow-500 text-sm">★</span>
                          <span className="text-sm text-muted-foreground ml-1">{product.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold text-emerald-600">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through mb-1">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <Button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700" disabled={!product.inStock}>
                        {product.inStock ? "Agregar al carrito" : "No disponible"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No se encontraron productos</h3>
                <p className="text-muted-foreground mb-4">Intenta ajustar tus filtros o realiza una nueva búsqueda</p>
                <Button onClick={clearFilters} variant="outline">
                  Limpiar filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      
    </div>
  )
}
