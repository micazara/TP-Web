/*
Cambios en la página de formulario de contacto
● Al presionar el botón enviar los campos se deben validar.
○ Nombre y apellido no puede estar vacío.

○ Si todas las validaciones son correctas el formulario se debe enviar.
■ Debe mostrar un popup con el texto “Consulta enviada”
■ Debe tener un boton que diga “aceptar” y redirige a la página principal
● Esta y todas las otras páginas deben de ser responsive.
*/

let botonEnviar = document.querySelector("#boton-enviar-form");
let mensaje = document.querySelector("#mensaje")

botonEnviar.addEventListener("click", function (event) {
    event.preventDefault()


    let form = document.querySelector("#formulario-consulta");
    let error = false;
    let mensajesError = "";

    let nombreApellido = document.querySelector("#nombre_y_apellido").value;
    let email = document.querySelector("#mail").value;
    let tel = document.querySelector("#telefono").value

    // ○ Mail validado con expresión regular.
    let regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

    // ○ El teléfono se debe validar el formato de 8 dígitos e incluir un guión medio entre el cuarto 
    // y quinto número en caso de que el usuario lo ingrese, si no lo ingresa no se deben realizar validaciones.

    let regexNumeros = /^\d{4}-?\d{4}$/;

    // ○ Consulta, se debe limitar a 1000 caracteres y mostrar la cantidad de caracteres ingresados y resantes en tiempo real.
    let consulta = document.querySelector("#consulta");
    let caracteresIngresados = document.querySelector("#caracteresIngresados")
    let caracteresRestantes = document.querySelector("#caracteresRestantes")

    // N O M B R E  Y  A P E L L I D O
    if (nombreApellido == "") {
        error = true;
        mensajesError += "<p>Ingresá tu nombre y apellido</p>"
    }

    // E M A I L
    if (!(regexEmail.test(email))) {
        error = true;
        mensajesError += " <p>Ingresá un email válido</p> "
    }

    // C O N S U L T A 
    // Obtener el texto ingresado y la longitud lactual
    let texto = consulta.value;
    let cantidadDeCaracteres = texto.length;
    String(cantidadDeCaracteres);
    // Mostrar la cantidad de caracteres ingresados
    caracteresIngresados.textContent = cantidadDeCaracteres;

    // // Calcular los caracteres restantes y mostrarlos
    let caracMax = 1000; // Cantidad máxima de caracteres permitidos
    let restantes = caracMax - cantidadDeCaracteres;
    caracteresRestantes.textContent = restantes;

    if (cantidadDeCaracteres > 1000 || cantidadDeCaracteres == 0) {
        error = true;
        mensajesError += " <p>La consulta no está completa</p> "
    } 

    // T E L E F O N O
    // testea que el regex se cumpla en tel
    if (!(regexNumeros.test(tel))) {
        error = true;
        mensajesError += " <p>Ingresá un formato de telefono válido</p> "
    }

    if (error) {
        //muestre los errores
        mensaje.innerHTML = mensajesError;
    } else {
        // form.submit();
       
        let modalFormularioExitoso = document.getElementById("modal-formulario-exitoso");
        let tituloModalContacto = document.getElementById("titulo-modal-contacto");
        tituloModalContacto.textContent = "Los carpis te saludan...estamos viendo tu consulta";
        modalFormularioExitoso.style.display = "block";

        let cerrarModal = document.querySelector(".cerrar-modal-formulario");

        cerrarModal.addEventListener("click", (e)=>{
            modalFormularioExitoso.style.display = "none";

        })


        
    }


    
      
      
      
      
   

})


