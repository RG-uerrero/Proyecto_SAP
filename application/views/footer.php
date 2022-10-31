  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  <script src="js/script.js"></script>




  <script>
      //Ejecutar función en el evento click
      document.getElementById("btn_open").addEventListener("click", open_close_menu);

      //Declaramos variables
      var side_menu = document.getElementById("menu_side");
      var btn_open = document.getElementById("btn_open");
      var body = document.getElementById("body");

      //Evento para mostrar y ocultar menú
      function open_close_menu() {
          body.classList.toggle("body_move");
          side_menu.classList.toggle("menu__side_move");
      }

      //Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

      if (window.innerWidth < 760) {

          body.classList.add("body_move");
          side_menu.classList.add("menu__side_move");
      }

      //Haciendo el menú responsive(adaptable)

      window.addEventListener("resize", function() {

          if (window.innerWidth > 760) {

              body.classList.remove("body_move");
              side_menu.classList.remove("menu__side_move");
          }

          if (window.innerWidth < 760) {

              body.classList.add("body_move");
              side_menu.classList.add("menu__side_move");
          }

      });
  </script>
  </body>

  </html>