//menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta coulto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez seleccionado una opcion
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//creo las barritas de una barra particular identificanda por su id

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);

    }
}
//selecciono todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html); 
let javascript = document.getElementById("javascript");
crearBarra(javascript); 
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress); 
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop); 
let php = document.getElementById("php");
crearBarra(php); 
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator); 

//Ahora voy a guardar la cantidad debarritas que se van a ir pintando por cada barra
//para eso utilizo un arreglo, cada posicion pertenece a un elemento
//comienza en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//ste variable la voy a utilizar de bandera para saber si ya se ejecuto la animacion
let entero = false;

//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300&& entero==false){
        entero = true;
        const intervalHtml = setInterval(function(){
            pintarbarra(html,16, 0, intervalHtml);
        },100)
        const intervaljavascript = setInterval(function(){
            pintarbarra(javascript,9, 1, intervaljavascript);
        },100)
        const intervalwordpress = setInterval(function(){
            pintarbarra(wordpress,10, 2, intervalwordpress);
        },100)
        const intervalphotoshop = setInterval(function(){
            pintarbarra(photoshop,13, 3, intervalphotoshop);
        },100)
        const intervalphp = setInterval(function(){
            pintarbarra(php,13, 4, intervalphp);
        },100)
        const intervalilustrator = setInterval(function(){
            pintarbarra(ilustrator,13, 5, intervalilustrator);
        },100)
    }
}

//lleno una barra particular con la cantidad indicada
function pintarbarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e")
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mause para aplicar la animacion de la barra 
window.onscroll = function(){
    efectoHabilidades();
}


