// Filtro por categorías
const filterData = (data, condition) => {
  let personajesFiltrados = [];
  // Buscar por qué solo funciona null
  if (condition === null) {
    personajesFiltrados = data;
  } else {
    personajesFiltrados = data.filter((personaje) => {
      let campoAFiltrar;
      // Verifica si es un array
      if (Array.isArray(condition.field)) {
        campoAFiltrar = personaje[condition.field[0]][condition.field[1]];
      } else {
        campoAFiltrar = personaje[condition.field];
      } 
      if (Array.isArray(condition.value)) {
        if (condition.value.includes(campoAFiltrar)) {
          return true;
        } else {
          return false;
        }
      } if (campoAFiltrar === condition.value) {
        return true;
      } else {
        return false;
      }
    });
  }
  return personajesFiltrados;
  // retorna array de objetos 
};
const sortData = (data, sortOrder) => {
  if (sortOrder === 'ascendente') {
    return data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  } if (sortOrder === 'descendente') {
    return data.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      } if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  }
};
export { filterData, sortData };
