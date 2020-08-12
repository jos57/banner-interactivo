var titulo = document.getElementById('titulo').style;

var ver = true;
setInterval(myfunction, 400, ver);

function myfunction(){
    if(ver==true){
        titulo.display='none';
        ver = false;
    }else {
        titulo.display='block';
        ver = true;
    }
}

function sonar(){
    var sonido = new Audio('sounds/Evil_Laugh_1-Timothy-64737261.mp3');
    sonido.play();
    var sonido2 = new Audio('sounds/shotgun-spas_12-RA_The_Sun_God-503834910.mp3');
    sonido2.play();
    var boton = document.getElementById('boton');
    boton.style.background='black';
    boton.style.transition='.6s';
    boton.style.transform='rotate(360deg)';
    boton.style.border='1px solid white';
    
}
    
function verImagen() {
    var payaso = document.getElementById('imagen30').style;
    payaso.opacity='1';
    payaso.transition='1s';
}

function dejarVer() {
    var payaso = document.getElementById('imagen30').style;
    payaso.opacity='0';
    payaso.transition='1s';
    
}    

   

   