const fs = require('fs')

// fs => file system

// Criar arquivo
/* fs.writeFile('myfile.txt', 'Hello World', (err) => {
    if (err) {
        throw err;
    }
}) */

// Ler arquivo
/* fs.readFile('myfile.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString('utf-8'))
}) */

// Ler o diretório (arquivos da raiz)
/* fs.readdir('.', (err, files) => {
    if (err) {
        throw err;
    }
    for (let file in files) {
        console.log(files[file])
    }
}) */

//Lendo apenas arquivos .js
fs.readdirSync('.')
    .filter((file) => {
        return file.endsWith('.js');
    })
    .forEach((file) => { 
        console.log(file)
    })