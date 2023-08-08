const axios = require("axios");
const { menuInquirer, pausa, leerInput } = require("./helpers/inquirerMenu");
const Busquedas = require("./models/busqueda");

const main = async () => {
  let op = "";
  const busqueda = new Busquedas();

  do {
    op = await menuInquirer(); //funcion que imprime el menu principal y retorna una opcion
    switch (op) {
      case "1":
        // Mostrar mensaje
        const lugar = await leerInput("Ciudad :");
        await busqueda.listarCiudad(lugar);

        // Buscar Lugares
        // Seleccionar el lugar
        // Clima
        // Mostrar resultados
        console.log("\nInformación de la ciudad\n");
        break;
    }
    if (op !== 0) await pausa();
  } while (op !== "0");
};
main();
