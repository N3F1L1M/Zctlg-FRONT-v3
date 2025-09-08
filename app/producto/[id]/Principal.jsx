import React from 'react'

export default function Principal({ producto }) {


  return (
              <div className="sub-main-producto1 div-producto  border-amber-950 border-2">
            <div className="div-producto1 div-producto pro">
              <div className="img-producto">
                <img src={producto.imagenes[0]} alt="" />
              </div>
              <div className="galeryimg">

                {producto.imagenes.map((img, index) => (
                  <img className="galeimg" src={img} alt="" key={index} />
                ))}
                
              </div>
            </div>
            <div className="div-producto2 div-producto pro">
              <div className="detalles">
                <div className="sub-detalles1">
                  <h2>{producto.titulo}</h2>
                  <h1>{producto.precio}</h1>
                  <h3>Producto</h3>
                  <p>{producto.descripcion}</p>
                </div>
                <div className="sub-detalles2">
                  <div className="btn-detalles">
                    <a href="/">
                      <img
                        className="button-favorito"
                        src="@img/imgtiendas/foto_perfil.jpg"
                        alt=""
                      />
                    </a>
                    <a href="/">
                      <h2 className="h2-card">Nombre tienda</h2>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


  )
}
