import React from 'react'

export default function header() {
  return (

<header className='flex flex-row primario rounded-b-[15px] border-b-black border-2 
 '>

    <div className="contenedor-titulo border-fuchsia-700 border-2">
      <a className="a-content" href="/">
        <img className="logo" src="../img/logo.png" alt="" />
        <h2>DaPunt</h2>
      </a>
    </div>

  
    <form className="contenedor-logo border-amber-400 border-2" action="search.php" method="GET">
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

    <div className="favorito border-2 border-fuchsia-600">
    
    </div>


</header>

  )
}
