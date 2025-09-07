import { client } from "@/library/Typesense_client";





//FUNCION BUSCADORA TYPESENSE
async function buscadoratypesense(id) {
  

  try {
    const results = await client
      .collections("productos")
      .documents(id)
      .retrieve();

    return results; // Aquí accedes a los resultados
  } catch (error) {
    return "Error al buscar:", error;
  }
}
//FUNCION BUSCADORA TYPESENSE




export default async function ProductoPage({ params }) {
  const { id } = await params;




  //se lanza la query a typesense
  let producto = await buscadoratypesense(id);
  console.log(producto);

  return (


     <div className="main">
        <div className="contenedor-producto-main">



          <div className="sub-main-producto1 div-producto">
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






          {/*

          <script>
            window.onload = function () {
              var slider = document.getElementById("slider");
              var boxes = Array.from(
                slider.getElementsByClassName("producto-card")
              );
              var index = 0;
              var interval;

              function slide() {
                anime({
                  targets: slider,
                  scrollLeft: boxes[index].offsetLeft,
                  duration: 800,
                  easing: "linear",
                });
              }

              function startInterval() {
                clearInterval(interval);
                interval = setInterval(function () {
                  index = (index + 5) % boxes.length;
                  slide();
                }, 5000);
              }

              document.getElementById("arrow-left").onclick = function () {
                index = (index - 5 + boxes.length) % boxes.length;
                slide();
                startInterval();
              };

              document.getElementById("arrow-right").onclick = function () {
                index = (index + 5) % boxes.length;
                slide();
                startInterval();
              };

              // Inicia el intervalo para mover el slider automáticamente cada 5 segundos
              startInterval();
            };
          </script>
          <script src="https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js"></script> */}

          <div className="sub-main-producto2 div-producto pro">
            <h2 >Productos recomendados de esta misma tienda</h2>
            <div className="caja-slider">
              <div className="direction">
                <button id="arrow-left" className="arrow" type="button">
                  <span className="material-symbols-outlined">
                    arrow_back_ios
                  </span>
                </button>
                <button id="arrow-right" className="arrow" type="button">
                  <span className="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </button>
              </div>
              <div id="slider" className="slider-producto">






                       
                
              {  /* 

                include("plantillas/contenedorproducto.php"); 

                  los div y todas las variables que se imprimen en los cuadritos
                  chiquito de los productos estan en el documento llamando contenedorproducto.php
                  que debe de estar alado de este lo hice asi porque tanto el search como el index
                  como tambien en otras partes se llama este contenedor y entonces cuando se le 
                  modifique algo vamos a tener que estan modificnadolo en todas las partes que se llame
                  este contenedor*/



                                  }




              </div>
            </div>
          </div>








            <div className="sub-main-producto3 div-producto pro">
            <h2 >Tabla de detalles</h2>

            </div>





            <div className="sub-main-producto4 div-producto pro">
            <h2>Descripcion</h2>


            </div>


          </div>






        </div>
      



  );




  
}
