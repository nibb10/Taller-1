var n = document.getElementById("nombre");
var c = document.getElementById("comentario");
var btn_publicar = document.getElementById("btn_publicar");
var caja_de_comentarios = document.getElementById("caja_de_comentarios");
var mensaje_de_error = document.getElementById("mensaje_de_error");

btn_publicar.addEventListener("click", function(){
    var nombre = n.value;
    var comentario = c.value;
    var l1 = nombre.length;
    var l2 = comentario.length;
    var f = new Date();
    var fecha = (f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
    
    if ((l1==1)||(l1==2)){
        mensaje_de_error.innerHTML = "<span style='color: red;'>Su nombre debe poseer al menos 3 caracteres</span>";
    } else if (l2==0){
        mensaje_de_error.innerHTML = "<span style='color: red;'>Su comentario no puede estar vacío</span>";
    } else if (l2>200){
        mensaje_de_error.innerHTML = "<span style='color: red;'>Su comentario no puede exceder los 200 caracteres</span>";
    } else {
        if (l1==0){
            var nombre = "Anónimo";
        }
        drawApp(nombre, comentario, fecha);
        
    }
});

const drawApp = (nombre, comentario, fecha) => {
    caja_de_comentarios.innerHTML = `
    <div class="media">
    <img src="icono.png" width="64" height="64">
        <div class="media-body">
            <p class="nombre">${nombre} <span>${fecha}</span></p>
            <p class="comentario">${comentario}</p>
        </div>
    </div>
    `};

