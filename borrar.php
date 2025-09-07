      <div class="main">
        <div class="contenedor-producto-main">



          <div class="sub-main-producto1 div-producto">
            <div class="div-producto1 div-producto pro">
              <div class="img-producto">
                <img src="img/xbox.jpg" alt="" />
              </div>
              <div class="galeryimg">
                <img class="galeimg" src="img/xbox.jpg" alt="" />
                <img class="galeimg" src="img/xbox.jpg" alt="" />
                <img class="galeimg" src="img/xbox.jpg" alt="" />
                <img class="galeimg" src="img/xbox.jpg" alt="" />
                <img class="galeimg" src="img/xbox.jpg" alt="" />
              </div>
            </div>
            <div class="div-producto2 div-producto pro">
              <div class="detalles">
                <div class="sub-detalles1">
                  <h2>Titulo</h2>
                  <h1>Precio</h1>
                  <h3>Producto o servicio</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, veritatis! Placeat in commodi dolor laboriosam
                    excepturi laborum, perspiciatis obcaecati nesciunt inventore
                    minus sint nam vero exercitationem accusamus ipsam. Eveniet,
                    qui.
                  </p>
                </div>
                <div class="sub-detalles2">
                  <div class="btn-detalles">
                    <a href="/">
                      <img
                        class="button-favorito"
                        src="@img/imgtiendas/foto_perfil.jpg">"
                        alt=""
                      />
                    </a>
                    <a href="/">
                      <h2 class="h2-card">Nombre tienda</h2>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>








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
          <script src="https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js"></script>

          <div class="sub-main-producto2 div-producto pro">
            <h2 style="margin: 10px;">Productos recomendados de esta misma tienda</h2>
            <div class="caja-slider">
              <div class="direction">
                <button id="arrow-left" class="arrow" type="button">
                  <span class="material-symbols-outlined">
                    arrow_back_ios
                  </span>
                </button>
                <button id="arrow-right" class="arrow" type="button">
                  <span class="material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                </button>
              </div>
              <div id="slider" class="slider-producto">






                       
                
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








            <div class="sub-main-producto3 div-producto pro">
            <h2 style="margin: 10px;">Tabla de detalles</h2>

            </div>





            <div class="sub-main-producto4 div-producto pro">
            <h2 style="margin: 10px;">Descripcion</h2>


            </div>


          </div>






        </div>
      </div>