let fs = require('fs');

let crear = (fileName, content)=>{
    fs.writeFile(`./${fileName}.txt`, `${content}`, (err)=>{
        if(err) {
            console.log(err);
        }else {
            console.log(`El archivo fue creado`);
        }
    });
};

let leer = (fileName) => {
    fs.readFile(`./${fileName}.txt`, (err, data) => {
        if(err) {
            console.log(err);
        }else {
            console.log(data.toString());
        }
    });
};

let existe = (fileName) => {
    fs.exists(`./${fileName}.txt`, (res) => {
        if(res) {
            console.log('Yes, exists the file');
        }else {
            console.log('No, not exists the file');
        }
    });
};

module.exports.crear = crear;
module.exports.leer = leer;
module.exports.existe = existe;
//console.log('Ultima linea de codigo');
