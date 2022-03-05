const colors = require('colors')

const fs = require("fs");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";

    if(listar){
      console.log(`Tabla del: ${base}\n`.rainbow);
    }

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} x ${i} = ${colors.green(base * i) }\n`;
    }
    if(listar){
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    console.log(`tabla-${base}.txt creada`);
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  crearArchivo,
};
