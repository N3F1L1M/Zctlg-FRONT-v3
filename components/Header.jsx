"use client";

import { Search, Heart, ShoppingCart, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"


export default function header() {
  return (

 <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-emerald-600 to-teal-700 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Zcatalogo logo"
                  className="h-10 w-10 md:h-12 md:w-12 rounded-lg object-contain bg-white/20 p-1 group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    // Fallback to letter logo if image fails
                    e.currentTarget.style.display = "none"
                    e.currentTarget.nextElementSibling.style.display = "flex" }}/>
                 
                <div className="hidden h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-white text-emerald-700 shadow-sm">
                  <span className="text-lg md:text-xl font-bold">Z</span>
                </div>
              </div>
              <h1 className="text-lg md:text-2xl font-extrabold tracking-tight text-emerald-900 group-hover:text-emerald-800 transition-colors bg-white/90 px-3 py-1 rounded-lg shadow-sm">
                Zcatalogo
              </h1>
            </Link>
          </div>

          <div className="hidden sm:block flex-1 max-w-2xl mx-4 lg:mx-8">
            <form role="search" aria-label="Búsqueda" className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                name="q"
                placeholder="Buscar productos..."
                className="w-full h-12 pl-12 pr-24 rounded-full bg-white border-0 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-emerald-300 shadow-inner text-gray-900 font-medium"
              />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 px-6 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-semibold shadow-md transition-all"
              >
                Buscar
              </Button>
            </form>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-gray-100 hover:bg-white/20 rounded-full p-2 transition-all"
              aria-label="Favoritos"
              title="Favoritos"
            >
              <Heart className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-gray-100 hover:bg-white/20 rounded-full p-2 relative transition-all"
              aria-label="Carrito de compras"
              title="Carrito"
            >
              <ShoppingCart className="h-5 w-5" />
           <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs p-0 flex items-center justify-center border-2 border-white">
                3
              </Badge>  
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex text-white hover:text-gray-100 hover:bg-white/20 rounded-full p-2 transition-all"
              aria-label="Mi cuenta"
              title="Mi cuenta"
            >
              <User className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden text-white hover:text-gray-100 hover:bg-white/20 rounded-full p-2 transition-all"
              aria-label="Buscar"
              title="Buscar"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-gray-100 hover:bg-white/20 rounded-full p-2 transition-all"
              aria-label="Menú"
              title="Menú"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="sm:hidden pb-4">
          <form role="search" aria-label="Búsqueda móvil" className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              name="q-mobile"
              placeholder="Buscar productos..."
              className="w-full h-11 pl-11 pr-4 rounded-xl bg-white border-0 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-emerald-300 shadow-inner text-gray-900"
            />
          </form>
        </div>
      </div>
    </header>

  )
}
