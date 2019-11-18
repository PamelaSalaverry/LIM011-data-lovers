// importamos la función `example`
<<<<<<< HEAD
import { filterData, sortData } from '../src/data.js';
import POTTER from './data/potter/potter.js';
// Test sortData - ordena alfabeticamente
describe('sortData', () => {
  it('debería ser una función', () => {
    expect(typeof sortData).toBe('function');
  });
  it('debería retornar data a-z', () => {
    expect(sortData(POTTER, 'ascendente')[0].name).toBe('Argus Filch');
  });
  it('debería retornar data z-a', () => {
    expect(sortData(POTTER, 'descendente')[0].name).toBe('Vincent Crabbe');
=======
import { sortData, filterData } from '../src/data.js';
import POTTER from '../src/data/potter/potter.js';

describe('sortData', () => {
  it('debería ser una función', () => {
    expect(typeof sortData).toBe('function');
  });

  it('debería ... ascendente', () => {
    expect(sortData(POTTER, 'ascendente')[0].name).toBe('Argus Filch');
  });
  it('debería ... descendente', () => {
    expect(sortData(POTTER, 'descendente')[0].name).toBe('Vincent Crabbe');
  });
});

describe('filterData', () => {
  it('debería ser una función', () => {
    expect(typeof filterData).toBe('function');
  });
  it('debería traer todos los elementos', () => {
    expect(filterData(POTTER, null)).toHaveLength(POTTER.length);
  });
  it('debería ... Gryffindor', () => {
    expect(filterData(POTTER, { field: 'house', value: 'Gryffindor' })[0].house).toBe('Gryffindor');
  });
  it('debería ... Hufflepuff', () => {
    expect(filterData(POTTER, { field: 'house', value: 'Hufflepuff' })[0].house).toBe('Hufflepuff');
  });
  it('debería ... Slytherin', () => {
    expect(filterData(POTTER, { field: 'house', value: 'Slytherin' })[0].house).toBe('Slytherin');
  });
  it('debería ... Ravenclaw', () => {
    expect(filterData(POTTER, { field: 'house', value: 'Ravenclaw' })[0].house).toBe('Ravenclaw');
  });
  it('debería ... dragon', () => {
    expect(filterData(POTTER, { field: ['wand', 'core'], value: 'dragon heartstring' })[0].wand.core).toBe('dragon heartstring');
  });
  it('debería ... fenix', () => {
    expect(filterData(POTTER, { field: ['wand', 'core'], value: 'phoenix feather' })[0].wand.core).toBe('phoenix feather');
  });
  it('debería ... Unicornio', () => {
    expect(filterData(POTTER, { field: ['wand', 'core'], value: ('unicorn tail-hair', 'unicorn hair') })[0].wand.core).toBe(('unicorn tail-hair', 'unicorn hair'));
  });
  it('debería ... salvajes', () => {
    const listaSalvajes = ['stag', 'otter', 'swan', 'doe', 'hare', 'hare', 'wolf', 'weasel', 'cedar', 'lynx'];
    expect(listaSalvajes.includes(filterData(POTTER, { field: 'patronus', value: listaSalvajes })[0].patronus)).toBe(true);
  });
  it('debería ... domesticos', () => {
    const listaPatronus = ['Jack Russell terrier', 'tabby cat', 'persian cat', 'horse'];

    expect(listaPatronus.includes(filterData(POTTER, { field: 'patronus', value: listaPatronus })[0].patronus)).toBe(true);
>>>>>>> cfefdab0c993bb1319c1c721e58b46801cee1085
  });
});
// Test filterData - Filtra por categorías
describe('filterData', () => {
  it('debería ser una función', () => {
    expect(typeof filterData).toBe('function');
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
  it('debería ... domesticos', () => {
    const listaPatronus = ['Jack Russell terrier', 'tabby cat', 'persian cat', 'horse'];
    expect(listaPatronus.includes(filterData(POTTER, { field: 'patronus', value: listaPatronus })[0].patronus)).toBe(true);
  });
});