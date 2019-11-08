import {filterData, sortData} from './data.js';
import potter from './data/potter/potter.js';
// Función que imprime
const createAElement = mostrar => {
  let tarjeta = '';
  for (let i = 0; i < potter.length; i += 1) {
    tarjeta += `<figure class="list-personajes">
      <img class= 'potter-img' alt="imagen de potter" src="${mostrar[i].image}"/>
      <figcaption class= 'text-name'>
      <h1 class='potter-name'><strong>${mostrar[i].name}</strong></h1>
      </figcaption>
      </figure>`
  }
  document.querySelector('#list-character').innerHTML = tarjeta
}
// Entro a la página principal-Veo todos los personajes
const btnEnter = document.getElementById('enter');
btnEnter.addEventListener('click', () => {
  createAElement(filterData(potter));
  document.getElementById('principal').classList.remove('hide');
  document.getElementById('home').classList.add('hide');
});
// Botón que regresa a la primera pantalla
const btnInicio = document.getElementById('inicio');
btnInicio.addEventListener('click', () => {
document.getElementById('home').classList.remove('hide'); 
document.getElementById('principal').classList.add('hide');
});
// Ordena alfabeticamente
const selectOpcion = document.querySelector('#opciones-ordenar');
selectOpcion.addEventListener('change', (event) => {
  if (event.target.value === 'ascendente') {
    createAElement(sortData(potter));
    createAElement(filterData(potter)).style.display = 'none';
  } else if (event.target.value === 'descendente') {
    document.getElementById('varita').classList.remove('hide');
    document.getElementById('character').classList.add('hide');
    document.getElementById('house').classList.add('hide');
    document.getElementById('patronus').classList.add('hide');
  }});

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
document.getElementById('casas-gryffindor').classList.remove('hide');
document.getElementById('house').classList.add('hide');
});
const imgHufflepuff = document.getElementById('hufflepuff');
imgHufflepuff.addEventListener('click', () => {
document.getElementById('casas-hufflepuff').classList.remove('hide');
document.getElementById('house').classList.add('hide');
});
const imgSlytherin = document.getElementById('slytherin');
imgSlytherin.addEventListener('click', () => {
document.getElementById('casas-slytherin').classList.remove('hide');
document.getElementById('house').classList.add('hide');
});
const imgRavenclaw = document.getElementById('ravenclaw');
imgRavenclaw.addEventListener('click', () => {
document.getElementById('casas-ravenclaw').classList.remove('hide');
document.getElementById('house').classList.add('hide');
});
// Filtra por núcleo de varita
const imgDragon = document.getElementById('dragon');
imgDragon.addEventListener('click', () => {
document.getElementById('varita-dragon').classList.remove('hide');
document.getElementById('varita').classList.add('hide');
});
const imgFenix = document.getElementById('fenix');
imgFenix.addEventListener('click', () => {
document.getElementById('varita-fenix').classList.remove('hide');
document.getElementById('varita').classList.add('hide');
});
const imgUnicornio = document.getElementById('unicornio');
imgUnicornio.addEventListener('click', () => {
document.getElementById('varita-unicornio').classList.remove('hide');
document.getElementById('varita').classList.add('hide');
});
// Filtra por tipo de Patronus
const imgsalvajes = document.getElementById('salvajes');
imgsalvajes.addEventListener('click', () => {
document.getElementById('patronus-salvajes').classList.remove('hide');
document.getElementById('patronus').classList.add('hide');
});
const imgDomesticos = document.getElementById('domesticos');
imgDomesticos.addEventListener('click', () => {
document.getElementById('patronus-domesticos').classList.remove('hide');
document.getElementById('patronus').classList.add('hide');
});
const btnGryffindor = document.getElementById('atras-gryffindor');
btnGryffindor.addEventListener('click', () => {
document.getElementById('house').classList.remove('hide');
document.getElementById('casas-gryffindor').classList.add('hide');
});
const btnHufflepuff = document.getElementById('atras-hufflepuff');
btnHufflepuff.addEventListener('click', () => {
document.getElementById('house').classList.remove('hide');
document.getElementById('casas-hufflepuff').classList.add('hide');
});
const btnSlytherin = document.getElementById('atras-slytherin');
btnSlytherin.addEventListener('click', () => {
document.getElementById('house').classList.remove('hide');
document.getElementById('casas-slytherin').classList.add('hide');
});
const btnRavenclaw = document.getElementById('atras-ravenclaw');
btnRavenclaw.addEventListener('click', () => {
document.getElementById('house').classList.remove('hide');
document.getElementById('casas-ravenclaw').classList.add('hide');
});
const btnDragon = document.getElementById('atras-dragon');
btnDragon.addEventListener('click', () => {
document.getElementById('varita').classList.remove('hide');
document.getElementById('varita-dragon').classList.add('hide');
});
const btnFenix = document.getElementById('atras-fenix');
btnFenix.addEventListener('click', () => {
document.getElementById('varita').classList.remove('hide');
document.getElementById('varita-fenix').classList.add('hide');
});
const btnUnicornio = document.getElementById('atras-unicornio');
btnUnicornio.addEventListener('click', () => {
document.getElementById('varita').classList.remove('hide');
document.getElementById('varita-unicornio').classList.add('hide');
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
const btnDomesticos = document.getElementById('atras-domesticos');
btnDomesticos.addEventListener('click', () => {
document.getElementById('patronus').classList.remove('hide');
document.getElementById('patronus-domesticos').classList.add('hide');
});