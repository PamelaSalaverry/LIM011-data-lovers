// Filtro por categorías
const filterData = (data, condition) => {
  let personajesFiltrados = [];
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
        }
      }
      if (campoAFiltrar === condition.value) {
        return true;
      }
      return false;
    });
  }
  return personajesFiltrados;
  // retorna array de objetos
};
// Usando if
// const sortData = (data, sortOrder) => {
//   if (sortOrder === 'ascendente') {
//     return data.sort((a, b) => {
//       if (a.name > b.name) {
//         return 1;
//       }
//       if (a.name < b.name) {
//         return -1;
//       }
//       return 0;
//     });
//   } if (sortOrder === 'descendente') {
//     return data.sort((a, b) => {
//       if (a.name < b.name) {
//         return 1;
//       } if (a.name > b.name) {
//         return -1;
//       }
//       return 0;
//     });
//   }
//   return data;
// };
// Usando ternarios
// const sortData = (data) => {
//   let ordered = data;
//   ordered = data.sort((a, b) => (a.name > b.name ? 1 : -1));
//   return ordered
// }
// Usando ternarios y switch
const sortData = (data, sortOrder) => {
  let ordered = data;
  switch (sortOrder) {
    case 'ascendente':
      ordered = data.sort((a, b) => (a.name > b.name ? 1 : -1));
      break;
    case 'descendente':
      ordered = data.sort((a, b) => (a.name < b.name ? 1 : -1));
      break;
    default:
      break;
  }
  return ordered;
};
export { filterData, sortData };
