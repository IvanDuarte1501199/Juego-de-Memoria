var array_posibles = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6'];
var intentos = 10;
var ficha_a_comprobar;
var ficha_a_guardar_id;
var oculta_a_guardar_id;
var pos = 1;

function MezclarFichas() {
    var i = array_posibles.length;
    var j;
    var aux;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        console.log(j);
        aux = array_posibles[j];
        array_posibles[j] = array_posibles[i];
        array_posibles[i] = aux;
    }
}
function UbicarFichas() {
    for (let i = 0; i < array_posibles.length; i++) {
        document.getElementById('ficha' + i.toString()).innerHTML = array_posibles[i];
    }
}


function PresionarFicha(oculta, ficha) {
    if (pos == 1) {
        DarVueltaFicha(oculta, ficha);
        ficha_a_comprobar = document.getElementById(ficha).innerHTML;
        ficha_a_guardar_id = document.getElementById(ficha).id;
        oculta_a_guardar_id = document.getElementById(oculta).id;
        pos++;
    }
    else {
        DarVueltaFicha(oculta, ficha);
        if (ficha_a_comprobar != document.getElementById(ficha).innerHTML) {
            setTimeout(function () {
                document.getElementById(ficha).style.display = 'none';
                document.getElementById(oculta).style.display = 'grid';
                document.getElementById(oculta_a_guardar_id).style.display = 'grid';
                document.getElementById(ficha_a_guardar_id).style.display = 'none';
            }, 300);

            intentos--;
            if(intentos!=0){
            document.getElementById('intentos').innerHTML="Intentos = " + intentos.toString();
            }else{
                alert('Perdiste malaso de ruflet');
                window.location.reload();
            }

        }else{
            if(ComprobarVictoria()==true){
                alert("GANASTE");
                window.location.reload();
            }
        }
        pos--;
    }
}

function ComprobarVictoria() {
    let ganaste = true;
    for (let i = 0; i < 12; i++) {
        if (document.getElementById('oculta'+i.toString()).style.display == 'grid') {
            ganaste = false;
        }
    }
    return ganaste;
}


function DarVueltaFicha(oculta, ficha) {
    if (document.getElementById(ficha).style.display == 'none') {
        document.getElementById(ficha).style.display = 'grid';
        document.getElementById(oculta).style.display = 'none';
    } else {

    }
}
