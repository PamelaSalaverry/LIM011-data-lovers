import POTTER from './data/potter/potter.js';
import { filterData, sortData } from './data.js';
// Muestra personajes
let personajes = [];
const createAElement = (actores) => {
  let tarjeta = '';
  for (let i = 0; i < actores.length; i += 1) {
    tarjeta += `<figure class="list-personajes">
    <img class= 'potter-img' alt="imagen de potter" src="${actores[i].image}"/>
    <figcaption class= 'text-name'>
    <h3 class='potter-name'><strong>${actores[i].name}</strong></h3>
    <a href="#miModal" class="linkModal" data-image="${actores[i].image}"data-name="${actores[i].name}"
    data-gender="${actores[i].gender}"data-species="${actores[i].species}"data-house="${actores[i].house}"
    data-patronus="${actores[i].patronus}"data-wand="${actores[i].wand.core}"data-actor="${actores[i].actor}">+ info</a>
    </figcaption>
    </figure>`;
  }
  document.querySelector('#list-character').innerHTML = tarjeta;
  const listaLink = document.querySelectorAll('.linkModal');
  listaLink.forEach((elem) => {
    elem.addEventListener('click', () => {
      document.getElementById('personajeImagen').src = elem.dataset.image;
      document.getElementById('personajeNombre').innerHTML = elem.dataset.name;
      document.getElementById('personajeGenero').innerHTML = elem.dataset.gender;
      document.getElementById('personajeEspecie').innerHTML = elem.dataset.species;
      document.getElementById('personajeCasa').innerHTML = elem.dataset.house;
      document.getElementById('personajePatronus').innerHTML = elem.dataset.patronus;
      document.getElementById('personajeVarita').innerHTML = elem.dataset.wand;
      document.getElementById('personajeActor').innerHTML = elem.dataset.actor;
      document.getElementById('personajeVarita').innerHTML = elem.dataset.wand;
    });
  });
};
const btnEnter = document.getElementById('enter');
btnEnter.addEventListener('click', () => {
  personajes = filterData(POTTER, null);
  createAElement(personajes);
  document.getElementById('title-character').innerHTML = 'Conoce a los Personajes';
  document.getElementById('principal').classList.remove('hide');
  document.getElementById('about').classList.add('hide');
});
const imgLogo = document.getElementById('logo');
imgLogo.addEventListener('click', () => {
  document.getElementById('principal').classList.add('hide');
  document.getElementById('about').classList.remove('hide');
});
// Ordena alfabeticamente
const selectOpcion = document.querySelector('#opciones-ordenar');
selectOpcion.addEventListener('change', (event) => {
  createAElement(sortData(personajes, event.target.value));
});
// Pantallas de casa, varita y patronus
const selectElement = document.querySelector('#opciones-filtro');
selectElement.addEventListener('change', (event) => {
  if (event.target.value === 'casas') {
    document.getElementById('house').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('varita').classList.add('hide');
    document.getElementById('patronus').classList.add('hide');
    document.getElementById('profesion').classList.add('hide');
  } else if (event.target.value === 'varita') {
    document.getElementById('varita').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('house').classList.add('hide');
    document.getElementById('patronus').classList.add('hide');
    document.getElementById('profesion').classList.add('hide');
  } else if (event.target.value === 'patronus') {
    document.getElementById('patronus').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('house').classList.add('hide');
    document.getElementById('varita').classList.add('hide');
    document.getElementById('profesion').classList.add('hide');
  } else if (event.target.value === 'profesion') {
    document.getElementById('profesion').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('house').classList.add('hide');
    document.getElementById('varita').classList.add('hide');
    document.getElementById('patronus').classList.add('hide');
  }
});
// Filtra por casas
const imgGryffindor = document.getElementById('gryffindor');
imgGryffindor.addEventListener('click', () => {
  document.getElementById('house').classList.add('hide');
  document.getElementById('character').classList.remove('hide');
  document.getElementById('title-character').innerHTML = 'Personajes de la Casa Gryffindor';
  personajes = filterData(POTTER, { field: 'house', value: 'Gryffindor' });
  createAElement(personajes);
});
const imgHufflepuff = document.getElementById('hufflepuff');
imgHufflepuff.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('house').classList.add('hide');
  document.getElementById('title-character').innerHTML = 'Personaje de la Casa Huffepuff';
  personajes = filterData(POTTER, { field: 'house', value: 'Hufflepuff' });
  createAElement(personajes);
});
const imgSlytherin = document.getElementById('slytherin');
imgSlytherin.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('house').classList.add('hide');
  document.getElementById('title-character').innerHTML = 'Personajes de la Casa Slytherin';
  personajes = filterData(POTTER, { field: 'house', value: 'Slytherin' });
  createAElement(personajes);
});
const imgRavenclaw = document.getElementById('ravenclaw');
imgRavenclaw.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('house').classList.add('hide');
  document.getElementById('title-character').innerHTML = 'Personajes de la Casa Ravenclaw';
  personajes = filterData(POTTER, { field: 'house', value: 'Ravenclaw' });
  createAElement(personajes);
});
// Filtra por núcleo de varita
const imgDragon = document.getElementById('dragon');
imgDragon.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('varita').classList.add('hide');
  document.getElementById('title-character').innerHTML = 'Personajes con Varita de Fibra de Corazón de Dragon';
  personajes = filterData(POTTER, { field: ['wand', 'core'], value: 'dragon heartstring' });
  createAElement(personajes);
});
const imgFenix = document.getElementById('fenix');
imgFenix.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('varita').classList.add('hide');
  document.getElementById('title-character').innerHTML = 'Personajes con Varita de Pluma de Fenix';
  personajes = filterData(POTTER, { field: ['wand', 'core'], value: 'phoenix feather' });
  createAElement(personajes);
});
const imgUnicornio = document.getElementById('unicornio');
imgUnicornio.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('varita').classList.add('hide');
  document.getElementById('title-character').innerHTML = 'Personajes con Varita de Pelo de Unicornio';
  personajes = filterData(POTTER, { field: ['wand', 'core'], value: ['unicorn tail-hair', 'unicorn hair'] });
  createAElement(personajes);
});
// Filtra por tipo de Patronus
const imgsalvajes = document.getElementById('salvajes');
imgsalvajes.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('patronus').classList.add('hide');
  document.getElementById('title-character').innerHTML = 'Personajes con Patronus Salvajes';
  personajes = filterData(POTTER, { field: 'patronus', value: ['stag', 'otter', 'swan', 'doe', 'hare', 'hare', 'wolf', 'weasel', 'lynx'] });
  createAElement(personajes);
});
const imgDomesticos = document.getElementById('domesticos');
imgDomesticos.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('patronus').classList.add('hide');
  document.getElementById('title-character').innerHTML = 'Personajes con Patronus Domesticos';
  personajes = filterData(POTTER, { field: 'patronus', value: ['Jack Russell terrier', 'tabby cat', 'persian cat', 'horse'] });
  createAElement(personajes);
});
// Filtra por staff
const imgMaestro = document.getElementById('maestro');
imgMaestro.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('profesion').classList.add('hide');
  document.getElementById('title-character').innerHTML = 'Personajes que son Maestros';
  personajes = filterData(POTTER, { field: 'hogwartsStaff', value: true });
  createAElement(personajes);
});
const imgEstudiante = document.getElementById('estudiante');
imgEstudiante.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('profesion').classList.add('hide');
  document.getElementById('title-character').innerHTML = 'Personajes que son Estudiantes';
  personajes = filterData(POTTER, { field: 'hogwartsStudent', value: true });
  createAElement(personajes);
});
// Botón retroceder
const btnAtras = document.getElementById('atras');
btnAtras.addEventListener('click', () => {
  const filtro = document.getElementById('opciones-filtro');
  const valorFiltro = filtro.options[filtro.selectedIndex].value;
  if (valorFiltro === 'casas') {
    document.getElementById('house').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('varita').classList.add('hide');
    document.getElementById('patronus').classList.add('hide');
    document.getElementById('profesion').classList.add('hide');
  } else if (valorFiltro === 'varita') {
    document.getElementById('varita').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('house').classList.add('hide');
    document.getElementById('patronus').classList.add('hide');
    document.getElementById('profesion').classList.add('hide');
  } else if (valorFiltro === 'patronus') {
    document.getElementById('patronus').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('house').classList.add('hide');
    document.getElementById('varita').classList.add('hide');
    document.getElementById('profesion').classList.add('hide');
  } else if (valorFiltro === 'profesion') {
    document.getElementById('profesion').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('house').classList.add('hide');
    document.getElementById('varita').classList.add('hide');
    document.getElementById('patronus').classList.add('hide');
  }
});
