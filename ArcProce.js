const fs = require('fs').promises;

async function processFile() {
    try {
        const data = await fs.readFile('input.txt', 'utf8');
        const upperCaseData = data.toUpperCase();
        await fs.writeFile('output.txt', upperCaseData);
        console.log('Contenido procesado y guardado en output.txt');
    } catch (error) {
        console.error('Error al procesar el archivo:', error);
    }
}

processFile();
