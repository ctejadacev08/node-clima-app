const { default: axios } = require("axios");

class Busquedas {
  historial = ["Lima", "Madrid", "Bogota", "Buenos Aires"];

  constructor() {
    //TODO: leer DB si existe
  }

  async listarCiudad(lugar = "") {
    // petición http
    const resp = await axios.get("https://reqres.in/api/users?page=2");
    console.log(resp.data);

    return [];
  }
}

module.exports = Busquedas;
