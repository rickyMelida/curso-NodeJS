//Declaramos un objeto llamado Math
const Math = {};

function sumar(x1, x2) {
    return x1 + x2;
}

function restar(x1, x2) {
    return x1 - x2;
}

function multiplicar(x1, x2) {
    return x1 * x2;
}

function dividir(x1, x2) {
    if(x2 == 0) {
        console.log('No se puede dividir por 0');
    }else {
            return x1 / x2;
    }
}

//Agregamos las funciones al objeto Math
Math.sumar = sumar;
Math.restar = restar;
Math.multiplicar = multiplicar;
Math.dividir =dividir;

//Exportamos el modulo que ya contiene las funciones
module.exports = Math;
