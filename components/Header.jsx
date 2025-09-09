import Link from 'next/link'
import React from 'react'

export default function header() {
  return (

<header className="primario sticky top-0 z-40 border-b border-black/20 rounded-b-2xl shadow-md">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* fila principal */}
    <div className="flex h-16 md:h-20 items-center justify-between gap-4">
      {/* Brand */}
      <div className="shrink-0">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Zcatalogo logo"
            className="h-20 w-20 rounded-md object-contain"
          />
          <h1 className="text-lg md:text-2xl font-extrabold tracking-tight">Zcatalogo</h1>
        </Link>
      </div>

      {/* Search (desktop/tablet) */}
      <form
        role="search"
        aria-label="Búsqueda"
        className="hidden sm:block flex-1"
      >
        <div className="relative">
      
          <input
            type="search"
            name="q"
            placeholder="Buscar productos..."
            className="w-full h-11 rounded-full bg-white/90 pl-11 pr-28 placeholder:text-black/50 border border-black/10 focus:bg-white focus:border-black/30 focus:outline-none shadow-inner transition text-center"
          />
          <button
            type="submit"
            className="bg-black text-white absolute right-2 top-1/2 -translate-y-1/2 h-9 px-4 rounded-full font-medium hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition"
          >
            Buscar
          </button>
        </div>
      </form>

      {/* Acciones */}
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          className="p-2 rounded-full hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black"
          aria-label="Favoritos"
          title="Favoritos"
        >
          <span className="material-symbols-outlined">favorite</span>
        </button>
        <button
          className="p-2 rounded-full hover:bg.black/5 focus:outline-none focus:ring-2 focus:ring-black"
          aria-label="Carrito"
          title="Carrito"
        >
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
        {/* botón para abrir búsqueda en móvil si luego quieres un drawer */}
        <button
          className="sm:hidden p-2 rounded-full hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black"
          aria-label="Abrir búsqueda"
          title="Buscar"
        >
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </div>

    {/* Búsqueda en móvil */}
    <form role="search" aria-label="Búsqueda" className="sm:hidden pb-3">
      <div className="relative">
        <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/50">
          search
        </span>
        <input
          type="search"
          name="q-mobile"
          placeholder="Buscar productos..."
          className="w-full h-11 rounded-xl bg-white/90 pl-11 pr-4 placeholder:text-black/50 border border-black/10 focus:bg-white focus:border-black/30 focus:outline-none shadow-inner transition"
        />
      </div>
    </form>
  </div>
</header>

  )
}
