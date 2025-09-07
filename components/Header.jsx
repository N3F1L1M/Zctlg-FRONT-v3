import React from 'react'

export default function header() {
  return (
<header>
    <div className="contenedor-titulo">
      <a className="a-content" href="/">
        <img className="logo" src="../img/logo.png" alt="" />
        <h2>DaPunt</h2>
      </a>
    </div>

  
    <form className="contenedor-logo" action="search.php" method="GET">
      <input 
        className="input-search"
        placeholder="Busqueda directa"
        type="text"
        name="x"
      />

      <button className="button-search" type="submit">
        <span className="material-symbols-outlined"> search </span>
      </button>
    </form>

    <div className="favorito">
    
    </div>
</header>

  )
}
