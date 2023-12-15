 function validarFormulario() {
      var nombre = document.getElementById("nombre").value;
      var email = document.getElementById("email").value;
      var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      var errores = "";

      if (nombre.trim() === "") {
        errores += "Por favor, ingrese su nombre.\n";
      }

      if (!regexEmail.test(email)) {
        errores += "Por favor, ingrese una dirección de correo electrónico válida.\n";
      }

      if (errores !== "") {
        alert("Errores:\n" + errores);
        return false; 
      }

     
      alert("nombre: "+nombre);
      alert("email: "+email);
      alert("Bienvenido al apredizaje...");

      return true;
    }

