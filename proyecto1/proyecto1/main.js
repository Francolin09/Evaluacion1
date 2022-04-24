
$(document).ready(function () {
    //Ocultar Alerta cuando cargue la pagina
    $("#alertaNombre").hide();
    var mensaje = "";
    $("#alertaNombre").html(mensaje);
    //si nombre pierde el foco
    $("#nombre").focusout(function () {
        // si no hay caracteres, mostramos alerta
        if ($("#nombre").val().trim().length == 0) {
            mensaje = "Debe ingresar un Nombre";

        } else {
            //si hay caracteres, ocultamos la alerta
            $("#alertaNombre").hide();
        }
    })
    $("#email").focusout(function () {
        // si no hay caracteres, mostramos alerta
        if ($("#email").val().trim().length == 0) {
            mensaje = "Debe ingresar un Email";

        } else {
            //si hay caracteres, ocultamos la alerta
            $("#alertaNombre").hide();
        }
    })

    $("#Mensaje").focusout(function(){
        if ($("#Mensaje").val().trim().length==0)
        {
            mensaje ="Debe ingresar un mensaje"
        }
        else{
            $("#alertaMensaje").hide();
        }
    })

    $("#formulario").submit(function () {
        
        if (mensaje.length >= 0) {
            $("#alertaNombre").html(mensaje);
            $("#alertaNombre").show();
            
        }
    })


});
