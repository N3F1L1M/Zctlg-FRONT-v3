"use client"

import { ProductGrid } from "@/components/ProductGrid"
import Link from "next/link"
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






export default function SearchResults(props) {
  
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [inStockOnly, setInStockOnly] = useState(false)
  const [sortBy, setSortBy] = useState("relevance")


  const filteredProducts = props.resultados.filter((product) => {

    //const matchesStock = !inStockOnly || product.inStock
    const matchesPrice = product.precio >= priceRange[0] && product.precio <= priceRange[1]
    //const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    
    return matchesPrice //&& matchesCategory && matchesStock
  })


  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.precio - b.precio
      case "price-desc":
        return b.precio - a.precio
      case "rating":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  const categories = ["Accesorios", "Alimentos", "Juguetes", "Camas", "Cuidado"]

  const handleCategoryToggle = (category) => {
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



        <div className="mb-6 ">
          <p className="text-sm text-muted-foreground mb-2">
            Resultados de búsqueda para: <span className="font-semibold text-foreground">"holA"</span>
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
                      onCheckedChange={(checked) => setInStockOnly()}
                    />
                    <Label htmlFor="inStock" className="text-sm cursor-pointer">
                      Solo productos en stock
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </aside>





          <div className="flex-1 border">
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
                        onCheckedChange={(checked) => setInStockOnly()}
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

              
              <ProductGrid productos={sortedProducts} />
              

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
