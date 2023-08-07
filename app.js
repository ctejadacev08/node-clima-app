const { menuInquirer, pausa } = require("./helpers/inquirerMenu");

const main = async () => {
  let op = "";
  // const tareas = new Tareas();

  // const infoData = leerData();
  // if (infoData) {
  //   //establecer las tareas
  //   // cargar las tareas
  //   tareas.cargarTareasArray(infoData);
  // }

  do {
    op = await menuInquirer(); //funcion que imprime el menu principal y retorna una opcion
    switch (op) {
    }
    await pausa();
  } while (op !== "0");
};
main();
