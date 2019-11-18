import POTTER from './data/potter/potter.js';
import { filterData, sortData } from './data.js';
// Función que imprime imagen y nombre del personaje
const createAElement = (mostrar) => {
  let tarjeta = '';
  for (let i = 0; i < mostrar.length; i += 1) {
    tarjeta += `<figure class="list-personajes">
    <img class= 'potter-img' alt="imagen de potter" src="${mostrar[i].image}"/>
    <figcaption class= 'text-name'>
    <h3 class='potter-name'><strong>${mostrar[i].name}</strong></h3>
    <a href="#miModal" class="linkModal" data-image="${mostrar[i].image}" data-name="${mostrar[i].name}"
    data-gender="${mostrar[i].gender}"data-house="${mostrar[i].house}"
    data-patronus="${mostrar[i].patronus}"data-actor="${mostrar[i].actor}">Ver más</a>
    </figcaption>
    </figure>`;
  }
  document.querySelector('#list-character').innerHTML = tarjeta;
// MODAL
  let elementsArray = document.querySelectorAll(".linkModal");
  elementsArray.forEach(function(elem) {
      elem.addEventListener("click", function() {
        document.getElementById('personajeImagen').src = elem.dataset.image;
        document.getElementById('personajeNombre').innerHTML = elem.dataset.name;
        document.getElementById('personajeGenero').innerHTML = elem.dataset.gender;
        document.getElementById('personajeCasa').innerHTML = elem.dataset.house;
        document.getElementById('personajePatronus').innerHTML = elem.dataset.patronus;
        document.getElementById('personajeActor').innerHTML = elem.dataset.actor;
      });
  });
};
// Imprime personajes
const btnEnter = document.getElementById('enter');
btnEnter.addEventListener('click', () => {
  createAElement(filterData(POTTER, null));
  document.getElementById('principal').classList.remove('hide');
  document.getElementById('about').classList.add('hide');
});
// Botón que regresa a la primera pantalla
const btnInicio = document.getElementById('btn-about');
btnInicio.addEventListener('click', () => {
document.getElementById('about').classList.remove('hide'); 
document.getElementById('principal').classList.add('hide');
});
// Botón Home 
const btnHome = document.getElementById('btn-home');
btnHome.addEventListener('click', () => {
  createAElement(filterData(POTTER, null))
});
// Ordena alfabeticamente
const selectOpcion = document.querySelector('#opciones-ordenar');
selectOpcion.addEventListener('change', (event) => {
  createAElement(sortData(POTTER, event.target.value));
});
// Pantallas de casa, varita y patronus
const selectElement = document.querySelector('#opciones-filtro');
selectElement.addEventListener('change', (event) => {
if (event.target.value === 'casas') {
    document.getElementById('house').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('varita').classList.add('hide');
    document.getElementById('patronus').classList.add('hide');
} else if (event.target.value === 'varita') {
    document.getElementById('varita').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('house').classList.add('hide');
    document.getElementById('patronus').classList.add('hide');
} else if (event.target.value === 'patronus') {
    document.getElementById('patronus').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('house').classList.add('hide');
    document.getElementById('varita').classList.add('hide');
}
});
// Filtra por casas
const imgGryffindor = document.getElementById('gryffindor');
imgGryffindor.addEventListener('click', () => {
  document.getElementById('house').classList.add('hide');
  document.getElementById('character').classList.remove('hide');
  document.getElementById('title-character').innerHTML = 'Personajes de la Casa Gryffindor';
  createAElement(filterData(POTTER, { field: 'house', value: 'Gryffindor' }));
});
const imgHufflepuff = document.getElementById('hufflepuff');
imgHufflepuff.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('house').classList.add('hide');
  document.getElementById('title-character').innerHTML = 'Personajes de la Casa Huffepuff';
  createAElement(filterData(POTTER, { field: 'house', value: 'Hufflepuff' }));
});
const imgSlytherin = document.getElementById('slytherin');
imgSlytherin.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('house').classList.add('hide');
  document.getElementById('title-character').innerHTML = 'Personajes de la Casa Slytherin';
  createAElement(filterData(POTTER, { field: 'house', value: 'Slytherin' }));
});
const imgRavenclaw = document.getElementById('ravenclaw');
imgRavenclaw.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('house').classList.add('hide');
  document.getElementById('title-character').innerHTML = 'Personajes de la Casa Ravenclaw';
  createAElement(filterData(POTTER, { field: 'house', value: 'Ravenclaw' }));
});
// Filtra por núcleo de varita
const imgDragon = document.getElementById('dragon');
imgDragon.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('varita').classList.add('hide');
  document.getElementById('title-character').innerHTML = 'Personajes con Varita de Fibra de Corazón de Dragon';
  createAElement(filterData(POTTER, { field: ['wand', 'core'], value: 'dragon heartstring' }));
});
const imgFenix = document.getElementById('fenix');
imgFenix.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('varita').classList.add('hide');
  document.getElementById('title-character').innerHTML = 'Personajes con Varita de Pluma de Fenix';
  createAElement(filterData(POTTER, { field: ['wand', 'core'], value: 'phoenix feather' }));
});
const imgUnicornio = document.getElementById('unicornio');
imgUnicornio.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('varita').classList.add('hide');
  document.getElementById('title-character').innerHTML = 'Personajes con Varita de Pelo de Unicornio';
  createAElement(filterData(POTTER, { field: ['wand', 'core'], value: ['unicorn tail-hair', 'unicorn hair']}));
});
// Filtra por tipo de Patronus
const imgsalvajes = document.getElementById('salvajes');
imgsalvajes.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('patronus').classList.add('hide');
  document.getElementById('title-character').innerHTML = 'Personajes con Patronus Salvajes';
  createAElement(filterData(POTTER, { field: 'patronus', value: ['stag', 'otter', 'swan', 'doe', 'hare', 'hare', 'wolf', 'weasel', 'cedar', 'lynx'] }));
});
const imgDomesticos = document.getElementById('domesticos');
imgDomesticos.addEventListener('click', () => {
  document.getElementById('character').classList.remove('hide');
  document.getElementById('patronus').classList.add('hide');
  document.getElementById('title-character').innerHTML = 'Personajes con Patronus Domesticos';
  createAElement(filterData(POTTER, { field: 'patronus', value: ['Jack Russell terrier', 'tabby cat', 'persian cat', 'horse'] }));
});
const btnAtras = document.getElementById('atras');
btnAtras.addEventListener('click', () => {
  const filtro = document.getElementById('opciones-filtro');
  const valorFiltro = filtro.options[filtro.selectedIndex].value;
  if (valorFiltro === 'casas') {
    document.getElementById('house').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('varita').classList.add('hide');
    document.getElementById('patronus').classList.add('hide');
  } else if (valorFiltro === 'varita') {
    document.getElementById('varita').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('house').classList.add('hide');
    document.getElementById('patronus').classList.add('hide');
  } else if (valorFiltro === 'patronus') {
    document.getElementById('patronus').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('house').classList.add('hide');
    document.getElementById('varita').classList.add('hide');
  }
});
const btnDomesticos = document.getElementById('domesticos');
btnDomesticos.addEventListener('click', () => {
document.getElementById('patronus').classList.remove('hide');
document.getElementById('domesticos').classList.add('hide');
});
