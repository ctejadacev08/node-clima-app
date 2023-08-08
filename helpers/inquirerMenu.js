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

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];
  const { desc } = await inquirer.prompt(question);
  return desc;
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
  leerInput,
  pausa,
};
