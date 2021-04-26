//importamos el modulo file system para el manejo de archivos
const fs = require('fs');

//Con este metodo creamos un nuevo archivo
//los parametros son fs.writeFile(nombreArchivo, contenido, funcion que se ejecutara al terminar el proceso anterior(esta funcion recibe un parametro de error))
/*fs.writeFile('./texto.txt', 'linea uno', function(err) {
    if (err) {
        console.log(err);
    }else {
        console.log('Archivo Creado');
    }
});*/

console.log('Ultima linea de codigo a la hora de crear');

//Con este metodo creamos un nuevo archivo
//los parametros son fs.readFile(nombreArchivo a leer, funcion que se ejecutara al terminar el proceso de leer 
// (esta funcion recibe dos parametro, el error y los datos del archivo))
fs.readFile('./texto.txt', function(err, data) {
    if(err) {
        console.log(err);
    }else {
        console.error(data.toString());
    }
});


