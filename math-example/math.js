let PI = 3.1416;

let sumar = (x1, x2) => {
    return x1 + x2;
}

let restar = (x1, x2) => {
    return x1 - x2;
}

let dividir = (x1, x2) => {
    if(x2 == 0) {
        viewErrorDivision();
    }else {
        return x1/x0;
    }
}

let viewErrorDivision = () =>{
    console.log('No se puede dividir por cero');
}

exports.sumar = sumar;
exports.restar = restar;
exports.dividir = dividir;
exports.PI = PI;