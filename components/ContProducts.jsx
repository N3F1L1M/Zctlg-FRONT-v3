import React from 'react'

export default function ContProducts({ productos }) {

  console.log(productos)

  return (

    <div> 

      {productos.map((p) => (



<div className="sub-productos cont-sub" key={p.id}>

  <a className="sub-card" href="producto.php?productID=<?php echo $registro['id'];?>">
      
          <img className="img-card" 
           src={p.imagenes[0]} 
           alt="" />
      
  </a>


  <div className="sub-card1"> 
    <div className="card-title">
      <p>{p.titulo}</p>
    </div>

    <div className="button-precio">
      


      <div className="btn1">
        <a href="perfil.php?tiendaID=<?php echo $registro['idtienda'];?>">
        <img className="button-favorito" src="img/imgtiendas/<?php echo $registro['foto_perfil'];?>" alt=""/>
      </a>
      <a href="perfil.php?tiendaID=<?php echo $registro['idtienda'];?>">
        <h2 className="h2-card">titulo tienda</h2>
      </a>
      </div>


      <div className="btn2">
        <p className="p-card">{p.precio}</p>

      </div>

    </div>
  </div>
</div>
          ))}





    </div>
    
   

  )
}
