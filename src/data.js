/* Manejo de data */

// esta es una función de ejemplo

const filterData = (data, condition) => {
  const personajesFiltrados = [];

  data.forEach(function(personaje) {
    const personajeResumen = {
      name: personaje.name;
      image: personaje.image;
    }
    personajesFiltrados.push(personajeResumen);
  });

  return personajesFiltrados;
};

const sortData = (data, sortOrder) => {
  const personajesOrdenados = []

  return data.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
}

export {filterData, sortData}
