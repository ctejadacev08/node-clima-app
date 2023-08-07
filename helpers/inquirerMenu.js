const inquirer = require("inquirer");

require("colors");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que desea hacer?\n",
    choices: [
      {
        value: "1",
        name: "1. Buscar Clima".green,
      },
      {
        value: "2",
        name: "2. Historial Clima",
      },
      {
        value: "0",
        name: "0. Salir",
      },
    ],
  },
];

const menuInquirer = async () => {
  console.clear();
  console.log("=======================================".green);
  console.log("===========  Menu Principal  ==========".white);
  console.log("=======================================\n".green);

  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"enter".green} para continuar`,
    },
  ];
  await inquirer.prompt(question);
};

module.exports = {
  menuInquirer,
  pausa,
};
