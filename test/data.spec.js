// importamos las funciones y la data
import { sortData, filterData } from '../src/data.js';
import POTTER from '../src/data/potter/potter.js';
// Porción de data para poder comprobar todas las condiciones de la función sortData
const prueba = [
  {
    name: 'Harry Potter',
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
    dateOfBirth: '31-07-1980',
    yearOfBirth: 1980,
    ancestry: 'half-blood',
    eyeColour: 'green',
    hairColour: 'black',
    wand: {
      wood: 'holly',
      core: 'phoenix feather',
      length: 11,
    },
    patronus: 'stag',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Daniel Radcliffe',
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/harry.jpg',
  },
  {
    name: 'Harry Potter',
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
    dateOfBirth: '31-07-1980',
    yearOfBirth: 1980,
    ancestry: 'half-blood',
    eyeColour: 'green',
    hairColour: 'black',
    wand: {
      wood: 'holly',
      core: 'phoenix feather',
      length: 11,
    },
    patronus: 'stag',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Daniel Radcliffe',
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/harry.jpg',
  },
  {
    name: 'Hermione Granger',
    species: 'human',
    gender: 'female',
    house: 'Gryffindor',
    dateOfBirth: '19-09-1979',
    yearOfBirth: 1979,
    ancestry: 'muggleborn',
    eyeColour: 'brown',
    hairColour: 'brown',
    wand: {
      wood: 'vine',
      core: 'dragon heartstring',
      length: '',
    },
    patronus: 'otter',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Emma Watson',
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
  },
  {
    name: 'Ron Weasley',
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
    dateOfBirth: '01-03-1980',
    yearOfBirth: 1980,
    ancestry: 'pure-blood',
    eyeColour: 'blue',
    hairColour: 'red',
    wand: {
      wood: 'willow',
      core: 'unicorn tail-hair',
      length: 14,
    },
    patronus: 'Jack Russell terrier',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Rupert Grint',
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/ron.jpg',
  },
];

// Test sortData - ordena alfabeticamente
describe('sortData', () => {
  it('debería ser una función', () => {
    expect(typeof sortData).toBe('function');
  });
  it('debería orden por default', () => {
    expect(sortData(POTTER, ' ')[0].name).toBe('Harry Potter');
  });
  it('debería retornar data a-z', () => {
    expect(sortData(POTTER, 'ascendente')[0].name).toBe('Argus Filch');
  });
  it('debería retornar data z-a', () => {
    expect(sortData(POTTER, 'descendente')[0].name).toBe('Vincent Crabbe');
  });
  it('debería retornar Harry Potter', () => {
    expect(sortData(prueba, 'ascendente')[0].name).toBe('Harry Potter');
  });
  it('debería retornar Ron Weasley', () => {
    expect(sortData(prueba, 'descendente')[0].name).toBe('Ron Weasley');
  });
});
// Test filterData - Filtra por categorías
describe('filterData', () => {
  it('debería ser una función', () => {
    expect(typeof filterData).toBe('function');
  });
  // Todos los personajes
  it('debería traer todos los elementos', () => {
    expect(filterData(POTTER, null)).toHaveLength(POTTER.length);
  });
  // Por casas
  it('debería traer a Slytherin', () => {
    expect(filterData(POTTER, { field: 'house', value: 'Slytherin' })[0].house).toBe('Slytherin');
  });
  it('debería traer a Gryffindor', () => {
    expect(filterData(POTTER, { field: 'house', value: 'Gryffindor' })[0].house).toBe('Gryffindor');
  });
  it('debería traer a Hufflepuff', () => {
    expect(filterData(POTTER, { field: 'house', value: 'Hufflepuff' })[0].house).toBe('Hufflepuff');
  });
  it('debería traer a Ravenclaw', () => {
    expect(filterData(POTTER, { field: 'house', value: 'Ravenclaw' })[0].house).toBe('Ravenclaw');
  });
  // Por varitas
  it('debería retornar personajes con varita de pluma de fenix', () => {
    expect(filterData(POTTER, { field: ['wand', 'core'], value: 'phoenix feather' })[0].wand.core).toBe('phoenix feather');
  });
  it('debería retornar personajes con varita de corazón de dragon', () => {
    expect(filterData(POTTER, { field: ['wand', 'core'], value: 'dragon heartstring' })[0].wand.core).toBe('dragon heartstring');
  });
  it('debería retornar personajes con varitas de pelo de unicornio', () => {
    expect(filterData(POTTER, { field: ['wand', 'core'], value: ('unicorn tail-hair', 'unicorn hair') })[0].wand.core).toBe(('unicorn tail-hair', 'unicorn hair'));
  });
  // Por patronus
  it('debería retornar patronus salvajes', () => {
    const listaSalvajes = ['stag', 'otter', 'swan', 'doe', 'hare', 'hare', 'wolf', 'weasel', 'cedar', 'lynx'];
    expect(listaSalvajes.includes(filterData(POTTER, { field: 'patronus', value: listaSalvajes })[0].patronus)).toBe(true);
  });
  it('debería retornar patronus domesticos', () => {
    const listaPatronus = ['Jack Russell terrier', 'tabby cat', 'persian cat', 'horse'];
    expect(listaPatronus.includes(filterData(POTTER, { field: 'patronus', value: listaPatronus })[0].patronus)).toBe(true);
  });
});
