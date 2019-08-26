var array_posibles = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6'];
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
function PresionarFicha() {

}