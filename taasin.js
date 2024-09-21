const fs = require('fs').promises;

function readFileAsync(filePath) {
    return fs.readFile(filePath, 'utf8')
        .then(data => {
            console.log('Contenido del archivo:', data);
        })
        .catch(error => {
            console.error('Error al leer el archivo:', error);
        });
}

readFileAsync('input.txt');
