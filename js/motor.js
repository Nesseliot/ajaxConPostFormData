function peticionServidor1(form1, b1, d1, servidor1)
{

    // Deshabilitar boton
    b1.disabled = true;
    
    // Creación del objeto XMLHttpRequest
    let ajax1 = new XMLHttpRequest();
    // Creación del objeto FormData
    let formData1 = new FormData(form1);

    // Exito en el envio de los datos
    ajax1.addEventListener("load", function(event) {
        // Limipiar formulario
        form1.reset();
        // Habilitar boton
        b1.disabled = false;        
        document.getElementById(d1.id).innerHTML = ajax1.responseText;
    });
    ,

    // Error en el envio de los datos
    ajax1.addEventListener("error", function(event) {
        // Limipiar formulario
        form1.reset();
        // Habilitar boton
        b1.disabled = false;        
        document.getElementById(d1.id).innerHTML = "No se han enviado los datos";
    });

    ajax1.open('POST', servidor1, true);
    ajax1.send(formData1);
}

function peticionServidor2(form1, b1, d1, servidor1)
{
    // Deshabilitar boton
    b1.disabled = true;
    
    // Creación del objeto XMLHttpRequest
    let ajax1 = new XMLHttpRequest();
    // Creación del objeto FormData
    let formData1 = new FormData(form1);

    ajax1.onreadystatechange = function(){
        if(ajax1.readyState==4 && ajax1.status==200)
        {
            document.getElementById(d1.id).innerHTML = ajax1.responseText;
            // Limipiar formulario
            form1.reset();
            // Habilitar boton
            b1.disabled = false;
        }
    };

    ajax1.open('POST', servidor1, true);
    ajax1.send(formData1);
}


// Cuando todos los recursos se hayan cargado...
window.addEventListener("load", function(event){

    // Establecer una referencia de los elementos
    const form1 = document.getElementById("form1");
    const b1 = document.getElementById("b1");
    const d1 = document.getElementById("d1");
    let servidor1 = "";

    // Asociar el elemento al evento y llamada a la función
    if(form1)
    {
        form1.addEventListener("submit", function(event){
            event.preventDefault();
            servidor1 = "servidor.php";
            peticionServidor1(form1, b1, d1, servidor1);
        });
    }

});


servidor.php
