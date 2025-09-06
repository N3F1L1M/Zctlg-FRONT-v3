import React from 'react'

export default function header() {
  return (
<header>
    <div class="contenedor-titulo">
      <a class="a-content" href="/">
        <img class="logo" src="../img/logo.png" alt="" />
        <h2>DaPunt</h2>
      </a>
    </div>

  
    <form class="contenedor-logo" action="search.php" method="GET">
      <input 
        class="input-search"
        placeholder="Busqueda directa"
        type="text"
        name="x"
      />

      <button class="button-search" type="submit">
        <span class="material-symbols-outlined"> search </span>
      </button>
    </form>

    <div class="favorito">
    
    </div>
</header>

  )
}
